"use client";
import React, { useState, useEffect } from 'react';
import Header from '../../components/header';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { ExternalLink, X, ChevronDown, ChevronRight, Mic, StopCircle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
const QASection = ({ qaContent, generatedQAPairs, activeTab, onTabChange }) => {
  const [expandedQuestions, setExpandedQuestions] = useState({});
  const [expandedCandidates, setExpandedCandidates] = useState({});

  if (!qaContent && !generatedQAPairs?.length) return null;

  const colorPairs = [
    { q: 'text-blue-700', a: 'text-emerald-600' },
    { q: 'text-purple-700', a: 'text-amber-600' },
    { q: 'text-rose-700', a: 'text-cyan-600' },
    { q: 'text-indigo-700', a: 'text-orange-600' },
    { q: 'text-fuchsia-700', a: 'text-lime-600' },
    { q: 'text-violet-700', a: 'text-yellow-600' },
    { q: 'text-red-700', a: 'text-teal-600' },
    { q: 'text-pink-700', a: 'text-green-600' },
    { q: 'text-sky-700', a: 'text-amber-600' },
    { q: 'text-emerald-700', a: 'text-purple-600' }
  ];

  const parseQAContent = (content) => {
    const qaRegex = /Q\d+:\s*(.+?)\s*(?=A\d+:)\s*A\d+:\s*(.+?)(?=(?:\n\s*Q\d+:|$))/gs;
    const matches = Array.from(content.matchAll(qaRegex));
    return matches.map((match, index) => ({
      question: match[1].trim(),
      answer: match[2].trim(),
      num: `Q${index + 1}`,
      colorPair: colorPairs[index % colorPairs.length]
    }));
  };

  const qaItems = qaContent ? parseQAContent(qaContent) : [];

  const toggleQuestion = (index) => {
    setExpandedQuestions(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const toggleCandidate = (index) => {
    setExpandedCandidates(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const TabButton = ({ tabId, label }) => (
    <button
      onClick={() => onTabChange(tabId)}
      className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
        activeTab === tabId
          ? 'border-b-2 border-blue-600 text-blue-600'
          : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
      }`}
    >
      {label}
    </button>
  );

  const QATabContent = () => (
    <div className="space-y-2">
      {qaItems.map((item, index) => (
        <div key={index} className="border rounded-lg bg-white shadow-sm">
          <button
            onClick={() => toggleQuestion(index)}
            className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
          >
            <div className="flex items-center space-x-2">
              {expandedQuestions[index] ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
              <span className={`font-medium text-sm ${item.colorPair.q}`}>
                {item.num}: {item.question}
              </span>
            </div>
          </button>
          {expandedQuestions[index] && (
            <div className="px-4 py-3 border-t bg-gray-50">
              <p className={`text-sm ${item.colorPair.a}`}>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
      {qaItems.length === 0 && (
        <p className="text-gray-500 text-sm text-center py-4">No Q&A content available.</p>
      )}
    </div>
  );

  const CandidatesTabContent = () => (
    <div className="space-y-2">
      {generatedQAPairs && generatedQAPairs.length > 0 ? (
        generatedQAPairs.map((pair, index) => (
          <div key={index} className="border rounded-lg bg-white shadow-sm">
            <button
              onClick={() => toggleCandidate(index)}
              className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="flex items-center space-x-2">
                {expandedCandidates[index] ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                <span className={`font-medium text-sm ${colorPairs[index % colorPairs.length].q}`}>
                  Q{index + 1}: {pair.question}
                </span>
              </div>
            </button>
            {expandedCandidates[index] && (
              <div className="px-4 py-3 border-t bg-gray-50">
                <p className={`text-sm ${colorPairs[index % colorPairs.length].a}`}>
                  A{index + 1}: {pair.answer}
                </p>
              </div>
            )}
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-sm text-center py-4">
          No candidate answers generated yet. Use the "Similar Q&A" button to create some.
        </p>
      )}
    </div>
  );

  return (
    <div className="flex flex-col h-full">
      <div className="flex border-b bg-white sticky top-0">
        <TabButton tabId="qa" label="Q&A" />
        <TabButton tabId="candidates" label="Insightful Follow-Ups" />
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {activeTab === 'qa' && <QATabContent />}
        {activeTab === 'candidates' && <CandidatesTabContent />}
      </div>
    </div>
  );
};

const MeetingQAConverterPreview = ({ onGenerateQA, onEvaluationUpdate }) => {
  const [recordingState, setRecordingState] = useState('idle');
  const [questionTexts, setQuestionTexts] = useState([]);
  const [answerTexts, setAnswerTexts] = useState([]);
  const [currentQuestionText, setCurrentQuestionText] = useState('');
  const [currentAnswerText, setCurrentAnswerText] = useState('');
  const [qaGenerationScale, setQAGenerationScale] = useState(3);
  const [evaluation, setEvaluation] = useState(null);
  const [currentAudioFilename, setCurrentAudioFilename] = useState('');
  const [showEvaluation, setShowEvaluation] = useState(false);

  const getRecordingButtonProps = () => {
    switch (recordingState) {
      case 'idle':
        return {
          icon: <Mic size={18} className="text-green-600" />,
          text: 'Record',
          className: 'bg-green-50 text-green-600 hover:bg-green-100'
        };
      case 'readyForQuestion':
        return {
          icon: <Mic size={18} className="text-green-600" />,
          text: 'Record Question',
          className: 'bg-green-50 text-green-600 hover:bg-green-100'
        };
      case 'recordingQuestion':
        return {
          icon: <StopCircle size={18} className="text-white" />,
          text: 'Stop Question Recording',
          className: 'bg-red-500 text-white hover:bg-red-600'
        };
      case 'readyForAnswer':
        return {
          icon: <Mic size={18} className="text-green-600" />,
          text: 'Record Answer',
          className: 'bg-green-50 text-green-600 hover:bg-green-100'
        };
      case 'recordingAnswer':
        return {
          icon: <StopCircle size={18} className="text-white" />,
          text: 'Stop Answer Recording',
          className: 'bg-red-500 text-white hover:bg-red-600'
        };
      default:
        return {
          icon: <Mic size={18} className="text-green-600" />,
          text: 'Record',
          className: 'bg-green-50 text-green-600 hover:bg-green-100'
        };
    }
 
  };
 
  const handleRecordingClick = async () => {
    if (recordingState === 'idle' || recordingState === 'readyForQuestion') {
      try {
        const response = await fetch('http://localhost:8000/api/start-recording', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ source: 'microphone' })
        });
 
        if (response.ok) {
          setRecordingState('recordingQuestion');
        } else {
          throw new Error('Failed to start recording');
        }
      } catch (error) {
        console.error('Error starting recording:', error);
        alert('Failed to start recording');
      }
    } else if (recordingState === 'recordingQuestion') {
      try {
        const response = await fetch('http://localhost:8000/api/stop-recording', {
          method: 'POST'
        });
 
        if (response.ok) {
          const data = await response.json();
          setCurrentAudioFilename(data.filename);
 
          const transcribeResponse = await fetch(`http://localhost:8000/api/transcribe?filename=${data.filename}`, {
            method: 'POST'
          });
 
          if (transcribeResponse.ok) {
            const transcribeData = await transcribeResponse.json();
            const newQuestionText = `Question: ${transcribeData.text}?`;
            setCurrentQuestionText(newQuestionText);
            setRecordingState('readyForAnswer');
          }
        }
      } catch (error) {
        console.error('Error stopping question recording:', error);
        alert('Failed to stop recording');
        setRecordingState('idle');
      }
    } else if (recordingState === 'readyForAnswer' || recordingState === 'idle') {
      try {
        const response = await fetch('http://localhost:8000/api/start-recording', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ source: 'microphone' })
        });
 
        if (response.ok) {
          setRecordingState('recordingAnswer');
        } else {
          throw new Error('Failed to start recording');
        }
      } catch (error) {
        console.error('Error starting answer recording:', error);
        alert('Failed to start recording');
      }
    } else if (recordingState === 'recordingAnswer') {
      try {
        const response = await fetch('http://localhost:8000/api/stop-recording', {
          method: 'POST'
        });
 
        if (response.ok) {
          const data = await response.json();
          setCurrentAudioFilename(data.filename);
 
          const transcribeResponse = await fetch(`http://localhost:8000/api/transcribe?filename=${data.filename}`, {
            method: 'POST'
          });
 
          if (transcribeResponse.ok) {
            const transcribeData = await transcribeResponse.json();
            const newAnswerText = `Answer: ${transcribeData.text}.`;
            setCurrentAnswerText(newAnswerText);
           
            // Add current question to questionTexts only if not already present
            if (currentQuestionText && !questionTexts.includes(currentQuestionText)) {
              setQuestionTexts(prev => [...prev, currentQuestionText]);
            }
           
            // Add current answer to answerTexts
            setAnswerTexts(prev => [...prev, newAnswerText]);
           
            setRecordingState('readyForQuestion');
          }
        }
      } catch (error) {
        console.error('Error stopping answer recording:', error);
        alert('Failed to stop recording');
        setRecordingState('idle');
      }
    }
  };
 
  const handleMapAnswer = async () => {
    if (!currentQuestionText || !currentAnswerText) {
      alert('Please record both question and answer first');
      return;
    }
 
    try {
      const response = await fetch('http://localhost:8000/api/evaluate-answer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          qa_text: `${currentQuestionText}\n${currentAnswerText}`,
          previous_questions: questionTexts,
          previous_answers: answerTexts,
        }),
      });
 
      if (response.ok) {
        const data = await response.json();
       
        //Ensure the evaluation object has the expected structure
        const formattedEvaluation = {
          mark: data.mark,
          score: data.score,
          explanation: data.explanation,
          relevance: parseFloat(data.score) || 0,
          accuracy: Math.min(parseFloat(data.score) * 0.8, 100) || 0,
          completeness: Math.min(parseFloat(data.score) * 0.7, 100) || 0,
          partially_relevant: Math.max(100 - parseFloat(data.score), 0) || 0,
          not_relevant: Math.max(20 - parseFloat(data.score), 0) || 0
        };

        setEvaluation(formattedEvaluation);
        setShowEvaluation(true);

        // Call the onEvaluationUpdate callback if provided
        if (onEvaluationUpdate) {
          onEvaluationUpdate(formattedEvaluation);
        }
      } else {
        throw new Error('Failed to evaluate answer');
      }
    } catch (error) {
      console.error('Error evaluating answer:', error);
      alert('Failed to evaluate answer');
    }
  };

  const handleClear = () => {
    setCurrentQuestionText('');
    setCurrentAnswerText('');
    setQuestionTexts([]);
    setAnswerTexts([]);
    setEvaluation(null);
    setRecordingState('idle');
    setCurrentAudioFilename('');
    setShowEvaluation(false);
  };
 
  const generateQAPairs = async () => {
    if (!currentQuestionText || !currentAnswerText) {
      alert('Please record both question and answer first');
      return;
    }
 
    try {
      const response = await fetch('http://localhost:8000/api/generate-qa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          num_pairs: qaGenerationScale,
          original_qa: `${currentQuestionText}\n${currentAnswerText}`
        })
      });
 
      if (response.ok) {
        const data = await response.json();
        const pairs = data.generated.split('\n\n').map((pair, index) => {
          const [question, answer] = pair.split('\n');
          return {
            id: index + 1,
            question: question.replace(/^Q\d+:\s*/, ''),
            answer: answer.replace(/^A\d+:\s*/, '')
          };
        });
        onGenerateQA(pairs);
      } else {
        throw new Error('Failed to generate Q&A pairs');
      }
    } catch (error) {
      console.error('Error generating Q&A pairs:', error);
      alert('Failed to generate Q&A pairs');
    }
  };
 
  return (
    <div className="bg-gray-100 h-full flex justify-center items-center p-4">
      <div className="w-full h-full max-w-7xl bg-white shadow-lg rounded-lg">
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-green-500">
                <img
                  src="/api/placeholder/40/40"
                  alt="User"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-800">Job Seeker</h3>
                <p className="text-xs text-gray-500">Interview Recording</p>
              </div>
            </div>
 
            <button
              onClick={handleRecordingClick}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm transition-all duration-200 ${
                getRecordingButtonProps().className
              }`}
            >
              {getRecordingButtonProps().icon}
              <span>{getRecordingButtonProps().text}</span>
            </button>
          </div>
 
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="border rounded-md p-4 bg-gray-50 mb-4">
                <div className="mb-2">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Previous Questions:</h4>
                  {questionTexts.map((qt, index) => (
                    <p key={index} className="text-sm text-gray-800 mb-1">{qt}</p>
                  ))}
                </div>
                <div className="mt-2">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Previous Answers:</h4>
                  {answerTexts.map((at, index) => (
                    <p key={index} className="text-sm text-gray-800 mb-1">{at}</p>
                  ))}
                </div>
 
                {/* Current Recording Section */}
                <div className="border-t mt-2 pt-2">
                  {currentQuestionText && (
                    <div className="mb-2">
                      <p className="text-sm text-gray-800"><strong>Current Question:</strong> {currentQuestionText}</p>
                    </div>
                  )}
                  {currentAnswerText && (
                    <div className="mt-2">
                      <p className="text-sm text-gray-800"><strong>Current Answer:</strong> {currentAnswerText}</p>
                    </div>
                  )}
                </div>
              </div>
 
              {/* Generate Similar Q&A Pairs Section */}
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-700">Generate Similar Q&A Pairs</h3>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-sm text-gray-600">Scale:</span>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={qaGenerationScale}
                    onChange={(e) => setQAGenerationScale(Number(e.target.value))}
                    className="w-32 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="text-sm font-medium text-gray-700">{qaGenerationScale}</span>
                </div>
 
                <div className="flex items-center space-x-2">
                  <button
                    onClick={generateQAPairs}
                    className="w-medium px-4 py-2 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600"
                  >
                    Follow-UP Queries
                  </button>
                  <div className="flex-grow"></div>
                  <button
                    onClick={handleClear}
                    className="w-medium px-3 py-1 text-sm text-white bg-orange-500 rounded-md hover:bg-orange-600"
                  >
                    Clear
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col relative">
            <div className="flex-1 flex flex-col relative">
  <div className="flex flex-col ml-4">
    {showEvaluation && evaluation && (
      <div className="p-4 bg-gray-50 rounded-lg mb-4">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Evaluation</h3>
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-2xl">{evaluation.mark}</span>
          <span className="text-lg font-medium">{evaluation.score}</span>
        </div>
        <p className="text-sm text-gray-600">{evaluation.explanation}</p>
      </div>
    )}
  </div>
  <div className="flex-grow relative">
    <div className="absolute bottom-0 right-0">
      <button
        onClick={handleMapAnswer}
        className="px-3 py-1 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600"
      >
        Map
      </button>
    </div>
  </div>
</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

const DashboardView = ({
  content,
  title,
  qaScale,
  onQaScaleChange,
  onGenerateQa,
  isLoading,
  isExpanded,
  onCollapse,
  showControls,
  qaContent
 }) => {
  const [activeQaTab, setActiveQaTab] = useState('qa');
  const [generatedQAPairs, setGeneratedQAPairs] = useState([]);
  const [evaluation, setEvaluation] = useState(null);
  const [showEvaluationChart, setShowEvaluationChart] = useState(false);
 
  const containerClasses = isExpanded
  ? 'fixed top-0 left-0 w-full h-full bg-white z-50 overflow-hidden'
  : 'relative bg-white rounded-lg shadow-md';
 
  const ContentHorizontalBarChart = ({ content }) => {
  const extractContentMetrics = (text) => {
  const wordCount = text.split(/\s+/).length;
  const characterCount = text.length;
  const sentenceCount = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0).length;
  const paragraphCount = text.split(/\n\s*\n/).filter(paragraph => paragraph.trim().length > 0).length;
 
  return [
  { name: 'Words', value: wordCount },
  { name: 'Characters', value: characterCount },
  { name: 'Sentences', value: sentenceCount },
  { name: 'Paragraphs', value: paragraphCount }
  ];
  };
 
  const data = extractContentMetrics(content);
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
 
  return (
  <div className="flex flex-col items-center bg-gray-50 p-4 rounded-lg h-full">
  <h4 className="text-sm font-semibold text-gray-700 mb-4">Content Analysis</h4>
  <BarChart
  width={400}
  height={250}
  data={data}
  layout="vertical"
  margin={{ left: 20, right: 20, bottom: 5 }}
  >
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis type="number" />
  <YAxis dataKey="name" type="category" />
  <Tooltip />
  <Bar dataKey="value" fill="#8884d8">
  {data.map((entry, index) => (
  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
  ))}
  </Bar>
  </BarChart>
  </div>
  );
  };
 
  const DetailedDonutChart = ({ evaluation }) => {
  // Default values if no evaluation is present
  const defaultEvaluation = {
  relevance: 0,
  accuracy: 0,
  completeness: 0,
  partially_relevant: 0,
  not_relevant: 0
  };
 
  // Use provided evaluation or default
  const evalData = evaluation || defaultEvaluation;
 
  // Prepare data for the pie chart
  const data = [
  {
  name: 'Fully Relevant',
  value: evalData.relevance || 0,
  color: '#00C49F' // Green
  },
  {
  name: 'Partially Relevant',
  value: evalData.partially_relevant || 0,
  color: '#FFBB28' // Yellow
  },
  {
  name: 'Not Relevant',
  value: evalData.not_relevant || 0,
  color: '#FF8042' // Orange
  },
  {
  name: 'Accuracy',
  value: evalData.accuracy || 0,
  color: '#0088FE' // Blue
  },
  {
  name: 'Completeness',
  value: evalData.completeness || 0,
  color: '#8884D8' // Purple
  }
  ];
 
  return (
  <div className="flex flex-col items-center bg-gray-50 p-4 rounded-lg h-full">
  <h4 className="text-sm font-semibold text-gray-700 mb-4">Evaluation Metrics</h4>
  <div className="flex flex-col items-center">
  <PieChart width={300} height={300}>
  <Pie
  data={data}
  innerRadius={60}
  outerRadius={90}
  paddingAngle={5}
  dataKey="value"
  startAngle={90}
  endAngle={-270}
  >
  {data.map((entry, index) => (
  <Cell
  key={`cell-${index}`}
  fill={entry.color}
  stroke="#fff"
  strokeWidth={2}
  />
  ))}
  </Pie>
  <Tooltip
  formatter={(value, name) => [`${value.toFixed(2)}%`, name]}
  contentStyle={{
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  border: '1px solid #ddd',
  borderRadius: '8px'
  }}
  />
  </PieChart>
  <div className="mt-2 text-sm text-gray-700">
  <div className="flex justify-center space-x-4 flex-wrap">
  {data.map((entry, index) => (
  <div key={index} className="flex items-center m-1">
  <div
  className="w-3 h-3 mr-1"
  style={{ backgroundColor: entry.color }}
  />
  <span>{entry.name}: {entry.value.toFixed(2)}%</span>
  </div>
  ))}
  </div>
  </div>
  </div>
  </div>
  );
  };
 
  const handleGenerateQA = async () => {
  try {
  const response = await fetch('http://localhost:8000/api/generate-qa', {
  method: 'POST',
  headers: {
  'Content-Type': 'application/json',
  },
  body: JSON.stringify({
  num_pairs: qaScale,
  original_qa: content
  })
  });
 
  if (response.ok) {
  const data = await response.json();
  const pairs = data.generated.split('\n\n').map((pair, index) => {
  const [question, answer] = pair.split('\n');
  return {
  id: index + 1,
  question: question.replace(/^Q\d+:\s*/, ''),
  answer: answer.replace(/^A\d+:\s*/, '')
  };
  });
  setGeneratedQAPairs(pairs);
  setActiveQaTab('candidates'); // Switch to Candidate Answers tab
  }
  } catch (error) {
  console.error('Error generating Q&A pairs:', error);
  }
  };
 
  const handleQAPairsGenerated = (pairs) => {
  setGeneratedQAPairs(pairs);
  setActiveQaTab('candidates');
  };
 
  const handleEvaluationUpdate = (evalData) => {
  setEvaluation(evalData);
  setShowEvaluationChart(true);
  };
 
  return (
  <div className={containerClasses}>
  <div className="h-full flex flex-col">
  <Header />
  <div className="p-4 border-b sticky top-0 bg-white z-10">
  <div className="flex justify-between items-center">
  <h3 className="text-sm font-medium text-gray-700">{title}</h3>
  <div className="flex items-center space-x-4">
  {showControls && (
  <>
  <div className="flex items-center space-x-2">
  <label className="text-sm text-gray-600">Q&A pairs:</label>
  <input
  type="range"
  min="1"
  max="10"
  value={qaScale}
  onChange={(e) => onQaScaleChange(parseInt(e.target.value))}
  className="w-24"
  />
  <span className="text-sm text-gray-600">{qaScale}</span>
  </div>
  <button
  onClick={() => {
  onGenerateQa();
  handleGenerateQA();
  }}
  disabled={isLoading}
  className="px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
  >
  Generate Q&A
  </button>
  </>
  )}
  {isExpanded && (
  <button
  onClick={onCollapse}
  className="text-gray-500 hover:text-gray-700"
  >
  <X size={20} />
  </button>
  )}
  </div>
  </div>
  </div>
 
  {/* Main Content Area */}
  <div className="flex-1 overflow-auto">
  {isExpanded && (
  <div className="p-4">
  <div className="grid grid-cols-3 gap-4 mb-4">
  <div className="bg-white rounded-lg shadow-md p-4 col-span-1">
  <pre className="whitespace-pre-wrap text-sm text-gray-600">
  {content}
  </pre>
  </div>
  {showEvaluationChart && evaluation ? (
  <div className="col-span-2 grid grid-cols-2 gap-4">
  <DetailedDonutChart evaluation={evaluation} />
  <ContentHorizontalBarChart content={content} />
  </div>
  ) : (
  <div className="col-span-2 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
  No evaluation available
  </div>
  )}
  </div>
 
  {/* Two-Box Layout */}
  <div className="flex gap-4 h-[500px]">
  {/* Left Box - Q&A Section */}
  <div className="flex-1 bg-white rounded-lg shadow-lg overflow-hidden">
  <div className="p-3 bg-blue-600 border-b">
  <div className="flex items-center space-x-3">
  <div className="w-8 h-8 rounded-full overflow-hidden">
  <img
  src="/api/placeholder/32/32"
  alt="Robot Profile"
  className="w-full h-full object-cover"
  />
  </div>
  <h3 className="text-sm font-medium text-white">CSR GenAI</h3>
  </div>
  </div>
  <div className="p-4 overflow-y-auto h-[calc(100%-64px)]">
  <QASection
  qaContent={qaContent}
  generatedQAPairs={generatedQAPairs}
  activeTab={activeQaTab}
  onTabChange={setActiveQaTab}
  />
  </div>
  </div>
 
  {/* Right Box - Q&A Converter */}
  <div className="flex-1 bg-white rounded-lg shadow-lg overflow-hidden">
  <div className="p-3 bg-green-600 border-b">
  <div className="flex items-center space-x-3">
  <div className="w-8 h-8 rounded-full overflow-hidden">
  <img
  src="/api/placeholder/32/32"
  alt="IT Employer"
  className="w-full h-full object-cover"
  />
  </div>
  <h3 className="text-sm font-medium text-white">Floyd Miles</h3>
  </div>
  </div>
  <div className="h-[calc(100%-64px)] overflow-y-auto">
  <MeetingQAConverterPreview
  onGenerateQA={handleQAPairsGenerated}
  onEvaluationUpdate={handleEvaluationUpdate}
  />
  </div>
  </div>
  </div>
  </div>
  )}
  </div>
  </div>
  </div>
  );
 };

const Dashboard = () => {
 const [file, setFile] = useState(null);
  const [scale, setScale] = useState(1);
  const [prompt, setPrompt] = useState('');
  const [samplePrompts, setSamplePrompts] = useState([]);
  const [dashboards, setDashboards] = useState([]);
  const [promptDashboard, setPromptDashboard] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [promptScale, setPromptScale] = useState(5);
  const [keywords, setKeywords] = useState([]);
  const [activeView, setActiveView] = useState(null);
  const [qaScale, setQaScale] = useState(1);
  const [qaScales, setQaScales] = useState({});
  const [activeTab, setActiveTab] = useState('samples');
  const [dashboardHistory, setDashboardHistory] = useState([]);
  const [dashboardTitles, setDashboardTitles] = useState([]);
  const [expandedDashboard, setExpandedDashboard] = useState(null);
  const [qaContents, setQaContents] = useState({});

  const promptTemplates = [
    "Create a dashboard focusing on",
    "Build an analytics dashboard for",
    "Generate insights dashboard about",
    "Show key metrics dashboard for",
    "Display comprehensive dashboard on",
    "Visualize data in a dashboard for",
    "Present a detailed dashboard about",
    "Develop a dashboard analyzing",
    "Create an executive dashboard for",
    "Generate a performance dashboard for",
    "Design an interactive dashboard for",
    "Compose a metric-driven dashboard for",
    "Construct a data-rich dashboard about",
    "Prepare an analytical dashboard for",
    "Set up a monitoring dashboard for"
  ];

  const handleExpand = (type, index = null) => {
    if (expandedDashboard === null) {
      setExpandedDashboard({ type, index });
    } else {
      setExpandedDashboard(null);
    }
  };

  const extractDashboardTitle = (content) => {
    const patterns = [
      /(?:^|\n)(?:Title|Dashboard|Report):\s*(.+?)(?:\n|$)/i,
      /(?:^|\n)(?:Analysis of|Overview of|Report on)\s*(.+?)(?:\n|$)/i,
      /^(.+?)(?:\n|$)/
    ];

    for (const pattern of patterns) {
      const match = content.match(pattern);
      if (match && match[1]) {
        return match[1].trim().substring(0, 50) + (match[1].length > 50 ? '...' : '');
      }
    }

    return 'Untitled Dashboard';
  };

  const addToHistory = (type, content) => {
    const historyItem = {
      type,
      content,
      timestamp: new Date().toLocaleString(),
    };
    setDashboardHistory(prev => [historyItem, ...prev]);
  };

  const generateSamplePrompts = (keywords, numPrompts) => {
    if (!keywords || keywords.length === 0) return [];
    const selectedKeywords = keywords.slice(0, numPrompts);
    const prompts = selectedKeywords.map(keyword => {
      const template = promptTemplates[Math.floor(Math.random() * promptTemplates.length)];
      return `${template} ${keyword}`;
    });
    setSamplePrompts(prompts);
    setActiveTab('samples');
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setFile(file);
    setIsLoading(true);
    setError('');
   
    const formData = new FormData();
    formData.append('file', file);
   
    try {
      const response = await fetch('http://localhost:8000/api/upload-file/', {
        method: 'POST',
        body: formData
      });
     
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
     
      const data = await response.json();
      setKeywords(data.keywords);
      generateSamplePrompts(data.keywords, promptScale);
    } catch (error) {
      setError(error.message || 'Error uploading file');
    } finally {
      setIsLoading(false);
    }
  };

  const handlePromptScaleChange = (newScale) => {
    setPromptScale(newScale);
    if (keywords.length > 0) {
      generateSamplePrompts(keywords, newScale);
    }
  };

  const handleCreateDashboards = async () => {
    if (!file) {
      setError('Please upload a file first');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const dashboardPromises = Array(scale).fill().map(async (_, index) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('scale', scale);
        formData.append('dashboard_index', index);

        const response = await fetch('http://localhost:8000/api/generate-dashboard/', {
          method: 'POST',
          body: formData
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data.content;
      });

      const results = await Promise.all(dashboardPromises);
      setDashboards(results);
     
      const titles = results.map(content => extractDashboardTitle(content));
      setDashboardTitles(titles);
     
      addToHistory('dashboards', results);
      setExpandedDashboard(null);
      setActiveView('created');
      setPromptDashboard('');
    } catch (error) {
      setError(error.message || 'Error generating dashboards');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRunPrompt = async () => {
    if (!file || !prompt) {
      setError('Please upload a file and enter a prompt');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('prompt', prompt);
      formData.append('scale', 1);
      formData.append('dashboard_index', 0);

      const response = await fetch('http://localhost:8000/api/generate-dashboard/', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setPromptDashboard(data.content);
      addToHistory('prompt', { prompt, dashboard: data.content });
      setActiveView('prompt');
      setDashboards([]);
      setExpandedDashboard(null);
    } catch (error) {
      setError(error.message || 'Error generating prompt dashboard');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGenerateQA = async (dashboardContent, index, numQA = 5) => {
    setIsLoading(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append('dashboard_content', dashboardContent);
      formData.append('num_qa', numQA);

      const response = await fetch('http://localhost:8000/api/generate-qa/', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
     
      const formattedQA = data.content.split('\n').map((line, idx) => {
        if (line.startsWith('Q:')) {
          return `Q${Math.floor(idx/2) + 1}: ${line.substring(2).trim()}`;
        } else if (line.startsWith('A:')) {
          return `A${Math.floor(idx/2) + 1}: ${line.substring(2).trim()}`;
        }
        return line;
      }).join('\n');

      setQaContents(prev => ({
        ...prev,
        [index === 'prompt' ? 'prompt' : index]: formattedQA
      }));

    } catch (error) {
      setError(error.message || 'Error generating Q&A');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearAll = () => {
    setFile(null);
    setScale(1);
    setPrompt('');
    setSamplePrompts([]);
    setDashboards([]);
    setPromptDashboard('');
    setError('');
    setExpandedDashboard(null);
    setPromptScale(5);
    setKeywords([]);
    setActiveView(null);
    setQaScale(1);
    setQaContents({});
    setDashboardTitles([]);
    const fileInput = document.getElementById('file-upload');
    if (fileInput) fileInput.value = '';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-screen">
        {/* Left Sidebar */}
        <div className="bg-white shadow-lg p-6 w-80 overflow-y-auto">
          <div className="space-y-6">
            {/* File Upload Section */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Upload File</label>
              <div className="relative">
                <input
                  type="file"
                  onChange={handleFileUpload}
                  accept=".pdf,.docx"
                  className="hidden"
                  id="file-upload"
                />
                <button
                  className="w-full px-4 py-2 text-sm text-blue-600 border border-blue-600 rounded-md hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                  onClick={() => document.getElementById('file-upload').click()}
                >
                  {file ? file.name : 'Choose file'}
                </button>
              </div>
            </div>

            {/* Dashboard Scale Section */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Number of Dashboards</label>
              <input
                type="range"
                min="1"
                max="10"
                value={scale}
                onChange={(e) => setScale(parseInt(e.target.value))}
                className="w-full"
              />
              <span className="text-sm text-gray-600">{scale}</span>
            </div>

            {/* Create Dashboards Button */}
            <button
              onClick={handleCreateDashboards}
              disabled={isLoading || !file}
              className="w-full px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Create Dashboards
            </button>

            {/* Custom Prompt Section */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Custom Prompt</label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Enter your dashboard generation prompt..."
                className="w-full min-h-[100px] px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Run Prompt Button */}
            <button
              onClick={handleRunPrompt}
              disabled={isLoading || !file || !prompt}
              className="w-full px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Run Prompt
            </button>

            {/* Sample Prompts Scale Section */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Number of Sample Prompts</label>
              <input
                type="range"
                min="1"
                max="10"
                value={promptScale}
                onChange={(e) => handlePromptScaleChange(parseInt(e.target.value))}
                className="w-full"
              />
              <span className="text-sm text-gray-600">{promptScale}</span>
            </div>

            {/* Sample Prompts Section with Tabs */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-medium text-gray-700">Sample Prompts</h3>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setActiveTab('samples')}
                    className={`px-3 py-1 text-sm rounded-md focus:outline-none ${
                      activeTab === 'samples'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                    }`}
                  >
                    Samples
                  </button>
                  <button
                    onClick={() => setActiveTab('history')}
                    className={`px-3 py-1 text-sm rounded-md focus:outline-none ${
                      activeTab === 'history'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                    }`}
                  >
                    History
                  </button>
                </div>
              </div>

              <div className="border rounded-md p-2 min-h-[200px] max-h-[300px] overflow-y-auto">
                {activeTab === 'samples' ? (
                  <div className="space-y-2">
                    {samplePrompts.map((samplePrompt, index) => (
                      <button
                        key={index}
                        onClick={() => setPrompt(samplePrompt)}
                        className="w-full px-4 py-2 text-sm text-left border rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 truncate"
                        title={samplePrompt}
                      >
                        {samplePrompt}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-2">
                    {dashboardHistory.map((item, index) => (
                      <div key={index} className="p-2 border rounded-md">
                        <div className="flex justify-between items-center text-xs text-gray-600">
                          <span>{item.timestamp}</span>
                          <span>{item.type === 'dashboards' ? 'Multiple' : 'Single'}</span>
                        </div>
                        {item.type === 'prompt' ? (
                          <div className="mt-1">
                            <div className="text-sm font-medium">{item.content.prompt}</div>
                            <button
                              onClick={() => {
                                setPrompt(item.content.prompt);
                                setActiveTab('samples');
                              }}
                              className="mt-1 text-xs text-blue-600 hover:text-blue-700"
                            >
                              Use This Prompt
                            </button>
                          </div>
                        ) : (
                          <div className="mt-1">
                            <div className="text-sm">Generated {item.content.length} dashboards</div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Clear All Button */}
            <button
              onClick={handleClearAll}
              className="w-full px-4 py-2 text-sm text-red-600 border border-red-600 rounded-md hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Clear All
            </button>
          </div>
        </div>

        {/* Main Content Area (Middle) */}
        <div className="flex-1 p-6 overflow-y-auto">
          {error && (
            <div className="mb-6 p-4 text-red-700 bg-red-100 rounded-md">
              {error}
            </div>
          )}

          {isLoading && (
            <div className="flex justify-center items-center mb-6">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          )}
        </div>

        {/* Right Sidebar */}
        <div className="bg-white shadow-lg w-2/3 min-w-[900px] overflow-y-auto border-l">
          <div className="p-4 border-b">
            <div className="flex justify-between items-center">
              <h3 className="font-medium text-gray-700">
                {activeView === 'prompt' ? 'Custom Prompt Dashboard' : 'Generated Dashboards'}
              </h3>
             
              {activeView === 'prompt' && promptDashboard && !expandedDashboard && (
                <ExternalLink
                  className="text-blue-600 hover:text-blue-800 cursor-pointer"
                  size={20}
                  onClick={() => handleExpand('prompt')}
                  title="Open dashboard in new view"
                />
              )}
            </div>
          </div>

          <div className="p-4">
            {/* Custom Prompt Dashboard View */}
    {activeView === 'prompt' && (
      <DashboardView
        content={promptDashboard}
        title="Custom Prompt Dashboard"
        qaScale={qaScale}
        onQaScaleChange={setQaScale}
        onGenerateQa={() => handleGenerateQA(promptDashboard, 'prompt', qaScale)}
        isLoading={isLoading}
        isExpanded={expandedDashboard?.type === 'prompt'}
        onCollapse={() => setExpandedDashboard(null)}
        showControls={expandedDashboard?.type === 'prompt'}
        qaContent={qaContents['prompt']}
      />
    )}

    {/* Generated Dashboards View */}
    {activeView === 'created' && (
      <div className="grid grid-cols-3 gap-4">
        {dashboards.map((content, index) => (
          expandedDashboard?.type === 'dashboard' && expandedDashboard?.index === index ? (
            <DashboardView
              key={index}
              content={content}
              title={dashboardTitles[index] || `Dashboard ${index + 1}`}
              qaScale={qaScales[index] || 5}
              onQaScaleChange={(value) => setQaScales(prev => ({...prev, [index]: value}))}
              onGenerateQa={() => handleGenerateQA(content, index, qaScales[index] || 5)}
              isLoading={isLoading}
              isExpanded={true}
              onCollapse={() => setExpandedDashboard(null)}
              showControls={true}
              qaContent={qaContents[index]}
            />
          ) : (
                    <div key={index} className="bg-white rounded-lg shadow-md">
                      <div className="p-4 border-b">
                        <div className="flex justify-between items-center">
                          <h3 className="text-sm font-medium text-gray-700">
                            {dashboardTitles[index] || `Dashboard ${index + 1}`}
                          </h3>
                          <ExternalLink
                            className="text-blue-600 hover:text-blue-800 cursor-pointer"
                            size={16}
                            onClick={() => handleExpand('dashboard', index)}
                            title="Open dashboard in new view"
                          />
                        </div>
                      </div>
                      <div className="p-4 max-h-[400px] overflow-y-auto">
                        <pre className="whitespace-pre-wrap text-sm text-gray-600">
                          {content}
                        </pre>
                      </div>
                    </div>
                  )
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;