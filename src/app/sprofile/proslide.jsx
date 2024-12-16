import React from 'react';
import SocialStats from './socialstat';
import SocialLink from './soclink';

export default function ProfileSidebar23() {
  const socialLinks = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3fdc26f7b4c5984cb6bb846ed5d944c220ea7304979581ce3f3accfd192b4e73?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9", url: "https://codedthemes.com/" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/84f92a83c2d902b9d4e9dc3cf175e04038585987fc1a8dca3a7c0606e31ddfb3?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9", url: "https://www.instagram.com/codedthemes" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/08e335e7c113303978d995f008ed61467ff9f3a8ac85324ecd1698b626b119a4?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9", url: "https://www.facebook.com/codedthemes" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2758dbd90c790b1e02f8ae9448b933e08a82f35e9596fa813acc5a817869afd7?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9", url: "https://in.linkedin.com/company/codedthemes" }
  ];

  return (
    <aside className="flex flex-col items-start px-2 pt-2 pb-24 mt-10 w-full rounded-md border border-violet-300 border-solid shadow-sm bg-slate-50">
      <SocialStats friends={239} followers={234} />
      <h3 className="mt-5 text-lg font-semibold text-center text-slate-700">About</h3>
      <p className="mt-5 text-sm text-slate-700 w-[279px]">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
      </p>
      <hr className="shrink-0 max-w-full h-px bg-indigo-400 border border-indigo-400 border-solid w-[252px]" />
      <div className="flex flex-col self-stretch mt-5 w-full text-sm leading-none capitalize text-indigo-950">
        {socialLinks.map((link, index) => (
          <SocialLink key={index} icon={link.icon} url={link.url} />
        ))}
      </div>
    </aside>
  );
}

