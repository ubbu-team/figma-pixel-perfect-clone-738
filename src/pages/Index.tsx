import React from 'react';
import HeroSection from '@/components/HeroSection';
import EducationalSection from '@/components/EducationalSection';
import GamesGrid from '@/components/GamesGrid';
import CallToActionSection from '@/components/CallToActionSection';

const Index = () => {
  return (
    <main className="max-w-[1440px] w-full relative bg-[#D9D9D9] mx-auto my-0 max-md:max-w-[991px] max-sm:max-w-screen-sm">
      <HeroSection />
      
      <EducationalSection
        title="Educational Benefits and Game Explanation"
        description="Educational Benefits and Game Explanation"
        iconSrc="https://api.builder.io/api/v1/image/assets/TEMP/a25cb2f402a5446f5ef2dfaa767d1e403648545c"
        iconAlt="P_PROJECT 1 2"
      />
      
      <GamesGrid />
      
      <EducationalSection
        title="Título"
        description="Contexto do Jogo"
        backgroundColor="#D9D9D9"
        iconSrc="https://api.builder.io/api/v1/image/assets/TEMP/a25cb2f402a5446f5ef2dfaa767d1e403648545c"
        iconAlt="P_PROJECT 1 2"
      />
      
      <CallToActionSection />
    </main>
  );
};

export default Index;
