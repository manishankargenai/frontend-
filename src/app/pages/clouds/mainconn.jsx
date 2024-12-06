
import React from 'react';
import PromptSection from './promsec';
import SamplePrompts from './samplepromsec';
import Logo from './logoo';

export default function MainContent() {
  return (
    <main className="flex flex-col justify-center px-0.5 py-1 w-full bg-white max-w-[1315px] max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between items-start pt-14 pr-20 pb-2 pl-4 bg-white shadow-sm max-md:pr-5 max-md:max-w-full">
        <div className="flex flex-col w-80 self-start">
          <PromptSection />
          <SamplePrompts />
        </div>
        <Logo />
      </div>
    </main>
  );
}

