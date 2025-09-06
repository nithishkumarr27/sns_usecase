import React, {useEffect, useState} from 'react';
import Button from '../../components/ui/Button';
import Lock from './Lock';
import { useNavigate as Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { OrbitingCircles } from '../../components/ui/Orbiting-circles';

  const phrases = [
    "To The Vibrant Life At SNS",
    "To 1500+ Foundation Agents",
    "To Use Cases That Matters"
  ];

  // Navigation mapping for each phrase
  const phraseNavigation = [
    {
      phrase: "To The Vibrant Life At SNS",
      route: "/life-at-sns",
      buttonText: "Explore Our Culture"
    },
    {
      phrase: "To 1500+ Foundation Agents",
      route: "/agent-workbench", 
      buttonText: "Explore Agent Workbench"
    },
    {
      phrase: "To Use Cases That Matters",
      route: "/usecase",
      buttonText: "Explore Use Cases"
    }
  ];

  const images = [
    "/images/Img one 2.webp",
    "/images/Supplychain (1).webp",
    "/images/Img three.webp",
    "/images/IT solution (1).webp",
    "/images/Img two_2 2.webp",
    "/images/Supplychain (1).webp",
    "/images/Img one 2.webp",
    "/images/IT solution (1).webp",
    "/images/Img three.webp", 
    "/images/Supplychain (1).webp",
    "/images/Img two_2 2.webp",    
    "/images/IIT solution (1).webp",
    "/images/Img one 2.webp"
  ];

// Dynamic content for each button type
const agentContent = {
  'Foundation Agents': {
    centerTitle: 'Foundation Agents',
    centerSubtitle: '1500+ AI Models Ready for You',
    items: [
      {
        icon: '/images/agents/database-management 1.png',
        title: 'Data\nManagement',
        alt: 'Data Management'
      },
      {
        icon: '/images/agents/regulatory 1.png',
        title: 'Compliance &\nSecurity',
        alt: 'Compliance & Security'
      },
      {
        icon: '/images/agents/online-analytical 1.png',
        title: 'Business\nIntelligence & Analysis',
        alt: 'Business Intelligence & Analysis'
      },
      {
        icon: '/images/agents/robot 1.png',
        title: 'Communication\n& Assistance',
        alt: 'Communication & Assistance'
      },
      {
        icon: '/images/agents/writing 1.png',
        title: 'Summarisation &\nContent Handling',
        alt: 'Summarisation & Content Handling'
      },
      {
        icon: '/images/agents/folders 1.png',
        title: 'Document &\nKnowledge Management',
        alt: 'Document & Knowledge Management'
      },
      {
        icon: '/images/agents/social-media 1.png',
        title: 'Social & Media',
        alt: 'Social & Media'
      },
      {
        icon: '/images/agents/efficiency 1.png',
        title: 'Work Management',
        alt: 'Work Management'
      },
      {
        icon: '/images/agents/optimizing 1.png',
        title: 'Developer Support',
        alt: 'Developer Support'
      }
    ]
  },
  'Industry Agents': {
    centerTitle: 'Industry Agents',
    centerSubtitle: 'Specialized Solutions for Every Sector',
    items: [
      {
        icon: '/images/agents/factory 1.png',
        title: 'Manufacturing',
        alt: 'Manufacturing'
      },
      {
        icon: '/images/agents/sprout 1.png',
        title: 'Agriculture',
        alt: ' Agriculture'
      },
      {
        icon: '/images/agents/medical-check 1.png',
        title: 'Healthcare',
        alt: 'Healthcare'
      },
      {
        icon: '/images/agents/law 1.png',
        title: 'Legal',
        alt: 'Legal'
      },
      {
        icon: '/images/agents/background 1.png',
        title: 'Media & Entertainment',
        alt: 'Media & Entertainment'
      },
      {
        icon: '/images/agents/shop-bag 1.png',
        title: 'Retail',
        alt: 'Retail'
      },
      {
        icon: '/images/agents/building 1.png',
        title: 'Real Estate',
        alt: 'Real Estate'
      },
      {
        icon: '/images/agents/hr-manager (1) 1.png',
        title: 'Human Resources',
        alt: 'Human Resources'
      },
      {
        icon: '/images/agents/budget 1.png',
        title: 'Fintech',
        alt: 'Fintech'
      },
      {
        icon: '/images/agents/bank 1.png',
        title: 'Banking',
        alt: 'Banking'
      }
    ]
  },
  'Consumer Agents': {
    centerTitle: 'Consumer Agents',
    centerSubtitle: 'Personal AI Assistants for Everyone',
    items: [
      {
        icon: '/images/img_background_blue_800.svg',
        title: 'Personal\nAssistant',
        alt: 'Personal Assistant'
      },
      {
        icon: '/images/img_frame_blue_800.svg',
        title: 'Smart Home\nControl',
        alt: 'Smart Home'
      },
      {
        icon: '/images/Frame_2.svg',
        title: 'Learning\nCompanion',
        alt: 'Learning'
      },
      {
        icon: '/images/img_frame.svg',
        title: 'Health\nTracker',
        alt: 'Health Tracker'
      },
      {
        icon: '/images/Frame_3.svg',
        title: 'Entertainment\nCurator',
        alt: 'Entertainment'
      },
      {
        icon: '/images/Frame_4.svg',
        title: 'Shopping\nAdvisor',
        alt: 'Shopping'
      },
      {
        icon: '/images/Frame.svg',
        title: 'Travel\nPlanner',
        alt: 'Travel Planner'
      },
      {
        icon: '/images/img_frame_60x60.svg',
        title: 'Finance\nManager',
        alt: 'Finance Manager'
      }
    ]
  }
};

const Home = () => {
  const navigate = Navigate();
  const [index, setIndex] = useState(0);
  const [activeButton, setActiveButton] = useState('Foundation Agents');
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

    // Get current navigation info based on the phrase
    const getCurrentNavigation = () => {
      const currentPhraseIndex = index % phrases.length;
      return phraseNavigation[currentPhraseIndex];
    };

    // Handle navigation based on current phrase
    const handleNavigation = () => {
      const currentNav = getCurrentNavigation();
      navigate(currentNav.route);
    };

    // Handle phrase click navigation
    const handlePhraseClick = () => {
      handleNavigation();
    };

  // Get current agent content based on active button
  const getCurrentAgentContent = () => {
    return agentContent[activeButton] || agentContent['Foundation Agents'];
  };

  // Get items without repetition but with consistent spacing
  const getNonRepeatingItems = () => {
    const currentContent = getCurrentAgentContent();
    return currentContent.items; // Return original items without any repetition
  };

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Hero Section - Increased mobile sizes */}
      <div className="relative w-full h-auto min-h-[500px] xs:min-h-[550px] sm:min-h-[600px] md:min-h-[650px] lg:min-h-[700px] xl:min-h-[750px] 2xl:min-h-[800px] overflow-hidden pt-20 xs:pt-22 sm:pt-24 md:pt-8 lg:pt-2 xl:pt-3 2xl:pt-4">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: "url('/images/img_67c0570ea854203522bca87aherobgpatternavif.png')" }}
        />
          
          {/* Hero Content */}
          <section className="w-full bg-[linear-gradient(359deg,#ffffff_0%,_#e3ebff_100%)] relative">
            <div 
              className="w-full h-[500px] xs:h-[550px] sm:h-[600px] md:h-[650px] lg:h-[700px] xl:h-[750px] 2xl:h-[802px] bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/images/HomeHero.png')" }}
            >
              <div className="w-full max-w-[300px] xs:max-w-[350px] sm:max-w-[400px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1200px] 2xl:max-w-[1300px] mx-auto px-3 xs:px-4 sm:px-5 lg:px-8 h-full">
                
                {/* Mobile Layout (< 768px) - Stacked Vertically */}
                <div className="md:hidden flex flex-col justify-center h-full gap-5 xs:gap-6 sm:gap-7 text-center py-6">
                  {/* Text Content - Increased sizes */}
                  <div className="flex flex-col gap-3 xs:gap-4 w-full px-2">
                    {/* Small Header */}
                    <div className="text-[20px] xs:text-[24px] sm:text-[28px] font-manrope font-[800] text-global-1">
                      Agentic AI Breakthroughs
                    </div>
                    
                    {/* Main Heading with Slide Animation */}
                    <h1 className="text-[18px] xs:text-[20px] sm:text-[22px] font-manrope font-[600] leading-[22px] xs:leading-[24px] sm:leading-[26px] text-global-1 h-[22px] xs:h-[24px] sm:h-[26px] overflow-hidden">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={phrases[index % phrases.length]}
                          initial={{ y: "100%", opacity: 0 }}
                          animate={{ y: "0%", opacity: 1 }}
                          exit={{ y: "-100%", opacity: 0 }}
                          transition={{ duration: 0.6, ease: "easeInOut" }}
                          className="block text-[#064EE3] cursor-pointer hover:opacity-80 transition-opacity"
                          onClick={handlePhraseClick}
                        >
                          {phrases[index % phrases.length]}
                        </motion.span>
                      </AnimatePresence>
                    </h1>
                    
                    {/* Subtitle */}
                    <h2 className="text-[20px] xs:text-[24px] sm:text-[28px] font-manrope font-[800] leading-[20px] xs:leading-[24px] sm:leading-[28px] text-global-1">
                      Everything Unfolds Here
                    </h2>
                    
                    {/* Description */}
                    <p className="text-[10px] xs:text-[11px] sm:text-[12px] font-manrope font-light leading-[12px] xs:leading-[13px] sm:leading-[14px] text-global-1 mt-2 xs:mt-3 whitespace-nowrap">
                      Access 1500+ Foundation Models, Ready for you
                    </p>
                    
                  {/* CTA Button */}
                  <Button
                    variant="primary"
                    size="medium"
                    className="rounded-[16px] xs:rounded-[18px] sm:rounded-[20px] px-4 xs:px-5 sm:px-6 py-[10px] xs:py-[12px] sm:py-[14px] text-[11px] xs:text-[12px] sm:text-[13px] font-semibold text-white w-fit mx-auto mt-3 xs:mt-4"
                    onClick={() => {
                      const ctaSection = document.getElementById('cta-section');
                      if (ctaSection) {
                        ctaSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    Start Your Agentic Journey
                  </Button>
                  </div>
                  
                  {/* Image Container - Mobile - INCREASED SIZES */}
                  <div className="flex justify-center w-full mt-4">
                    <div className="relative w-full max-w-[160px] xs:max-w-[190px] sm:max-w-[220px]">
                      {/* Main Image Card */}
                      <div className="relative bg-transparent rounded-[32px] overflow-hidden">
                        <AnimatePresence mode="wait">
                          <motion.img 
                            key={images[index]}
                            src={images[index]} 
                            alt="Hero related visual"
                            className="w-full h-[160px] xs:h-[190px] sm:h-[220px] object-cover"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.6 }}
                          />
                        </AnimatePresence>
                        {/* Overlay Content */}
                        {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 xs:p-4">
                          <div className="text-white">
                            <h3 className="font-semibold text-[10px] xs:text-[11px] sm:text-xs mb-1">
                              Culture, Crafted with Pur...
                            </h3>
                            <div className="flex items-center justify-between">
                              <span className="text-[9px] xs:text-[10px] sm:text-[11px] opacity-90">Life at SNS Square</span>
                            </div>
                          </div>
                        </div> */}
                      </div>
                      {/* Indicator Bar - Only 3 dots */}
                      <div className="flex gap-1.5 xs:gap-2 mt-3 justify-center">
                        {[0, 1, 2].map((i) => (
                          <div
                            key={i}
                            className={`h-1.5 xs:h-2 rounded-full transition-all duration-500 ${
                              i === (index % 3) ? "bg-[#064EE3] w-6 xs:w-7 sm:w-8" : "bg-[#d3ddf5] w-6 xs:w-7 sm:w-8 opacity-60"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop and Large Tablet Layout (>= 768px) - Side by Side */}
                <div className="hidden md:grid md:grid-cols-10 items-center h-full gap-8">
                  
                  {/* Left Content Container - 60% */}
                  <div className="md:col-span-6 flex flex-col gap-[8px] lg:gap-[12px] justify-center text-center lg:text-left">
                    {/* Small Header */}
                    <div className="text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[48px] font-manrope font-[800] text-global-1 whitespace-nowrap">
                      Agentic AI Breakthroughs
                    </div>
                    
                    {/* Main Heading with Slide Animation */}
                    <h1 className="text-[20px] md:text-[24px] lg:text-[28px] xl:text-[36px] 2xl:text-[42px] font-manrope font-[600] leading-[24px] md:leading-[28px] lg:leading-[32px] xl:leading-[40px] 2xl:leading-[48px] text-global-1 h-[24px] md:h-[28px] lg:h-[32px] xl:h-[40px] 2xl:h-[48px] overflow-hidden whitespace-nowrap">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={phrases[index % phrases.length]}
                          initial={{ y: "100%", opacity: 0 }}
                          animate={{ y: "0%", opacity: 1 }}
                          exit={{ y: "-100%", opacity: 0 }}
                          transition={{ duration: 0.6, ease: "easeInOut" }}
                          className="block text-[#064EE3] cursor-pointer hover:opacity-80 transition-opacity"
                          onClick={handlePhraseClick}
                        >
                          {phrases[index % phrases.length]}
                        </motion.span>
                      </AnimatePresence>
                    </h1>
                    
                    {/* Subtitle */}
                    <h2 className="text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[48px] font-manrope font-[800] leading-[24px] md:leading-[28px] lg:leading-[32px] xl:leading-[36px] 2xl:leading-[48px] text-global-1 whitespace-nowrap">
                      Everything Unfolds Here
                    </h2>
                    
                    {/* Description */}
                    <p className="text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] font-manrope font-light leading-[16px] md:leading-[17px] lg:leading-[18px] xl:leading-[20px] text-global-1 mt-[12px] lg:mt-[16px] whitespace-nowrap">
                      Access 1500+ Foundation Models, Ready for you
                    </p>
                    
                  {/* CTA Button */}
                  <Button
                    variant="primary"
                    size="medium"
                    className="rounded-[20px] lg:rounded-[22px] xl:rounded-[24px] px-6 py-[12px] lg:py-[14px] xl:py-[16px] text-sm lg:text-base font-semibold text-white w-fit mx-auto lg:mx-0 mt-[16px] lg:mt-[20px]"
                    onClick={() => {
                      const ctaSection = document.getElementById('cta-section');
                      if (ctaSection) {
                        ctaSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    Start Your Agentic Journey
                  </Button>
                  </div>
                  
                  {/* Right Image Container - 40% Desktop */}
                  <div className="md:col-span-4 flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-[250px] md:max-w-[300px] lg:max-w-[350px] xl:max-w-[400px] 2xl:max-w-[525px]">
                      {/* Main Image Card */}
                      <div className="relative bg-transparent rounded-[32px] overflow-hidden">
                        <AnimatePresence mode="wait">
                          <motion.img 
                            key={images[index]}
                            src={images[index]} 
                            alt="Hero related visual"
                            className="w-full h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] 2xl:h-[525px] object-cover"
                            style={{ 
                              borderRadius: '32px',
                              opacity: 1 
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.6 }}
                          />
                        </AnimatePresence>
                        {/* Overlay Content */}
                        {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                          <div className="text-white">
                            <h3 className="font-semibold text-sm mb-1">
                              Culture, Crafted with Pur...
                            </h3>
                            <div className="flex items-center justify-between">
                              <span className="text-xs opacity-90">Life at SNS Square</span>
                            </div>
                          </div>
                        </div> */}
                      </div>
                      {/* Indicator Bar - Only 3 dots */}
                      <div className="flex gap-2 mt-4 justify-center">
                        {[0, 1, 2].map((i) => (
                          <div
                            key={i}
                            className={`h-2 rounded-full transition-all duration-500 ${
                              i === (index % 3) ? "bg-[#064EE3] w-20 lg:w-24 xl:w-28" : "bg-[#d3ddf5] w-20 lg:w-24 xl:w-28 opacity-60"
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
        <div className="relative z-30 px-4 xs:px-5 sm:px-6 lg:px-8 py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="relative p-4 xs:p-5 sm:p-6 lg:p-12 xl:p-16 overflow-hidden rounded-xl lg:rounded-2xl" style={{ backgroundImage: "url('/images/Bgframe.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
              {/* Feature Cards Grid */}
              <div className="relative z-10 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-5 sm:gap-6 lg:gap-8">
                {/* Born Agentic Card */}
                <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg p-4 xs:p-5 sm:p-6 hover:shadow-xl transition-shadow h-auto sm:h-[240px] lg:h-[260px] flex flex-col">
                  <div className="bg-[#e6edfc] rounded-lg lg:rounded-xl p-3 xs:p-4 sm:p-4 w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 flex items-center justify-center">
                    <img src="/images/Frame.svg" alt="Born Agentic" className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-inter font-medium text-[#040404] mt-3">
                    Born Agentic
                  </h3>
                  <p className="text-xs xs:text-sm sm:text-sm font-manrope font-medium text-gray-600 mt-3 sm:mt-auto mb-3 xs:mb-4 sm:mb-[20px]">
                    Native to the era of autonomous AI.
                  </p>
                </div>
                
                {/* AI Engineering First Card */}
                <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg p-4 xs:p-5 sm:p-6 hover:shadow-xl transition-shadow h-auto sm:h-[240px] lg:h-[260px] flex flex-col">
                  <div className="bg-[#e6edfc] rounded-lg lg:rounded-xl p-3 xs:p-4 sm:p-4 w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 flex items-center justify-center">
                    <img src="/images/Frame_2.svg" alt="AI Engineering First" className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-inter font-medium text-[#040404] mt-3">
                    AI Engineering <br /> First
                  </h3>
                  <p className="text-xs xs:text-sm sm:text-sm font-manrope font-medium text-gray-600 mt-3 sm:mt-auto mb-3 xs:mb-4 sm:mb-[20px]">
                    Strong foundation in AI, data, and automation.
                  </p>
                </div>
                
                {/* Domain Versatility Card */}
                <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg p-4 xs:p-5 sm:p-6 hover:shadow-xl transition-shadow h-auto sm:h-[240px] lg:h-[260px] flex flex-col">
                  <div className="bg-[#e6edfc] rounded-lg lg:rounded-xl p-3 xs:p-4 sm:p-4 w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 flex items-center justify-center">
                    <img src="/images/Frame_3.svg" alt="Domain Versatility" className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-inter font-medium text-[#040404] mt-3">
                    Domain Versatility
                  </h3>
                  <p className="text-xs xs:text-sm sm:text-sm font-manrope font-medium text-gray-600 mt-3 sm:mt-auto mb-3 xs:mb-4 sm:mb-[20px]">
                    Solutions that adapt across industries.
                  </p>
                </div>
                
                {/* Outcome Obsession Card */}
                <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg p-4 xs:p-5 sm:p-6 hover:shadow-xl transition-shadow h-auto sm:h-[240px] lg:h-[260px] flex flex-col">
                  <div className="bg-[#e6edfc] rounded-lg lg:rounded-xl p-3 xs:p-4 sm:p-4 w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 flex items-center justify-center">
                    <img src="/images/Frame_4.svg" alt="Outcome Obsession" className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-inter font-medium text-[#040404] mt-3">
                    Outcome obsession
                  </h3>
                  <p className="text-xs xs:text-sm sm:text-sm font-manrope font-medium text-gray-600 mt-3 sm:mt-auto mb-3 xs:mb-4 sm:mb-[20px]">
                    Designed to deliver real impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Lock Component */}
        <div className='mx-auto'>
          <Lock/>
        </div>
        
        {/* Use Cases Section */}
        <div className="py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-4 xs:px-5 sm:px-6 lg:px-8">
          <div className="w-full mx-auto">
            {/* Background with decorative elements - full width */}
            <div className="relative bg-gradient-to-br from-blue-50 to-white rounded-xl lg:rounded-2xl overflow-hidden">
              {/* Decorative Background - full width */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-10"
                style={{ backgroundImage: "url('/images/BG.jpg')" }}
              />
              
              {/* Content Container - max width 1200px */}
              <div className="relative z-20 max-w-[320px] xs:max-w-[375px] sm:max-w-[425px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1200px] mx-auto pt-5 xs:pt-6 sm:pt-8 lg:pt-10 px-4 xs:px-5 sm:px-6">
                {/* Section Header */}
                <div className="mb-6 xs:mb-8 sm:mb-12 lg:mb-16">
                  <Button
                    variant="secondary"
                    size="small"
                    className="bg-[#ade5d3] text-[#040404] rounded-full px-4 xs:px-5 sm:px-6 py-2 xs:py-2.5 mb-5 xs:mb-6 sm:mb-8 lg:mb-10 text-xs xs:text-sm"
                    onClick={() => {}}
                  >
                    UseCases
                  </Button>
                  <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-manrope font-bold text-[#242424] leading-tight max-w-7xl">
                    From tech startups to global enterprises, our Agentic solutions adapt to any industry, helping leaders reimagine growth, efficiency, and customer experience.
                  </h2>
                </div>
                
                {/* Use Cases Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 lg:gap-8 mb-6 xs:mb-8 sm:mb-12 lg:mb-16">
                  {/* IT Development Lifecycle Card */}
                  <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg p-4 xs:p-5 sm:p-6 hover:shadow-xl transition-shadow">
                    <div className="bg-[#e6edfc] rounded-lg lg:rounded-xl p-3 xs:p-4 sm:p-4 w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-3 xs:mb-4 sm:mb-4">
                      <img src="/images/img_background_blue_800.svg" alt="IT Development" className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8" />
                    </div>
                    <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-sora font-semibold text-[#242424] mb-2 xs:mb-3 sm:mb-3">
                      IT Development Lifecycle
                    </h3>
                    <p className="text-xs xs:text-sm sm:text-[16px] font-inter text-black/80 mb-3 xs:mb-4 sm:mb-4">
                      Seamless, smart, and scalable Agentic AI powers the future of IT.
                    </p>
                    <div className="flex items-center text-[#3e57da] hover:text-[#064ee3] cursor-pointer transition-colors">
                      <span className="text-xs xs:text-sm sm:text-sm font-inter">Learn More</span>
                      <img src="/images/img_solar_arrow_up_linear.svg" alt="Arrow" className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 ml-2" />
                    </div>
                  </div>
                  
                  {/* Supply Chain Card */}
                  <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg p-4 xs:p-5 sm:p-6 hover:shadow-xl transition-shadow">
                    <div className="bg-[#e6edfc] rounded-lg lg:rounded-xl p-3 xs:p-4 sm:p-4 w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-3 xs:mb-4 sm:mb-4">
                      <img src="/images/img_frame.svg" alt="Supply Chain" className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8" />
                    </div>
                    <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-sora font-semibold text-[#242424] mb-2 xs:mb-3 sm:mb-3">
                      Supply Chain
                    </h3>
                    <p className="text-xs xs:text-sm sm:text-[16px] font-inter text-black/80">
                      From demand to delivery, every link learns, decides, and acts in real time
                    </p>
                  </div>
                  
                  {/* Healthcare Card */}
                  <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg p-4 xs:p-5 sm:p-6 hover:shadow-xl transition-shadow">
                    <div className="bg-[#e6edfc] rounded-lg lg:rounded-xl p-3 xs:p-4 sm:p-4 w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-3 xs:mb-4 sm:mb-4">
                      <img src="/images/img_frame_blue_800.svg" alt="Healthcare" className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8" />
                    </div>
                    <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-sora font-semibold text-[#242424] mb-2 xs:mb-3 sm:mb-3">
                      Healthcare
                    </h3>
                    <p className="text-xs xs:text-sm sm:text-[16px] font-inter text-black/80">
                      Partnering with hospitals to provide intelligent, personalized, and always-available healthcare solutions.
                    </p>
                  </div>
                  
                  {/* Insurance Card */}
                  <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg p-4 xs:p-5 sm:p-6 hover:shadow-xl transition-shadow">
                    <div className="bg-[#e6edfc] rounded-lg lg:rounded-xl p-3 xs:p-4 sm:p-4 w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-3 xs:mb-4 sm:mb-4">
                      <img src="/images/img_frame_blue_800_60x60.svg" alt="Insurance" className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8" />
                    </div>
                    <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-sora font-semibold text-[#242424] mb-2 xs:mb-3 sm:mb-3">
                      Insurance
                    </h3>
                    <p className="text-xs xs:text-sm sm:text-[16px] font-inter text-black/80">
                      40% faster bookings, predictive demand management, and personalised guest experiences.
                    </p>
                  </div>
                  
                  {/* Human Resource Card */}
                  <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg p-4 xs:p-5 sm:p-6 hover:shadow-xl transition-shadow">
                    <div className="bg-[#e6edfc] rounded-lg lg:rounded-xl p-3 xs:p-4 sm:p-4 w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-3 xs:mb-4 sm:mb-4">
                      <img src="/images/img_frame_60x60.svg" alt="Human Resource" className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8" />
                    </div>
                    <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-sora font-semibold text-[#242424] mb-2 xs:mb-3 sm:mb-3">
                      Human Resource
                    </h3>
                    <p className="text-xs xs:text-sm sm:text-[16px] font-inter text-black/80">
                      3× higher conversions using recommendation engines and customer intelligence.
                    </p>
                  </div>
                  
                  {/* Call to Action Card */}
                  <div className='flex flex-col justify-evenly max-w-full sm:max-w-[340px] gap-4 xs:gap-5 sm:gap-6'>
                    <h3 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-inter font-semibold leading-tight font-[600]">
                      Unlock Agentic AI Solutions for Your Industry.
                    </h3>
                    <Button
                      variant="primary"
                      size="medium"
                      className="rounded-full px-4 xs:px-5 sm:px-6 py-3 xs:py-3.5 text-xs xs:text-sm sm:text-base font-inter font-semibold text-white w-full sm:max-w-[250px] h-[40px] xs:h-[44px] sm:h-[48px] lg:h-[50px]"
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
        {/* <div className="py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gray-50/50 px-4 xs:px-5 sm:px-6 lg:px-8">
          <div className="max-w-[320px] xs:max-w-[375px] sm:max-w-[425px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1200px] mx-auto">
            <div className="mb-6 xs:mb-8 sm:mb-12">
              <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-sora font-semibold leading-tight">
                <span className="text-[#064ee3]">Beyond Code. <br /></span>
                <span className="text-[#242424]">Into impact with Agentic Solutions</span>
              </h2>
            </div>
          </div>
        </div>
      </div> */}
      
      {/* Lock Component */}
      {/* <div className='mx-auto'>
        <Lock/>
      </div> */}

      {/* Orbiting Circles Section */}
      

      {/* Use Cases Section */}
      <div className="py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-4 xs:px-5 sm:px-6 lg:px-8">
        <div className="w-full mx-auto">
          {/* Background with decorative elements - full width */}
          <div className="relative bg-gradient-to-br from-blue-50 to-white rounded-xl lg:rounded-2xl overflow-hidden">
            {/* Decorative Background - full width */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-10"
              style={{ backgroundImage: "url('/images/BG.jpg')" }}
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 xs:gap-6 sm:gap-8 lg:gap-8">
              {/* Main Solution Card */}
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-b from-white via-blue-50/50 to-blue-100 
                    border border-gray-200 rounded-xl lg:rounded-2xl 
                    pt-5 pl-5 xs:pt-6 xs:pl-6 sm:pt-8 sm:pl-8 lg:pt-10 lg:pl-10 xl:pt-12 xl:pl-12 
                    pr-0 pb-0
                    h-full flex flex-col justify-between">  
                  <div className="space-y-4 xs:space-y-5 sm:space-y-6">
                    <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-manrope font-bold text-[#242424] leading-tight max-w-xl">
                      Redefining Solutions in the Agentic Era
                    </h3>
                    <p className="text-xs xs:text-sm sm:text-base lg:text-lg font-inter text-[#242424]/70 leading-relaxed max-w-xl">
                      We do not build with old playbooks. We engineer with AI-first principles to solve the problems that truly matter.
                    </p>
                  </div>
                  <div className="flex justify-end pt-5 xs:pt-6 sm:pt-8">
                    <img 
                      src="/images/image_11.png" 
                      alt="Solutions Illustration" 
                      className="w-full max-w-[180px] xs:max-w-[200px] sm:max-w-[240px] lg:max-w-[280px] h-auto object-cover rounded-lg lg:rounded-xl"
                    />
                  </div>
                </div>
              </div>
              
              {/* Feature Cards Column */}
              <div className="space-y-4 xs:space-y-5 sm:space-y-6 flex flex-col justify-center">
                {/* Innovation at Core */}
                <div className="bg-[#EEF8FF] rounded-xl lg:rounded-2xl p-4 xs:p-5 sm:p-6 lg:p-8 xl:p-10 relative overflow-hidden">
                    {/* Text Section */}
                    <div className="relative z-10 max-w-lg">
                      <h4 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-manrope font-bold text-[#040404] mb-3 xs:mb-4 sm:mb-4">
                        Innovation at Core
                      </h4>
                      <p className="text-xs xs:text-sm sm:text-sm lg:text-base font-inter text-[#242424]/70 leading-relaxed">
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
                <div className="bg-[#FBEAFF] rounded-xl lg:rounded-2xl pt-0 pr-0 pb-4 pl-4 xs:pb-5 xs:pl-5 sm:pb-6 sm:pl-6 lg:pb-8 lg:pl-8 xl:pb-10 xl:pl-10">
                  <img 
                    src="/images/engine_start.png" 
                    alt="Solutions Illustration" 
                    className="w-14 xs:w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-auto object-cover rounded-lg lg:rounded-xl mx-auto mb-0 mr-0"
                  />
                  <h4 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-manrope font-bold text-[#040404] mb-3 xs:mb-4 sm:mb-4">
                    AI-Only Engineering
                  </h4>
                  <p className="text-xs xs:text-sm sm:text-sm lg:text-base font-inter text-[#242424]/70 leading-relaxed">
                    We do not build with old playbooks. We engineer with AI-first principles to solve the problems that truly matter.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  };

  export default Home;
