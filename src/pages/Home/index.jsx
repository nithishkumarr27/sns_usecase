import React, {useEffect, useState} from 'react';
import Button from '../../components/ui/Button';
import Lock from './Lock';
import { useNavigate as Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";

const phrases = [
  "To The Vibrant Life At SNS",
  "To 1500+ Foundation Agents",
  "To Use Cases That Matters"
];
const images = [
  "/images/hero_1.png", // for first phrase
  "/images/IMG_6533.png", // for second phrase
  "/images/hero_1.png"  // for third phrase
];

const Home = () => {
  const navigate = Navigate();
  const [index, setIndex] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000); // change every 3s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Hero Section - Added top padding for mobile header */}
      <div className="relative w-full h-auto min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] overflow-hidden pt-20 sm:pt-24 md:pt-6 lg:pt-0">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: "url('/images/img_67c0570ea854203522bca87aherobgpatternavif.png')" }}
        />
        
        {/* Hero Content */}
 <section className="w-full bg-[linear-gradient(359deg,#ffffff_0%,_#e3ebff_100%)] relative">
      <div 
        className="w-full h-[350px] xs:h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[802px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/HomeHero.png')" }}
      >
        <div className="w-full max-w-[320px] xs:max-w-[480px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1300px] mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-10 items-center h-full gap-4 lg:gap-0">
            
            {/* Left Content Container - 70% */}
            <div className="lg:col-span-7 flex flex-col gap-[6px] xs:gap-[8px] justify-center text-center lg:text-left">

              {/* Small Header */}
              <div className="text-[20px] xs:text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-manrope font-[700] text-global-1">
                Agentic AI Breakthroughs
              </div>
              
              {/* Main Heading with Slide Animation */}
              <h1 className="text-[18px] xs:text-[20px] sm:text-[24px] md:text-[32px] lg:text-[42px] xl:text-[48px] 2xl:text-[56px] font-manrope font-extrabold leading-[22px] xs:leading-[24px] sm:leading-[28px] md:leading-[40px] lg:leading-[50px] xl:leading-[56px] 2xl:leading-[72px] text-global-1 h-[44px] xs:h-[50px] sm:h-[60px] md:h-[70px] lg:h-[75px] xl:h-[80px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={phrases[index]}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="block text-[#064EE3]"
                  >
                    {phrases[index]}
                  </motion.span>
                </AnimatePresence>
              </h1>

              {/* Subtitle */}
              <h2 className="text-[20px] xs:text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-manrope font-[700] leading-[24px] xs:leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[42px] xl:leading-[48px] text-global-1">
                Everything Unfolds Here
              </h2>

              {/* Description */}
              <p className="text-[14px] xs:text-[16px] sm:text-[18px] md:text-[20px] lg:text-[21px] xl:text-[22px] font-manrope font-light leading-[18px] xs:leading-[20px] sm:leading-[22px] md:leading-[24px] lg:leading-[25px] xl:leading-[26px] text-global-1 mt-[10px] xs:mt-[12px] sm:mt-[16px] md:mt-[20px]">
                Access 1500+ Foundation Models, Ready for you
              </p>

              {/* CTA Button */}
              <Button
                variant="primary"
                size="medium"
                className="rounded-[26px] px-3 xs:px-4 sm:px-6 py-[10px] xs:py-[12px] sm:py-[14px] text-xs xs:text-sm sm:text-base font-semibold text-white w-fit mx-auto lg:mx-0 mt-[10px] xs:mt-[12px] sm:mt-[16px]"
                onClick={() => {}}
              >
                Start Your Agentic Journey
              </Button>
            </div>

            {/* Right Image Container - 30% */}
            <div className="lg:col-span-3 flex justify-center lg:justify-end mt-4 xs:mt-6 lg:mt-0">
              <div className="relative w-full min-w-[240px] xs:min-w-[280px] sm:min-w-[320px] md:min-w-[380px] lg:min-w-[420px] xl:min-w-[450px] max-w-[240px] xs:max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px] xl:max-w-[450px]">
                {/* Main Image Card */}
                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={images[index]}
                      src={images[index]} 
                      alt="Hero related visual"
                      className="w-[240px] xs:w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px] xl:w-[450px] h-[252px] xs:h-[295px] sm:h-[337px] md:h-[400px] lg:h-[442px] xl:h-[474px] object-cover mx-auto"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6 }}
                    />
                  </AnimatePresence>

                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 xs:p-3 sm:p-4">
                    <div className="text-white">
                      <h3 className="font-semibold text-[10px] xs:text-xs sm:text-sm mb-1">
                        Culture, Crafted with Pur...
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] xs:text-[10px] sm:text-xs opacity-90">Life at SNS Square</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Indicator Bar */}
                <div className="flex gap-1 xs:gap-2 mt-2 xs:mt-3 sm:mt-4 justify-center">
                  {images.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 xs:h-1.5 sm:h-2 rounded-full transition-all duration-500 ${
                        i === index ? "bg-[#064EE3] w-16 xs:w-20 sm:w-24 md:w-32" : "bg-[#d3ddf5] w-16 xs:w-20 sm:w-24 md:w-32 opacity-60"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
    </div>
      
      {/* Feature Cards Section */}
      <div className="relative z-30 px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative p-3 xs:p-4 sm:p-6 lg:p-12 xl:p-16">
            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-6 lg:gap-8">
              {/* Outcome Optimization Card */}
              <div className="bg-white rounded-2xl shadow-lg p-3 xs:p-4 sm:p-6 hover:shadow-xl transition-shadow h-auto xs:h-[250px] sm:h-[275px] flex flex-col">
                <div className="bg-[#e6edfc] rounded-xl p-2 xs:p-3 sm:p-4 w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                  <img src="/images/Frame.svg" alt="Outcome Optimization" className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-inter font-medium text-[#040404] mt-2">
                  Born Agentic
                </h3>
                <p className="text-[10px] xs:text-xs sm:text-sm font-manrope font-medium text-gray-600 mt-2 xs:mt-auto mb-3 xs:mb-4 sm:mb-[20px]">
                  Native to the era of autonomous AI.
                </p>
              </div>
              
              {/* Domain Versatility Card */}
              <div className="bg-white rounded-2xl shadow-lg p-3 xs:p-4 sm:p-6 hover:shadow-xl transition-shadow h-auto xs:h-[250px] sm:h-[275px] flex flex-col">
                <div className="bg-[#e6edfc] rounded-xl p-2 xs:p-3 sm:p-4 w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                  <img src="/images/Frame_2.svg" alt="Domain Versatility" className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-inter font-medium text-[#040404] mt-2">
                  AI Engineering <br /> First
                </h3>
                <p className="text-[10px] xs:text-xs sm:text-sm font-manrope font-medium text-gray-600 mt-2 xs:mt-auto mb-3 xs:mb-4 sm:mb-[20px]">
                  Strong foundation in AI, data, and automation.
                </p>
              </div>
              
              {/* AI Engineering Fast Card */}
              <div className="bg-white rounded-2xl shadow-lg p-3 xs:p-4 sm:p-6 hover:shadow-xl transition-shadow h-auto xs:h-[250px] sm:h-[275px] flex flex-col">
                <div className="bg-[#e6edfc] rounded-xl p-2 xs:p-3 sm:p-4 w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                  <img src="/images/Frame_3.svg" alt="AI Engineering Fast" className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-inter font-medium text-[#040404] mt-2">
                  Domain Versatility
                </h3>
                <p className="text-[10px] xs:text-xs sm:text-sm font-manrope font-medium text-gray-600 mt-2 xs:mt-auto mb-3 xs:mb-4 sm:mb-[20px]">
                  Solutions that adapt across industries.
                </p>
              </div>
              
              {/* Fast Agentic Card */}
              <div className="bg-white rounded-2xl shadow-lg p-3 xs:p-4 sm:p-6 hover:shadow-xl transition-shadow h-auto xs:h-[250px] sm:h-[275px] flex flex-col">
                <div className="bg-[#e6edfc] rounded-xl p-2 xs:p-3 sm:p-4 w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                  <img src="/images/Frame_4.svg" alt="Fast Agentic" className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-inter font-medium text-[#040404] mt-2">
                  Outcome obsession
                </h3>
                <p className="text-[10px] xs:text-xs sm:text-sm font-manrope font-medium text-gray-600 mt-2 xs:mt-auto mb-3 xs:mb-4 sm:mb-[20px]">
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
      <div className="py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto">
          {/* Background with decorative elements - full width */}
          <div className="relative bg-gradient-to-br from-blue-50 to-white rounded-3xl overflow-hidden">
            {/* Decorative Background - full width */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-10"
              style={{ backgroundImage: "url('/images/BG.jpg')" }}
            />
            
            {/* Content Container - max width 1200px */}
            <div className="relative z-20 max-w-[320px] xs:max-w-[480px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1200px] mx-auto pt-4 xs:pt-6 sm:pt-8 px-3 xs:px-4 sm:px-6">
              {/* Section Header */}
              <div className="mb-6 xs:mb-8 sm:mb-12 lg:mb-16">
                <Button
                  variant="secondary"
                  size="small"
                  className="bg-[#ade5d3] text-[#040404] rounded-full px-3 xs:px-4 sm:px-6 py-1.5 xs:py-2 mb-4 xs:mb-6 sm:mb-8 text-xs xs:text-sm"
                  onClick={() => {}}
                >
                  UseCases
                </Button>
                <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-manrope font-bold text-[#242424] leading-tight max-w-7xl">
                  From tech startups to global enterprises, our Agentic solutions adapt to any industry, helping leaders reimagine growth, efficiency, and customer experience.
                </h2>
              </div>
              
              {/* Use Cases Grid */}
              <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-6 lg:gap-8 mb-6 xs:mb-8 sm:mb-12 lg:mb-16">
                {/* IT Development Lifecycle Card */}
                <div className="bg-white rounded-2xl shadow-lg p-3 xs:p-4 sm:p-6 hover:shadow-xl transition-shadow">
                  <div className="bg-[#e6edfc] rounded-xl p-2 xs:p-3 sm:p-4 w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-2 xs:mb-3 sm:mb-4">
                    <img src="/images/img_background_blue_800.svg" alt="IT Development" className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-base xs:text-lg sm:text-xl font-sora font-semibold text-[#242424] mb-2 sm:mb-3">
                    IT Development Lifecycle
                  </h3>
                  <p className="text-xs xs:text-sm sm:text-[16px] font-inter text-black/80 mb-2 xs:mb-3 sm:mb-4">
                    Seamless, smart, and scalable Agentic AI powers the future of IT.
                  </p>
                  <div className="flex items-center text-[#3e57da] hover:text-[#064ee3] cursor-pointer transition-colors">
                    <span className="text-[10px] xs:text-xs sm:text-sm font-inter">Learn More</span>
                    <img src="/images/img_solar_arrow_up_linear.svg" alt="Arrow" className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 ml-2" />
                  </div>
                </div>
                
                {/* Supply Chain Card */}
                <div className="bg-white rounded-2xl shadow-lg p-3 xs:p-4 sm:p-6 hover:shadow-xl transition-shadow">
                  <div className="bg-[#e6edfc] rounded-xl p-2 xs:p-3 sm:p-4 w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-2 xs:mb-3 sm:mb-4">
                    <img src="/images/img_frame.svg" alt="Supply Chain" className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-base xs:text-lg sm:text-xl font-sora font-semibold text-[#242424] mb-2 sm:mb-3">
                    Supply Chain
                  </h3>
                  <p className="text-xs xs:text-sm sm:text-[16px] font-inter text-black/80">
                    From demand to delivery, every link learns, decides, and acts in real time
                  </p>
                </div>
                
                {/* Healthcare Card */}
                <div className="bg-white rounded-2xl shadow-lg p-3 xs:p-4 sm:p-6 hover:shadow-xl transition-shadow">
                  <div className="bg-[#e6edfc] rounded-xl p-2 xs:p-3 sm:p-4 w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-2 xs:mb-3 sm:mb-4">
                    <img src="/images/img_frame_blue_800.svg" alt="Healthcare" className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-base xs:text-lg sm:text-xl font-sora font-semibold text-[#242424] mb-2 sm:mb-3">
                    Healthcare
                  </h3>
                  <p className="text-xs xs:text-sm sm:text-[16px] font-inter text-black/80">
                    Partnering with hospitals to provide intelligent, personalized, and always-available healthcare solutions.
                  </p>
                </div>
                
                {/* Insurance Card */}
                <div className="bg-white rounded-2xl shadow-lg p-3 xs:p-4 sm:p-6 hover:shadow-xl transition-shadow">
                  <div className="bg-[#e6edfc] rounded-xl p-2 xs:p-3 sm:p-4 w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-2 xs:mb-3 sm:mb-4">
                    <img src="/images/img_frame_blue_800_60x60.svg" alt="Insurance" className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-base xs:text-lg sm:text-xl font-sora font-semibold text-[#242424] mb-2 sm:mb-3">
                    Insurance
                  </h3>
                  <p className="text-xs xs:text-sm sm:text-[16px] font-inter text-black/80">
                    40% faster bookings, predictive demand management, and personalised guest experiences.
                  </p>
                </div>
                
                {/* Human Resource Card */}
                <div className="bg-white rounded-2xl shadow-lg p-3 xs:p-4 sm:p-6 hover:shadow-xl transition-shadow">
                  <div className="bg-[#e6edfc] rounded-xl p-2 xs:p-3 sm:p-4 w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-2 xs:mb-3 sm:mb-4">
                    <img src="/images/img_frame_60x60.svg" alt="Human Resource" className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-base xs:text-lg sm:text-xl font-sora font-semibold text-[#242424] mb-2 sm:mb-3">
                    Human Resource
                  </h3>
                  <p className="text-xs xs:text-sm sm:text-[16px] font-inter text-black/80">
                    3× higher conversions using recommendation engines and customer intelligence.
                  </p>
                </div>

                <div className='flex flex-col justify-evenly max-w-[340px] gap-3 xs:gap-4 sm:gap-6'>
                  <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-inter font-semibold leading-tight font-[600]">
                    Unlock Agentic AI Solutions for Your Industry.
                  </h3>
                  <Button
                    variant="primary"
                    size="medium"
                    className="rounded-full px-3 xs:px-4 sm:px-6 py-2.5 xs:py-3 text-xs xs:text-sm sm:text-base font-inter font-semibold text-white w-full sm:max-w-[250px] h-[36px] xs:h-[40px] sm:h-[44px] lg:h-[50px]"
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
      <div className="py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gray-50/50 px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="max-w-[320px] xs:max-w-[480px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1200px] mx-auto">
          <div className="mb-6 xs:mb-8 sm:mb-12">
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sora font-semibold leading-tight">
              <span className="text-[#064ee3]">Beyond Code. <br /></span>
              <span className="text-[#242424]">Into impact with Agentic Solutions</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8">
            {/* Main Solution Card */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-b from-white via-blue-50/50 to-blue-100 
                  border border-gray-200 rounded-2xl 
                  pt-4 pl-4 xs:pt-6 xs:pl-6 sm:pt-8 sm:pl-8 lg:pt-12 lg:pl-12 
                  pr-0 pb-0
                  h-full flex flex-col justify-between">  
                <div className="space-y-3 xs:space-y-4 sm:space-y-6">
                  <h3 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-manrope font-bold text-[#242424] leading-tight max-w-xl">
                    Redefining Solutions in the Agentic Era
                  </h3>
                  <p className="text-xs xs:text-sm sm:text-base lg:text-lg font-inter text-[#242424]/70 leading-relaxed max-w-xl">
                    We do not build with old playbooks. We engineer with AI-first principles to solve the problems that truly matter.
                  </p>
                </div>
                <div className="flex justify-end pt-4 xs:pt-6 sm:pt-8">
                  <img 
                    src="/images/image_11.png" 
                    alt="Solutions Illustration" 
                    className="w-[200px] xs:w-[250px] sm:w-[300px] h-auto object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
            
            {/* Feature Cards Column */}
            <div className="space-y-3 xs:space-y-4 sm:space-y-6 flex flex-col justify-center">
              {/* Innovation at Core */}
              <div className="bg-[#EEF8FF] rounded-2xl p-3 xs:p-4 sm:p-6 lg:p-8 xl:p-10 relative overflow-hidden">
                  {/* Text Section */}
                  <div className="relative z-10 max-w-lg">
                    <h4 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-manrope font-bold text-[#040404] mb-2 xs:mb-3 sm:mb-4">
                      Innovation at Core
                    </h4>
                    <p className="text-[10px] xs:text-xs sm:text-sm lg:text-base font-inter text-[#242424]/70 leading-relaxed">
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
              <div className="bg-[#FBEAFF] rounded-2xl pt-0 pr-0 pb-3 pl-3 xs:pb-4 xs:pl-4 sm:pb-6 sm:pl-6 lg:pb-8 lg:pl-8 xl:pb-10 xl:pl-10">
                <img 
                  src="/images/engine_start.png" 
                  alt="Solutions Illustration" 
                  className="w-16 xs:w-20 sm:w-24 lg:w-28 xl:w-32 h-auto object-cover rounded-xl mx-auto mb-0 mr-0"
                />
                <h4 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-manrope font-bold text-[#040404] mb-2 xs:mb-3 sm:mb-4">
                  AI-Only Engineering
                </h4>
                <p className="text-[10px] xs:text-xs sm:text-sm lg:text-base font-inter text-[#242424]/70 leading-relaxed">
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