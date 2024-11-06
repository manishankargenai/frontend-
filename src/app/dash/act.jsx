import React from 'react';

function ActionButtons() {
  const actions = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4666ce004fffd416e43ba9675099e1830b6f96844dafaead010941605bdf8fc7?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9", text: "Upload JD" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4666ce004fffd416e43ba9675099e1830b6f96844dafaead010941605bdf8fc7?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9", text: "Upload Resume" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/397213d5067a9cfba80156c77bd63a9776da15fb0e415b311d10217c4eb253e1?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9", text: "Link to HR DB" },
    
  ];

  return (
    <div className="flex flex-wrap gap-1.5 items-center font-medium capitalize min-w-[240px] text-slate-700">
      {actions.map((action, index) => (
        <button key={index} className="flex gap-2.5 items-center p-2 bg-indigo-100 rounded-md border border-indigo-500 border-solid shadow-sm min-h-[36px]">
          <img loading="lazy" src={action.icon} alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
          <span className="self-stretch my-auto">{action.text}</span>
        </button>
      ))}
    </div>
  );
}

export default ActionButtons;