"use client"; // Ensure this is at the top

import { useState } from 'react';

export default function Sidebar1() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [topSliderValue, setTopSliderValue] = useState(12);
  const [bottomSliderValue, setBottomSliderValue] = useState(12);
  const [history, setHistory] = useState([]); // Removed <string[]> annotation

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleTopSliderChange = (e) => {
    setTopSliderValue(Number(e.target.value));
  };

  const handleBottomSliderChange = (e) => {
    setBottomSliderValue(Number(e.target.value));
  };

  const runPrompt = () => {
    const newResponse = `You entered: ${prompt} with top slider value: ${topSliderValue} and bottom slider value: ${bottomSliderValue}`;
    setResponse(newResponse);
    setHistory((prevHistory) => [...prevHistory, newResponse]);
  };

  const getSliderStyle = (value) => ({
    background: `linear-gradient(90deg, lightblue ${value}%, white ${value}%)`,
  });

  const getSliderValuePosition = (value) => {
    const position = (value / 100) * 100;
    return {
      left: `calc(${position}% - 12px)`,
      transform: 'translateX(-50%)',
      top: '10px',
      color: 'black',
    };
  };

  return (
    <div style={styles.outerContainer}>
      <div style={styles.dashboardContainer}>
        <div style={styles.sliderContainer}>
          <input
            type="range"
            min="0"
            max="100"
            value={topSliderValue}
            onChange={handleTopSliderChange}
            style={{ ...styles.slider, ...getSliderStyle(topSliderValue) }}
          />
          <p style={{ ...styles.sliderValue, ...getSliderValuePosition(topSliderValue) }}>{topSliderValue}</p>
        </div>

        <div style={styles.titleContainer}>
          <p style={styles.title}>Create Dashboard</p>
        </div>

        <div style={styles.leftPanel}>
          <div style={styles.promptInstruction}>
            <p>Type your prompt in here:</p>
          </div>

          <div style={styles.promptContainer}>
            <input
              type="text"
              placeholder="Enter here"
              value={prompt}
              onChange={handlePromptChange}
              style={styles.inputBox}
            />
            <div style={styles.runButtonContainer}>
              <button onClick={runPrompt} style={styles.runPromptButton}>
                Run Prompt
              </button>
            </div>
          </div>

          <div style={styles.sliderContainer}>
            <input
              type="range"
              min="0"
              max="100"
              value={bottomSliderValue}
              onChange={handleBottomSliderChange}
              style={{ ...styles.slider, ...getSliderStyle(bottomSliderValue) }}
            />
            <p style={{ ...styles.sliderValue, ...getSliderValuePosition(bottomSliderValue) }}>{bottomSliderValue}</p>
          </div>

          <div style={styles.samplePromptsContainer}>
            <div style={styles.samplePromptsHeadingContainer}>
              <div style={styles.samplePromptsHeading}>
                <p>Sample Prompts:</p>
              </div>
              <button onClick={() => alert(history.join('\n'))} style={styles.historyButton}>
                Your History
              </button>
            </div>

            {[
              "Analyze sales data for Q3 2023.",
              "Generate a report on customer feedback.",
              "Provide an SEO audit for the website.",
              "Summarize the latest trends in AI.",
              "Create a dashboard for monthly expenses."
            ].map((sample, index) => (
              <button
                key={index}
                onClick={() => setPrompt(sample)}
                style={styles.samplePromptButton}
              >
                {sample}
              </button>
            ))}
          </div>

          {response && (
            <div style={styles.responseBox}>
              <h3>Response:</h3>
              <p>{response}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  outerContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    padding: '30px',
    backgroundColor: '#f0f4f8',
    height: '150vh',
  },
  dashboardContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '20px',
    border: '2px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '350px',
  },
  titleContainer: {
    marginBottom: '20px',
    padding: '10px',
    border: '2px dashed #6200ea',
    borderRadius: '8px',
    backgroundColor: '#e3f2fd',
    width: '100%',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#6200ea',
    margin: 0,
    width: '50%',
  },
  leftPanel: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  promptInstruction: {
    fontSize: '18px',
    marginBottom: '10px',
    color: '#333',
  },
  sliderContainer: {
    marginBottom: '20px',
    width: '100%',
    position: 'relative',
  },
  slider: {
    width: '100%',
    appearance: 'none',
    height: '5px',
    backgroundColor: 'lightblue',
    borderRadius: '5px',
    outline: 'none',
    opacity: '1',
    transition: 'opacity 0.2s',
  },
  sliderValue: {
    position: 'absolute',
    fontSize: '14px',
    color: 'black',
    fontWeight: 'bold',
    zIndex: 1,
  },
  promptContainer: {
    marginBottom: '20px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  inputBox: {
    padding: '15px',
    width: '100%',
    borderRadius: '10px',
    border: '2px solid #6200ea',
    fontSize: '16px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '10px',
  },
  runButtonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  runPromptButton: {
    padding: '12px 24px',
    backgroundColor: '#6200ea',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    fontSize: '16px',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s ease',
  },
  responseBox: {
    marginTop: '30px',
    padding: '15px',
    borderRadius: '10px',
    border: '2px solid #6200ea',
    backgroundColor: '#f9f9f9',
    width: '100%',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  samplePromptsContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
    width: '100%',
  },
  samplePromptsHeadingContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: '10px',
  },
  samplePromptsHeading: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333',
    margin: 0,
  },
  samplePromptButton: {
    marginBottom: '5px',
    padding: '10px',
    backgroundColor: '#e0e0e0',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textAlign: 'left',
    fontSize: '14px',
  },
};
