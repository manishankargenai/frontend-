// components/Portfolio.jsx

import React from 'react';

const portfolioItems = [
  {
    id: 1,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ad661b8258f5f8763f5f0684f84787a1bf9d4a7c3d860e0a2d1e0a8a59170259?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9",
    title: "Project title 1",
    description: "UI, Art direction"
  },
  {
    id: 2,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/7afd93252ef2f41fa01e159b7afe62855aa0f73353b9249109d098e127456890?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9",
    title: "Project title 2",
    description: "UI, Art direction"
  },
  {
    id: 3,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/b29d3dfd717317be0d7ec0f2ec44de4dd1f04e7ce96d046a13e1b7d8dcaf0bbd?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9",
    title: "Project title 3",
    description: "UI, Art direction"
  },
  {
    id: 4,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ad661b8258f5f8763f5f0684f84787a1bf9d4a7c3d860e0a2d1e0a8a59170259?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9",
    title: "Project title 4",
    description: "UI, Art direction"
  },
  {
    id: 5,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/95ac8d1c9200280976f8928f62eeacb92da474edfd8b3b3c036053cba8d49bcc?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9",
    title: "Project title 5",
    description: "UI, Art direction"
  },
  {
    id: 6,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/a2b3f6c736bf16f7ea39fa89322289cd26e3c5cdc14e060644d5a2cb709019dc?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9",
    title: "Project title 6",
    description: "UI, Art direction"
  },
  {
    id: 7,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/90dc45fa5b532809fd90ec343ffdb0bf34576896fbf54a615fb70ac2a17db30a?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9",
    title: "Project title 7",
    description: "UI, Art direction"
  },
  {
    id: 8,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/d9dc52e196f65e21c6448bed0a66e6f681e67ca5fe3f1ff9a6bd16bbae8d40b5?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9",
    title: "Project title 8",
    description: "UI, Art direction"
  }
];

export default function Portfolio ()  {
  return (
    <div className="flex flex-wrap justify-center">
      {portfolioItems.map(item => (
        <div key={item.id} className="m-4 p-4 border rounded shadow">
          <img src={item.image} alt={item.title} className="w-full h-auto rounded" />
          <h2 className="text-lg font-bold mt-2">{item.title}</h2>
          <p className="text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

