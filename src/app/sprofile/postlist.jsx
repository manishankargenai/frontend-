import React from 'react';
import Post from './post';

const posts = [
  {
    author: 'Designsta',
    handle: '@inner',
    time: '25m',
    content: "Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?",
    likes: '10',
    comments: '8'
  },
  {
    author: 'cloutexhibition',
    handle: '@RajLahoti',
    time: '22m',
    content: 'YPIP dasturining bu yilgi sezoni ham o\'z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o\'sayotganini ko\'rib hursand bo\'ladi odam.',
    likes: '9',
    hasImage: false
  },
  {
    author: 'CreativePhoto',
    handle: '@cloutexhibition',
    time: '1h',
    content: 'Working\nOffice style',
    likes: '10',
    comments: '8',
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e0b11df5fa26b1be78e6495e93ba6f2a34a36836c78173a35d3b2cbe9b372f30?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9'
  }
];

export default  function PostList() {
  return (
    <div className="flex flex-col mt-2 max-md:max-w-full">
      {posts.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </div>
  );
}


