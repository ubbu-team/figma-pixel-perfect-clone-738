import React from 'react';

interface EducationalSectionProps {
  title: string;
  description: string;
  backgroundColor?: string;
  iconSrc: string;
  iconAlt?: string;
}

const EducationalSection: React.FC<EducationalSectionProps> = ({
  title,
  description,
  backgroundColor = "#ECF4FF",
  iconSrc,
  iconAlt = ""
}) => {
  return (
    <section 
      className="flex items-center justify-center gap-10 px-10 py-[60px] max-md:flex-col max-md:text-center"
      style={{ backgroundColor }}
    >
      <img
        src={iconSrc}
        alt={iconAlt}
        className="w-[98px] h-[98px]"
      />
      <div className="max-w-[600px]">
        <h3 className="text-[#10192E] text-[32px] font-bold leading-[60px] mb-2.5 max-sm:text-2xl max-sm:leading-8">
          {title}
        </h3>
        <p className="text-[#10192E] text-[26px] font-normal leading-[60px] max-sm:text-lg max-sm:leading-7">
          {description}
        </p>
      </div>
    </section>
  );
};

export default EducationalSection;
