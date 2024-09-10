import React from 'react';

// Define the types for props
interface HeroSectionProps {
  title: string;
  subtitle: string;
  date: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, date }) => {
  return (
    <section id="hero" className="relative text-center text-white">
      <img 
        src="/images/hero-image.jpg" 
        alt="Wedding" 
        className="w-full h-screen object-cover"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-8 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
        <p className="text-xl md:text-2xl mb-4">{subtitle}</p>
        <h2 className="text-2xl md:text-3xl font-semibold">{date}</h2>
      </div>
    </section>
  );
};

export default HeroSection;
