// src/app/top/score.jsx
import Link
 from "next/link";

const ScoreSection = () => {
  return (
    <section className="flex flex-wrap gap-10 justify-between items-center px-4 py-1.5 w-full font-semibold border-b border-solid border-b-sky-400 min-h-[40px] max-md:max-w-full">
      <div className="flex gap-2 items-center self-stretch my-auto text-base text-teal-400">
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/83324992080c63cca989cc1eed68008e6f463cffa8f2e60da1dc24175c8b2898?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" 
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" 
          alt="" 
        />
        <div className="self-stretch my-auto">Threshold Score</div>
      </div>
      <div className="flex flex-wrap gap-1 items-center self-stretch my-auto text-lg text-white uppercase min-w-[240px] w-[627px] max-md:max-w-full justify-end">
        <div className="flex gap-px items-center self-stretch my-auto">
          <div className="gap-1 self-stretch px-2 py-2.5 my-auto bg-lime-600 rounded border border-lime-600 border-solid shadow-[0px_0px_4px_rgba(0,0,0,0.25)]">
            22{" "}
          </div>
          <div className="gap-1 self-stretch px-2 py-2.5 my-auto bg-red-500 rounded-none border border-red-500 border-solid shadow-[0px_0px_4px_rgba(0,0,0,0.25)]">
            36{" "}
          </div>
        </div>
       
        <Link href="/">  <button ><img
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8e607b16628c2b49f9bb6ce0e28ceb75c807ea6ec34f50b7d18a456c1b6dfdd?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" 
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
          </button>
          </Link>
      
      </div>
    </section>
  );
};

export default ScoreSection;


