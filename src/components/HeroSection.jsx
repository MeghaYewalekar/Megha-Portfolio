import React from "react";
import HomeImage from "../assets/images/dp-bg-reg.png";

const HeroSection = () => {
  return (
    <section className="bg-[#F4F4F4] py-16 md:py-24" id="home">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-0 md:gap-8">
          {/* Left Section */}
          <div className="md:w-1/2 text-center md:text-left ">
            <h1 className="text-4xl font-bold text-secondary mb-4 md:mt-0 mt-6 ">
              Megha Yewalekar
            </h1>
            <p className="text-xl font-semibold text-[#606060] mb-4">
              Frontend Developer
            </p>
            <p className="text-secondary mb-6 text-justify">
              I believe great things can be achieved through the use of
              technology and research. But those are merely the tools. Behind
              the tools are the people. Teamwork and passion, those are what
              matter the most.
            </p>
            {/* Call to Action Button */}
            <a
              href="/Megha_Yewalekar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-[#F4F4F4] hover:text-primary hover:border-primary border transition-all"
              title="Download Resume">
              Download Resume
            </a>
          </div>

          {/* Right Section - Image */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src={HomeImage}
              alt="Saam Sheron - Software Developer"
              className="w-full h-auto rounded-lg shadow-lg"
              title="Saam Sheron"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
