import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative flex items-center justify-between min-h-[600px] bg-[#1FC7DE] pt-20 pb-[120px] px-10 max-md:flex-col max-md:text-center max-md:px-5 max-md:py-[60px] max-sm:px-5 max-sm:py-10">
      <div className="flex-1 max-w-[800px]">
        <header>
          <h1 className="text-[#1F2B44] text-center text-[26px] font-bold leading-[41px] mb-5 max-sm:text-xl max-sm:leading-7">
            Explore the Best Projects
          </h1>
          <h2 className="text-white text-center text-[74px] font-semibold leading-[80px] mb-[60px] max-md:text-5xl max-md:leading-[56px] max-sm:text-[32px] max-sm:leading-10">
            Welcome to our Flappy Bird Game
          </h2>
        </header>
        <div className="w-[646px] h-[646px] flex items-center justify-center text-2xl text-[#666] bg-[#D9D9D9] mx-auto my-0 rounded-[20px] border-[10px] border-solid border-white max-md:w-[400px] max-md:h-[400px] max-sm:w-[280px] max-sm:h-[280px] max-sm:text-lg">
          <div>ubbox Game</div>
        </div>
      </div>
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/2ac9cc594e42506d4e754956503cab6ff5eadcd8?width=992"
        alt="group 2 1"
        className="absolute w-[496px] h-[607px] right-10 bottom-0 max-md:static max-md:w-[300px] max-md:h-[367px] max-md:mt-10 max-sm:w-[200px] max-sm:h-[245px]"
      />
    </section>
  );
};

export default HeroSection;
