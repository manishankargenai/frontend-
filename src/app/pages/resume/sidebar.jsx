"use client";
import { useState , useEffect} from "react";
import Link from "next/link";

export default function Dashboard() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [activeTab, setActiveTab] = useState('samples');
  const [dashboardCount, setDashboardCount] = useState(1);
  const [history, setHistory] = useState([]);
  const [dashboards, setDashboards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [samplePromptCount, setSamplePromptCount] = useState(5);
  const [samplePrompts, setSamplePrompts] = useState([]);
  const [dashboardHistory, setDashboardHistory] = useState([]);
  const [customDashboard, setCustomDashboard] = useState(null);
 


  useEffect(() => {
    if (selectedFile) {
      handleGenerateSamplePrompts();
    }
  }, [samplePromptCount]);
  

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleDashboardCountChange = (e) => {
    setDashboardCount(Number(e.target.value));
  };

  const handleSamplePromptCountChange = (event) => {
    const newCount = Number(event.target.value);
    setSamplePromptCount(newCount);
  };

  const handleCreateDashboards = async () => {
    if (!selectedFile) {
      alert("Please select a resume file first");
      return;
    }

    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("num_sections", dashboardCount.toString());

      const response = await fetch("http://localhost:8000/api/generate-dashboards", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.status === "success") {
        setDashboards(data.dashboards);
        setHistory((prev) => [...prev, `Created ${dashboardCount} dashboards`]);
      } else {
        throw new Error(data.error || "Failed to create dashboards");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(`Failed to create dashboards: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };
  const handleGenerateSamplePrompts = async () => {
    if (!selectedFile) {
      alert("Please select a resume file first");
      return;
    }
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("num_prompts", samplePromptCount);
    try {
      const response = await fetch("http://localhost:8000/api/generate-sample-prompts", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.status === "success") {
        setSamplePrompts(data.prompts);
      } else {
        throw new Error(data.error || "Failed to generate sample prompts");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(`Failed to generate sample prompts: ${error.message}`);
    }
  };
  // Update the runPrompt function
const runPrompt = async () => {
  if (!prompt.trim()) {
    alert("Prompt cannot be empty");
    return;
  }

  try {
    const response = await fetch("http://localhost:8000/api/generate-custom-dashboard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });
    const data = await response.json();
    setDashboards([data.dashboard_content]); // This will display the custom dashboard in the existing layout
    setDashboardCount(1);
    setHistory((prev) => [...prev, prompt]);
  } catch (error) {
    console.error("Error:", error);
    alert("Failed to generate custom dashboard");
  }
};
  return (
    <div className="flex min-h-screen w-full bg-gray-50">
      <div className="w-96 bg-white shadow-lg p-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Upload Resume (PDF/DOCX)
            </label>
            <input
              type="file"
              onChange={handleFileChange}
              accept=".pdf,.docx"
              className="w-full text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-md file:border-0
                        file:text-sm file:font-semibold
                        file:bg-blue-50 file:text-blue-700
                        hover:file:bg-blue-100"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 pb-4">
              Number of Dashboards (1-9)
            </label>
            <div className="relative">
              <input
                type="range"
                min="1"
                max="9"
                value={dashboardCount}
                onChange={handleDashboardCountChange}
                className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
              />
              <span className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                {dashboardCount}
              </span>
            </div>
          </div>

          <button
            onClick={handleCreateDashboards}
            disabled={isLoading}
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700
                     disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? "Creating..." : "Create Dashboard"}
          </button>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Custom Prompt
            </label>
            <textarea
              value={prompt}
              onChange={handlePromptChange}
              className="w-full p-2 border rounded-md min-h-[100px]"
              placeholder="Enter your prompt..."
            />
          </div>

          <button
            onClick={runPrompt}
            className="w-full px-4 py-2 text-white bg-purple-600 rounded-md hover:bg-purple-700"
          >
            Run Prompt
          </button>

          <div className="mt-4 space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Number of Sample Prompts (1-9)
            </label>
            <input
              type="range"
              min="1"
              max="9"
              value={samplePromptCount}
              onChange={handleSamplePromptCountChange}
              className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
            />
            <span className="block text-center text-sm font-semibold">
              {samplePromptCount} Sample Prompts
            </span>
          </div>

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
        </div>
      </div>

      <div className="flex-1 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {Array.from({ length: Math.min(dashboardCount, 9) }).map((_, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-[300px] flex flex-col"
            >
              <h3 className="flex gap-4 text-lg font-semibold mb-4 bg-blue-100 p-2 rounded-md">
                {dashboards[index]?.split("\n")[0] || `Dashboard ${index + 1}`}
                <Link
  href={`/pages/skill?title=${encodeURIComponent(dashboards[index]?.split("\n")[0] || `Dashboard ${index + 1}`)}&content=${encodeURIComponent(dashboards[index]?.split("\n").slice(1).join("\n") || "")}`}
>
  <button className="flex items-center space-x-2">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e11855dda7740b815a1769ac261bf7c96c31c01f29013ab3ab201affaf981b5f"
      alt=""
      className="w-6 h-6"
    />
  </button>
</Link>

              </h3>
              <div className="prose max-w-none flex-grow overflow-auto">
                <pre className="whitespace-pre-wrap text-sm">
                  {dashboards[index]?.split("\n").slice(1).join("\n") || "Content not available"}
                </pre>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}