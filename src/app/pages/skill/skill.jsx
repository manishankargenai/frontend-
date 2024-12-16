"use client";
import { useState, useEffect } from 'react';
import React from 'react';
import { X } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import QAInterface from './QAInterface';
import { Pie } from 'react-chartjs-2';

export default function Skill() {
  const searchParams = useSearchParams();
  const [dashboardTitle, setDashboardTitle] = useState('');
  const [dashboardContent, setDashboardContent] = useState('');
  const [dashboardCount, setDashboardCount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [qaGenerationScale, setQAGenerationScale] = useState(3);
  const [generatedQAPairs, setGeneratedQAPairs] = useState([]);
  const [evaluation, setEvaluation] = useState(null);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const title = searchParams.get('title');
    const content = searchParams.get('content');
    
    try {
        if (title) {
            const decodedTitle = decodeURIComponent(title.replace(/\+/g, ' '));
            setDashboardTitle(decodedTitle);
        }
        
        if (content) {
            const decodedContent = decodeURIComponent(content.replace(/\+/g, ' '));
            setDashboardContent(decodedContent);
        }
    } catch (error) {
        console.error('Error decoding URL parameters:', error);
        // Set fallback values if decoding fails
        setDashboardTitle(title || '');
        setDashboardContent(content || '');
    }
}, [searchParams]);


  const handleGenerateQA = async () => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("section_content", dashboardContent);
      formData.append("num_questions", qaGenerationScale.toString());

      const response = await fetch('http://localhost:8000/api/v1/resume/generate-qa', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      
      if (data && data.qa_content) {
        const pairs = data.qa_content.split('\n\n').map((pair, index) => {
          const [question, answer] = pair.split('\n');
          return {
            question: question?.replace(/^Q\d+:\s*/, '') || '',
            answer: answer?.replace(/^A\d+:\s*/, '') || ''
          };
        });
        
        setGeneratedQAPairs(pairs);
        window.dispatchEvent(new CustomEvent('qaGenerated', {
          detail: { questions: pairs }
        }));
      }
    } catch (error) {
      console.error('Error generating Q&A pairs:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setGeneratedQAPairs([]);
    setEvaluation(null);
    setChartData(null);
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-50">
      <div className="flex justify-between items-start p-4">
        {/* Dashboard Content */}
        <div className="w-1/3">
          <div className="p-3 rounded-lg bg-blue-100">
            <span className="font-semibold text-lg bg-blue-600 text-white px-2 py-1 rounded">
              {dashboardTitle}
            </span>
            <div className="mt-4 text-sm text-gray-700">
              {dashboardContent ? (
                <pre className="whitespace-pre-wrap">
                  {dashboardContent}
                </pre>
              ) : (
                <div className="text-gray-500">No content available.</div>
              )}
            </div>
          </div>
        </div>

        {/* Evaluation Chart */}
        {evaluation && chartData && (
          <div className="w-1/3 bg-white rounded-lg shadow p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Evaluation Results</h3>
              <button 
                onClick={() => {setEvaluation(null); setChartData(null);}}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={16} />
              </button>
            </div>
            <div className="w-full h-48 mb-4">
              <Pie
                data={chartData}
                options={{
                  plugins: {
                    legend: {
                      position: 'bottom',
                      labels: { boxWidth: 12, font: { size: 11 } }
                    }
                  },
                  maintainAspectRatio: false
                }}
              />
            </div>
            <div className="mt-2">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-2xl font-bold">{evaluation.mark}</span>
                <span className="text-xl">{evaluation.score}</span>
              </div>
              <p className="text-sm text-gray-600">{evaluation.explanation}</p>
            </div>
          </div>
        )}

        {/* Controls */}
        <div className="flex justify-end p-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Number of Q/A:</span>
            <input
              type="range"
              min="1"
              max="10"
              value={qaGenerationScale}
              onChange={(e) => setQAGenerationScale(Number(e.target.value))}
              className="w-32 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <span className="text-sm font-medium">{qaGenerationScale}</span>
          </div>
          <button
            onClick={handleGenerateQA}
            disabled={isLoading}
            className={`px-4 py-2 bg-blue-800 text-white rounded-md hover:sm-blue-900 ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? 'Generating...' : 'Generate Q/A'}
          </button>
          <button
            onClick={handleClear}
            className="p-2 text-gray-600 hover:text-red-600"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      <QAInterface
        dashboardContent={dashboardContent}
        dashboardTitle={dashboardTitle}
        qaGenerationScale={qaGenerationScale}
        generatedQAPairs={generatedQAPairs}
        setGeneratedQAPairs={setGeneratedQAPairs}
        setEvaluation={setEvaluation}
        setChartData={setChartData}
      />
    </div>
  );
}

