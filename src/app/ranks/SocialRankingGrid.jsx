import React from 'react';
import SocialRankingCard from './SocialRankingCard';

export default function SocialRankingGrid() {
  const profiles = [
    { name: "Jenny Wilson", rank: 10, image: "https://cdn.builder.io/api/v1/image/assets/TEMP/cd8f133ebea74e50cca4f52d282e08e1066482cadd410bd7bc3bb849249aea36?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" },
    { name: "Devon Lane", rank: 0, image: "https://cdn.builder.io/api/v1/image/assets/TEMP/a3efff267827329fe9fad2628b8fea04c23a86311dfe80274ae688355d42d911?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" },
    { name: "Ronald Richards", rank: 4, image: "https://cdn.builder.io/api/v1/image/assets/TEMP/609cf17896ca12aa5c6d2f61a91a86625e8125b610a59cecc8218af4b5b34d8f?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" },
    { name: "Kristin Watson", rank: 2, image: "https://cdn.builder.io/api/v1/image/assets/TEMP/4a73307cd301316a6de2925cffbb4b2c284dddb7c3f9dd34e98b8ae5c0b52f31?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" },
    { name: "Floyd Miles", rank: 1, image: "https://cdn.builder.io/api/v1/image/assets/TEMP/3e15c7f7247dfa0d3da15cf8edb99d8e95f11893134d39da28a91cbaa29bdc84?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" },
    { name: "Wade Warren", rank: 0, image: "https://cdn.builder.io/api/v1/image/assets/TEMP/4b6777d651ea24ec7c72153dec729bf779b769ade0811568abe51a313103b93a?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" },
    { name: "Darrell Steward", rank: 3, image: "https://cdn.builder.io/api/v1/image/assets/TEMP/33fbd857862cf1ea696a3d8f70dac35c45f9eab5014e6b13e7e0ecf8eaad043c?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" },
    { name: "Jacob Jones", rank: 4, image: "https://cdn.builder.io/api/v1/image/assets/TEMP/76e3bd55f8cbfdf5b76a9caa0857453d75364a977c40f8833bb20c322c41f096?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" },
    { name: "Cody Fisher", rank: 4, image: "https://cdn.builder.io/api/v1/image/assets/TEMP/4bdd86f453c95cb23760b7f8058813ac9d0eb1ba6fa478a8a8fe23e5edddfb3a?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" },
    { name: "Annette Black", rank: 10, image: "https://cdn.builder.io/api/v1/image/assets/TEMP/09bce8a6f63a56e60697c80dc6dcfc37071cdddbadf4683d2339defd6276bced?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" },
    { name: "Albert Flores", rank: 1, image: "https://cdn.builder.io/api/v1/image/assets/TEMP/2ed330a877c4521165a2672990f5a665ec8a6cebff1d4b4c43b09d4f28f183d1?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" },
    { name: "Savannah Nguyen", rank: 2, image: "https://cdn.builder.io/api/v1/image/assets/TEMP/20e0e56ca3301cdd31ee84bd7aab798cfd00924932dab9e1aec728a927c9b4b6?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" },
    { name: "Cameron Williamson", rank: 2, image: "https://cdn.builder.io/api/v1/image/assets/TEMP/a80b64ac48d1061504f2468b3716fec94a1341806856d4832a93e2a715487dac?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" },
    { name: "Bessie Cooper", rank: 3, image: "https://cdn.builder.io/api/v1/image/assets/TEMP/00f8082ceadf97f908e9211698c8d74d9f9ab7c3434af519de25b45fddcd4f85?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" },
    { name: "Theresa Webb", rank: 5, image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f6e38bdf5c88f42ea28ab6e9ec6bf69181cfcf1ab62fc0946f702372d8cf400e?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" },
    { name: "Darlene Robertson", rank: 1, image: "https://cdn.builder.io/api/v1/image/assets/TEMP/38a866d7f5cb9086e985f0eaa75c2a69177dc06498cd80f4989c323b758b0ad8?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" }
  ];

  return (
    <section className="flex flex-col px-6 mt-6 mb-0 max-md:px-5 max-md:mb-2.5 max-md:max-w-full">
      <h2 className="self-start text-2xl font-semibold text-slate-700">Social Ranking</h2>
      <div className="flex flex-wrap gap-4 mt-11 max-md:mt-10">
        {profiles.map((profile, index) => (
          <SocialRankingCard key={index} {...profile} />
        ))}
      </div>
    </section>
  );
}
