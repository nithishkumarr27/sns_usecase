import React from 'react';
import Button from '../../components/ui/Button';
import Lock from './Lock';
import { useNavigate as Navigate } from 'react-router-dom';

const Home = () => {
  const navigate = Navigate();
  return (
    <div className="w-full bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-auto min-h-[600px] sm:min-h-[700px] md:min-h-[800px] overflow-hidden">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: "url('/images/img_67c0570ea854203522bca87aherobgpatternavif.png')" }}
        />
        
        {/* Hero Content */}
        <section className="w-full bg-[linear-gradient(359deg,#ffffff_0%,_#e3ebff_100%)] relative">
          <div 
            className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[802px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/hero_frame.png')" }}
          >
            <div className="w-full max-w-[1224px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center">
              <div className="flex flex-col gap-[20px] sm:gap-[30px] md:gap-[40px] lg:gap-[54px] justify-start items-center w-full text-center">
                {/* Main Heading */}
                <h1 className="text-[24px] sm:text-[32px] md:text-[48px] lg:text-[64px] font-sora pt-[100px] sm:pt-[140px] md:pt-[160px] lg:pt-[190px] font-extrabold leading-[28px] sm:leading-[40px] md:leading-[56px] lg:leading-[80px] text-center text-global-1 w-full px-2">
                  <span className="text-global-1">We partner with you in your </span>
                  <br className="hidden sm:block"/>
                  <span className="text-global-5 text-[#064EE3]">Agentic Solution</span>
                  <span className="text-global-1"> Journey.</span>
                </h1>

                {/* Subtitle */}
                <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] font-inter font-normal leading-[18px] sm:leading-[20px] md:leading-[22px] lg:leading-[26px] text-center text-global-1 w-full max-w-[800px] px-2">
                  We help forward-looking companies unlock value with agentic solutions powered by AI, data intelligence, and scalable platforms.
                </p>

                {/* CTA Button */}
                <Button
                  variant="primary"
                  size="medium"
                  className="rounded-[26px] px-4 sm:px-6 py-[12px] sm:py-[14px] text-sm sm:text-base font-semibold text-white"
                  onClick={() => {}}
                >
                  Start Your Agentic Journey
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      {/* Feature Cards Section */}
      <div className="relative -mt-16 sm:-mt-24 md:-mt-32 z-30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative p-4 sm:p-6 lg:p-16">
            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {/* Outcome Optimization Card */}
              <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow h-auto sm:h-[275px] flex flex-col">
                <div className="bg-[#e6edfc] rounded-xl p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                  <img src="/images/Frame.svg" alt="Outcome Optimization" className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-inter font-medium text-[#040404] mt-2">
                  Born Agentic
                </h3>
                <p className="text-xs sm:text-sm font-manrope font-medium text-gray-600 mt-2 sm:mt-auto mb-4 sm:mb-[20px]">
                  Native to the era of autonomous AI.
                </p>
              </div>
              
              {/* Domain Versatility Card */}
              <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow h-auto sm:h-[275px] flex flex-col">
                <div className="bg-[#e6edfc] rounded-xl p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                  <img src="/images/Frame_2.svg" alt="Domain Versatility" className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-inter font-medium text-[#040404] mt-2">
                  AI Engineering <br /> First
                </h3>
                <p className="text-xs sm:text-sm font-manrope font-medium text-gray-600 mt-2 sm:mt-auto mb-4 sm:mb-[20px]">
                  Strong foundation in AI, data, and automation.
                </p>
              </div>
              
              {/* AI Engineering Fast Card */}
              <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow h-auto sm:h-[275px] flex flex-col">
                <div className="bg-[#e6edfc] rounded-xl p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                  <img src="/images/Frame_3.svg" alt="AI Engineering Fast" className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-inter font-medium text-[#040404] mt-2">
                  Domain Versatility
                </h3>
                <p className="text-xs sm:text-sm font-manrope font-medium text-gray-600 mt-2 sm:mt-auto mb-4 sm:mb-[20px]">
                  Solutions that adapt across industries.
                </p>
              </div>
              
              {/* Fast Agentic Card */}
              <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow h-auto sm:h-[275px] flex flex-col">
                <div className="bg-[#e6edfc] rounded-xl p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                  <img src="/images/Frame_4.svg" alt="Fast Agentic" className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-inter font-medium text-[#040404] mt-2">
                  Outcome obsession
                </h3>
                <p className="text-xs sm:text-sm font-manrope font-medium text-gray-600 mt-2 sm:mt-auto mb-4 sm:mb-[20px]">
                  Designed to deliver real impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* lock */}
      <div className='mx-auto'>
        <Lock/>
      </div>

      {/* Use Cases Section */}
      <div className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto">
          {/* Background with decorative elements - full width */}
          <div className="relative bg-gradient-to-br from-blue-50 to-white rounded-3xl overflow-hidden">
            {/* Decorative Background - full width */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-10"
              style={{ backgroundImage: "url('/images/BG.jpg')" }}
            />
            
            {/* Content Container - max width 1200px */}
            <div className="relative z-20 max-w-[1200px] mx-auto pt-6 sm:pt-8 px-4 sm:px-6">
              {/* Section Header */}
              <div className="mb-8 sm:mb-12 lg:mb-16">
                <Button
                  variant="secondary"
                  size="small"
                  className="bg-[#ade5d3] text-[#040404] rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8 text-sm"
                  onClick={() => {}}
                >
                  UseCases
                </Button>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-manrope font-bold text-[#242424] leading-tight max-w-7xl">
                  From tech startups to global enterprises, our Agentic solutions adapt to any industry, helping leaders reimagine growth, efficiency, and customer experience.
                </h2>
              </div>
              
              {/* Use Cases Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
                {/* IT Development Lifecycle Card */}
                <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow">
                  <div className="bg-[#e6edfc] rounded-xl p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-3 sm:mb-4">
                    <img src="/images/img_background_blue_800.svg" alt="IT Development" className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-sora font-semibold text-[#242424] mb-2 sm:mb-3">
                    IT Development Lifecycle
                  </h3>
                  <p className="text-sm sm:text-[16px] font-inter text-black/80 mb-3 sm:mb-4">
                    Seamless, smart, and scalable Agentic AI powers the future of IT.
                  </p>
                  <div className="flex items-center text-[#3e57da] hover:text-[#064ee3] cursor-pointer transition-colors">
                    <span className="text-xs sm:text-sm font-inter">Learn More</span>
                    <img src="/images/img_solar_arrow_up_linear.svg" alt="Arrow" className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                  </div>
                </div>
                
                {/* Supply Chain Card */}
                <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow">
                  <div className="bg-[#e6edfc] rounded-xl p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-3 sm:mb-4">
                    <img src="/images/img_frame.svg" alt="Supply Chain" className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-sora font-semibold text-[#242424] mb-2 sm:mb-3">
                    Supply Chain
                  </h3>
                  <p className="text-sm sm:text-[16px] font-inter text-black/80">
                    From demand to delivery, every link learns, decides, and acts in real time
                  </p>
                </div>
                
                {/* Healthcare Card */}
                <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow">
                  <div className="bg-[#e6edfc] rounded-xl p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-3 sm:mb-4">
                    <img src="/images/img_frame_blue_800.svg" alt="Healthcare" className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-sora font-semibold text-[#242424] mb-2 sm:mb-3">
                    Healthcare
                  </h3>
                  <p className="text-sm sm:text-[16px] font-inter text-black/80">
                    Partnering with hospitals to provide intelligent, personalized, and always-available healthcare solutions.
                  </p>
                </div>
                
                {/* Insurance Card */}
                <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow">
                  <div className="bg-[#e6edfc] rounded-xl p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-3 sm:mb-4">
                    <img src="/images/img_frame_blue_800_60x60.svg" alt="Insurance" className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-sora font-semibold text-[#242424] mb-2 sm:mb-3">
                    Insurance
                  </h3>
                  <p className="text-sm sm:text-[16px] font-inter text-black/80">
                    40% faster bookings, predictive demand management, and personalised guest experiences.
                  </p>
                </div>
                
                {/* Human Resource Card */}
                <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow">
                  <div className="bg-[#e6edfc] rounded-xl p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-3 sm:mb-4">
                    <img src="/images/img_frame_60x60.svg" alt="Human Resource" className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-sora font-semibold text-[#242424] mb-2 sm:mb-3">
                    Human Resource
                  </h3>
                  <p className="text-sm sm:text-[16px] font-inter text-black/80">
                    3× higher conversions using recommendation engines and customer intelligence.
                  </p>
                </div>

                <div className='flex flex-col justify-evenly max-w-[340px] gap-4 sm:gap-6'>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-inter font-semibold leading-tight font-[600]">
                    Unlock Agentic AI Solutions for Your Industry.
                  </h3>
                  <Button
                    variant="primary"
                    size="medium"
                    className="rounded-full px-4 sm:px-6 py-3 text-sm sm:text-base font-inter font-semibold text-white w-full sm:max-w-[250px] h-[44px] sm:h-[50px]"
                    onClick={() => {navigate("/usecase")}}
                  >
                    Explore Agentic Use Case
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Solutions Section */}
      <div className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50/50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sora font-semibold leading-tight">
              <span className="text-[#064ee3]">Beyond Code. <br /></span>
              <span className="text-[#242424]">Into impact with Agentic Solutions</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Main Solution Card */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-b from-white via-blue-50/50 to-blue-100 
                  border border-gray-200 rounded-2xl 
                  pt-6 pl-6 sm:pt-8 sm:pl-8 lg:pt-12 lg:pl-12 
                  pr-0 pb-0
                  h-full flex flex-col justify-between">  
                <div className="space-y-4 sm:space-y-6">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-manrope font-bold text-[#242424] leading-tight max-w-xl">
                    Redefining Solutions in the Agentic Era
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg font-inter text-[#242424]/70 leading-relaxed max-w-xl">
                    We do not build with old playbooks. We engineer with AI-first principles to solve the problems that truly matter.
                  </p>
                </div>
                <div className="flex justify-end sm:pt-8">
                  <img 
                    src="/images/image_11.png" 
                    alt="Solutions Illustration" 
                    className="w-300 h-auto object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
            
            {/* Feature Cards Column */}
            <div className="space-y-4 sm:space-y-6 flex flex-col justify-center">
              {/* Innovation at Core */}
              <div className="bg-[#EEF8FF] rounded-2xl p-4 sm:p-6 lg:p-10 relative overflow-hidden">
                  {/* Text Section */}
                  <div className="relative z-10 max-w-lg">
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-manrope font-bold text-[#040404] mb-3 sm:mb-4">
                      Innovation at Core
                    </h4>
                    <p className="text-xs sm:text-sm lg:text-base font-inter text-[#242424]/70 leading-relaxed">
                      We constantly evolve, experiment, and push boundaries, bringing you
                      future-ready solutions that stay ahead of change.
                    </p>
                  </div>

                  {/* Image Section */}
                  <img
                    src="/images/innova_banner.png"
                    alt="Solutions Illustration"
                    className="absolute right-0 bottom-0 top-0 h-full object-contain"
                  />
                </div>                  
              {/* AI-Only Engineering */}
              <div className="bg-[#FBEAFF] rounded-2xl pt-0 pr-0 pb-4 pl-4 sm:pb-6 sm:pl-6 lg:pb-10 lg:pl-10">
                <img 
                  src="/images/engine_start.png" 
                  alt="Solutions Illustration" 
                  className="w-20 sm:w-28 lg:w-32 h-auto object-cover rounded-xl mx-auto mb-0 mr-0"
                />
                <h4 className="text-lg sm:text-xl lg:text-2xl font-manrope font-bold text-[#040404] mb-3 sm:mb-4">
                  AI-Only Engineering
                </h4>
                <p className="text-xs sm:text-sm lg:text-base font-inter text-[#242424]/70 leading-relaxed">
                  We do not build with old playbooks. We engineer with AI-first principles to solve the problems that truly matter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;