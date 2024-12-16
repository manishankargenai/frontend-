import React from 'react';
import CreatePost from './postinput';
import PostList from './postlist';

export default function PostSection23() {
  return (
    <section className="flex flex-col ml-5 w-[77%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow max-md:mt-3.5 max-md:max-w-full">
        <CreatePost />
        <PostList />
      </div>
    </section>
  );
}

