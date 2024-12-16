"use client";

import React, { useState, useEffect } from "react";
import { Mic, StopCircle, ChevronDown, ChevronRight, X } from "lucide-react";
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const QAInterface = ({
  dashboardContent,
  setEvaluation,
  setChartData,
  generatedQAPairs,
  setGeneratedQAPairs
}) => {
  // State Management
  const [questionText, setQuestionText] = useState("");
  const [answerText, setAnswerText] = useState("");
  const [recordingState, setRecordingState] = useState("idle");
  const [expandedQuestions, setExpandedQuestions] = useState({});
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [followUpQuestions, setFollowUpQuestions] = useState([]);
  
  const toggleQuestion = (index) => {
    setExpandedQuestions(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };


  // Color Configuration
  const colorPairs = [
    { q: 'text-blue-700', a: 'text-emerald-600' },
    { q: 'text-purple-700', a: 'text-amber-600' },
    { q: 'text-rose-700', a: 'text-cyan-600' },
    { q: 'text-indigo-700', a: 'text-orange-600' },
    { q: 'text-fuchsia-700', a: 'text-lime-600' }
  ];

  // Event Listeners
  useEffect(() => {
    const handleQAGenerated = (event) => {
      if (event.detail?.questions?.length > 0) {
        setGeneratedQAPairs(event.detail.questions);
      }
    };

    const handleQAClear = () => {
      setGeneratedQAPairs([]);
      setQuestionText("");
      setAnswerText("");
      setRecordingState("idle");
      setEvaluation(null);
      setChartData(null);
      setExpandedQuestions({});
    };

    window.addEventListener('qaGenerated', handleQAGenerated);
    window.addEventListener('qaClear', handleQAClear);
    
    return () => {
      window.removeEventListener('qaGenerated', handleQAGenerated);
      window.removeEventListener('qaClear', handleQAClear);
    };
  }, []);

  // Recording Handler
  // Update the recording endpoints to match your backend

// Add this function at the component level, outside of any other functions
const handleMapAnswer = async () => {
  if (!questionText || !answerText) {
      alert('Please record both question and answer first');
      return;
  }

  try {
      const formData = new FormData();
      formData.append('question', questionText);
      formData.append('answer', answerText);

      const response = await fetch('http://localhost:8000/api/v1/resume/evaluate-answer', {
          method: 'POST',
          body: formData
      });

      const data = await response.json();

      if (data.status === "success" && data.evaluation) {
          const evaluation = data.evaluation;
          
          setEvaluation({
              mark: evaluation.overall,
              score: `${Math.round((evaluation.technical + evaluation.clarity + evaluation.completeness) / 3)}%`
          });

          setChartData({
              labels: ['Technical', 'Clarity', 'Completeness'],
              datasets: [{
                  data: [
                      evaluation.technical,
                      evaluation.clarity,
                      evaluation.completeness
                  ],
                  backgroundColor: ['#4F46E5', '#10B981', '#F59E0B']
              }]
          });
      }
  } catch (error) {
      console.error('Error evaluating answer:', error);
      alert('Failed to evaluate answer');
  }
};

const handleRecordingClick = async (type) => {
  if (recordingState === "idle") {
      try {
          const response = await fetch("http://localhost:8000/api/v1/resume/start-recording", {
              method: "POST"
          });

          const data = await response.json();
          if (response.ok) {
              setRecordingState(type === 'question' ? 'recordingQuestion' : 'recordingAnswer');
          } else {
              throw new Error(data.error || 'Failed to start recording');
          }
      } catch (error) {
          console.error("Start recording error:", error);
          alert("Failed to start recording: " + error.message);
          setRecordingState("idle");
      }
  } else {
      try {
          setIsTranscribing(true);
          const stopResponse = await fetch("http://localhost:8000/api/v1/resume/stop-recording", {
              method: "POST"
          });

          const stopData = await stopResponse.json();
          if (!stopResponse.ok) {
              throw new Error(stopData.error || 'Failed to stop recording');
          }

          const filename = stopData.filename;
          
          const transcribeResponse = await fetch(`http://localhost:8000/api/v1/resume/transcribe?filename=${filename}`, {
              method: "POST"
          });

          const transcribeData = await transcribeResponse.json();
          
          if (transcribeData.text) {
              if (recordingState === "recordingQuestion") {
                  setQuestionText(transcribeData.text);
              } else {
                  setAnswerText(transcribeData.text);
              }
          }
      } catch (error) {
          console.error("Recording error:", error);
          alert("Recording failed: " + error.message);
      } finally {
          setRecordingState("idle");
          setIsTranscribing(false);
      }
  }
};

// Update the follow-up questions handler
const handleFollowUp = async () => {
  if (!questionText || !answerText) {
      alert('Please record both question and answer first');
      return;
  }

  try {
      const formData = new FormData();
      formData.append('question', questionText);
      formData.append('answer', answerText);

      const response = await fetch('http://localhost:8000/api/v1/resume/generate-follow-up', {
          method: 'POST',
          body: formData
      });

      const data = await response.json();
      if (data.prompt) {
          setFollowUpQuestions([{ question: data.prompt }]);
      }
  } catch (error) {
      console.error('Error generating follow-up questions:', error);
  }

};

  return (
    <div className="flex flex-col h-screen bg-gray-50 relative">
      <div className="flex flex-1 p-4 space-x-4">
        {/* Left Panel - Generated Q/A */}
        <div className="w-1/2 bg-white rounded-lg shadow p-4">
          <div className="p-3 bg-blue-600 border-b">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b9d0deb94edbc51529ae070a6c941023ea77dbec1049ebec2996eade67bc489"
                  className="object-contain w-full h-full"
                  alt="CSR GenAI"
                />
              </div>
              <h3 className="text-sm font-medium text-white">CSR GenAI</h3>
            </div>
          </div>
          
          <h3 className="text-lg font-medium mb-4">Generated Q/A</h3>
          <div className="space-y-2 overflow-y-auto max-h-[calc(100vh-400px)]">
            {generatedQAPairs.map((pair, index) => (
              <div key={index} className="border rounded-lg">
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-gray-50"
                >
                  <div className="flex items-center space-x-2">
                    {expandedQuestions[index] ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                    <span className={`font-medium text-sm ${colorPairs[index % colorPairs.length].q}`}>
                      Q{index + 1}: {pair.question}
                    </span>
                  </div>
                </button>
                {expandedQuestions[index] && (
                  <div className="px-4 py-3 border-t bg-gray-50">
                    <p className={`text-sm ${colorPairs[index % colorPairs.length].a}`}>
                      A{index + 1}: {pair.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel - Recording Interface */}
        <div className="w-1/2 bg-white rounded-lg shadow p-4">
          <div className="p-3 bg-green-600 border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b9d0deb94edbc51529ae070a6c941023ea77dbec1049ebec2996eade67bc489"
                    className="object-contain w-full h-full"
                    alt="IT Employer"
                  />
                </div>
                <h3 className="text-sm font-medium text-white">Floyd Miles</h3>
              </div>

              {/* Recording Controls */}
              <div className="flex space-x-4">
                <button
                  onClick={() => handleRecordingClick('question')}
                  disabled={isTranscribing}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
                    isTranscribing ? 'bg-gray-300' : 'bg-white text-green-600 hover:bg-gray-100'
                  }`}
                >
                  {recordingState === 'recordingQuestion' ? <StopCircle size={16} /> : <Mic size={16} />}
                  <span>
                    {isTranscribing ? 'Transcribing...' :
                     recordingState === 'recordingQuestion' ? 'Stop Recording' : 'Record Question'}
                  </span>
                </button>

                <button
                  onClick={() => handleRecordingClick('answer')}
                  disabled={isTranscribing}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
                    isTranscribing ? 'bg-gray-300' : 'bg-white text-green-600 hover:bg-gray-100'
                  }`}
                >
                  {recordingState === 'recordingAnswer' ? <StopCircle size={16} /> : <Mic size={16} />}
                  <span>
                    {isTranscribing ? 'Transcribing...' :
                     recordingState === 'recordingAnswer' ? 'Stop Recording' : 'Record Answer'}
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Q/A Display and MAP Button */}
          <div className="space-y-4 mt-4">
            <div className="flex items-center space-x-2">
              {questionText ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
              <span className={`font-medium text-sm ${colorPairs[0].q}`}>
                Q: {questionText}
              </span>
            </div>

            {answerText && (
              <div className="px-4 py-3 border-t bg-gray-50">
                <p className={`text-sm ${colorPairs[0].a}`}>
                  A: {answerText}
                </p>
              </div>
            )}

            <div className="grid place-items-center">
              <div className="flex space-x-4">
                <button
                  onClick={handleMapAnswer}
                  className="w-1/2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  MAP
                </button>
                <button
                  onClick={handleFollowUp}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  Follow-up
                </button>
              </div>
            </div>

            {/* Follow-up Questions Display */}
            {followUpQuestions.length > 0 && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium mb-2">Follow-up Questions:</h4>
                <ul className="space-y-2">
                  {followUpQuestions.map((q, index) => (
                    <li key={index} className="text-sm text-gray-700">
                      {q.question}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QAInterface;
