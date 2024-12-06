'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function ResumeSection() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [dashboards, setDashboards] = useState([]);
  const [dashboardCount, setDashboardCount] = useState(0);
  
  const metrics = {
    success: 22,
    error: 36
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('resume', file);

    try {
      const response = await fetch('/api/upload-resume', {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        setSelectedFile(file);
        setDashboardCount(prev => prev + 1);
      }
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  const handleCreateDashboard = () => {
    const newDashboard = {
      id: dashboards.length + 1,
      title: `Dashboard ${dashboards.length + 1}`,
      type: getDashboardType(dashboards.length),
      content: 'Analysis in progress...'
    };
    setDashboards([...dashboards, newDashboard]);
  };
  

  const getDashboardType = (index) => {
    const types = [
      'Skills Analysis',
      'Experience Timeline',
      'Education Overview',
      'Project Highlights',
      'Technical Expertise',
      'Leadership Skills',
      'Career Progress',
      'Domain Expertise',
      'Professional Summary'
    ];
    return types[index % types.length];
  };

  return (
    <div className="flex flex-col w-full">
      <section className="flex flex-wrap gap-10 justify-between items-center px-4 py-1.5 mt-2 w-full font-semibold border-b border-lime-600 max-w-[1312px] min-h-[40px] max-md:max-w-full">
        {/* Left Section - Title and Upload */}
        <div className="flex gap-4 items-center">
          <div className="flex gap-2 items-center text-base text-lime-600">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
            </svg>
            <h2>Resume</h2>
          </div>
          
          {/* File Upload Button */}
          <div className="relative">
            <input
              type="file"
              id="resume-upload"
              accept=".pdf,.doc,.docx"
              onChange={handleFileUpload}
              className="hidden"
            />
            {/* <label
              htmlFor="resume-upload"
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer hover:bg-blue-700 transition-colors"
            >
              Upload Resume
            </label> */}
          </div>
        </div>

        {/* Right Section - Metrics and Create Dashboard */}
        <div className="flex items-center gap-4">
          <div className="flex gap-px">
            <div className="px-2 py-2.5 bg-lime-600 rounded-l shadow-sm">
              {metrics.success}
            </div>
            <div className="px-2 py-2.5 bg-red-500 rounded-r shadow-sm">
              {metrics.error}
            </div>
          </div>

          <Link href="/"><button><img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/128f4322a6dea96f188f66f2a75349683a5168aae5cdf1f7ef3e0ef074a381c8?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
       </button>
</Link>
        </div>
      </section>

      {/* Dashboards Grid */}
      <div className="grid grid-cols-3">
        {dashboards.map((dashboard) => (
          <div
            key={dashboard.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{dashboard.type}</h3>
            <p className="text-gray-600">{dashboard.content}</p>
            <div className="mt-4 h-40 bg-gray-50 rounded-md flex items-center justify-center">
              <span className="text-gray-400">Dashboard {dashboard.id}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}