import React from 'react';

const CallToActionSection: React.FC = () => {
  return (
    <section className="flex items-center justify-between relative bg-[#363880] px-10 py-20 max-md:flex-col max-md:text-center">
      <div className="flex-1 max-w-[600px] text-center">
        <p className="text-white text-lg font-medium leading-6 mb-5 max-sm:text-base max-sm:leading-5">
          Create &amp; Code your own Game
        </p>
        <h2 className="text-white text-[74px] font-semibold leading-[80px] mb-10 max-md:text-5xl max-md:leading-[56px] max-sm:text-[28px] max-sm:leading-9">
          Clone a Flappy Bird of your own
        </h2>
        <button className="text-white text-lg font-bold tracking-[0.36px] w-fit cursor-pointer bg-[#2580FF] mx-auto my-0 px-10 py-[18px] rounded-[40px] max-sm:text-base max-sm:px-8 max-sm:py-4 hover:bg-[#1e6fd9] transition-colors">
          Faz um clone e cria o teu
        </button>
      </div>
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/6d7e9f4826222a001372f9180e497d0184462039?width=269"
        alt="u-bot 6"
        className="w-[134px] h-[134px] absolute -translate-y-2/4 right-10 top-2/4 max-md:static max-md:mt-10"
      />
    </section>
  );
};

export default CallToActionSection;
