import React, { useState } from 'react';
import Button from '../components/ui/Button';
import EditText from '../components/ui/EditText';


const AgentWorkbench = () => {
  const [selectedCategory, setSelectedCategory] = useState('Document & Knowledge Management');
  const [menuOpen, setMenuOpen] = useState(false);

  const categories = [
    'Document & Knowledge Management',
    'Summarization & Content Handling',
    'Business Intelligence & Analysis',
    'Compliance & Security'
  ];

  const agentCards = [
    {
      id: 1,
      title: 'Summarization & Content Handling',
      description: 'Increased conversion by 32% with adaptive shopping agents'
    },
    {
      id: 2,
      title: 'Summarization & Content Handling',
      description: 'Increased conversion by 32% with adaptive shopping agents'
    },
    {
      id: 3,
      title: 'Summarization & Content Handling',
      description: 'Increased conversion by 32% with adaptive shopping agents'
    },
    {
      id: 4,
      title: 'Summarization & Content Handling',
      description: 'Increased conversion by 32% with adaptive shopping agents'
    }
  ];

  return (
    <div className="flex flex-col gap-[35px] sm:gap-[70px] justify-start items-center w-full bg-global-2">
      {/* Hero Section */}
      <div className="flex flex-col gap-[19px] sm:gap-[38px] justify-start items-center w-full">
        {/* Hero Background Stack */}
        <div className="relative w-full h-[218px] sm:h-[436px] flex justify-center items-center bg-cover bg-center bg-no-repeat" style = {{backgroundImage: "url('images/bg-hero.png')"}} >
          {/* Background Ellipse */}
          {/* <img 
            src="/images/images/img_ellipse_54.png" 
            alt="background ellipse" 
            className="absolute w-[235px] h-[138px] sm:w-[470px] sm:h-[276px] left-[242px] sm:left-[485px] top-0"
          /> */}
          {/* Hero Content */}
          <div className="flex flex-col gap-[1px] sm:gap-[2px] justify-start items-start mb-[35px] sm:mb-[70px] z-10">
            <h1 className="text-[27px] sm:text-[54px] font-bold leading-[37px] sm:leading-[74px] text-center text-global-2 font-manrope">
              <span className="text-global-2">SNS </span>
              <span className="text-[#064EE3]">AGENTIC AI MARKETPLACE</span>
            </h1>
            <h2 className="text-[22px] sm:text-[44px] font-bold leading-[30px] sm:leading-[61px] text-center text-global-2 font-manrope">
              <span className="text-global-2">Explore</span>
              <span>
                <span className="text-[#064EE3]">1500+ </span>
                <span className="text-global-4">Ready-to-Use AI Agents</span>
              </span>
            </h2>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col gap-[29px] sm:gap-[58px] justify-start items-center w-full max-w-[615px] sm:max-w-[1230px] mx-auto">
          {/* Agent Categories Section */}
          <div className="flex flex-col gap-[31px] sm:gap-[62px] justify-start items-center w-full">
            {/* Category Buttons and Description */}
            <div className="flex flex-col gap-[16px] sm:gap-[32px] justify-start items-center w-full">
              {/* Category Toggle Buttons */}
              <div className="flex flex-row gap-[11px] sm:gap-[22px] justify-center items-center w-auto">
                <Button 
                  variant="primary"
                  size="medium"
                  className="text-[14px] sm:text-[16px] font-semibold leading-[18px] sm:leading-[20px] text-global-8 font-inter rounded-[26px] text-white px-[12px] sm:px-[24px] py-[7px] sm:py-[14px] bg-[linear-gradient(90deg, #064EE3 0%, #3D76EC 100%)];
"
                  onClick={() => {}}
                >
                  Foundation Agents
                </Button>
                <Button 
                  variant="outline"
                  size="medium"
                  className="text-[14px] sm:text-[16px] font-semibold leading-[18px] sm:leading-[20px] text-global-5 font-inter rounded-[26px] px-[12px] sm:px-[24px] py-[7px] sm:py-[14px] border border-[Blue] bg-global-2"
                  onClick={() => {}}
                >
                  Industry-Specific Agents
                </Button>
              </div>

              {/* Foundational Categories Description */}
              <div className="flex flex-row gap-[8px] sm:gap-[16px] justify-center items-center w-full">
                <div className="bg-global-1 rounded-[16px] p-[10px] sm:p-[20px] w-[50px] sm:w-[100px] h-[50px] sm:h-[100px] flex justify-center items-center">
                  <img 
                    src="/images/BackgroundAWP.png" 
                    alt="foundational icon" 
                    className="w-[30px] h-[30px] sm:w-[60px] sm:h-[60px]"
                  />
                </div>
                <div className="flex flex-col gap-[3px] sm:gap-[6px] justify-start items-start flex-1">
                  <h3 className="text-[18px] sm:text-[22px] font-semibold leading-[23px] sm:leading-[28px] text-global-5 font-sora">
                    Foundational Categories
                  </h3>
                  <p className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-global-5 font-sora">
                    Task-focused building blocks for extraction, summarization, routing, and orchestration.
                  </p>
                </div>
              </div>
            </div>

            {/* Categories and Agent Cards Section */}
            <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-8 lg:gap-0">
              {/* Left Sidebar - Categories */}
              <div className="flex flex-col gap-[16px] sm:gap-[32px] justify-start items-center w-full lg:w-[30%]">
                {/* Categories Header */}
                <div className="flex flex-col gap-[3px] sm:gap-[6px] justify-start items-start w-full">
                  <h3 className="text-[18px] sm:text-[22px] font-semibold leading-[23px] sm:leading-[28px] text-global-5 font-sora">
                    Categories
                  </h3>
                  <p className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[21px] text-global-3 font-sora mb-[3px] sm:mb-[6px]">
                    Browse relevant agents
                  </p>
                </div>

                {/* Search Input */}
                <EditText 
                  placeholder="Search"
                  leftIcon={{
                    src: "/images/img_icon.svg",
                    width: 20,
                    height: 20
                  }}
                  className="w-full text-[18px] sm:text-[20px] font-normal leading-[22px] sm:leading-[24px] text-edittext-1 font-roboto rounded-[10px] px-[35px] sm:px-[70px] py-[12px] sm:py-[24px] bg-edittext-1"
                  onChange={() => {}}
                />

                {/* Category List */}
                <div className="flex flex-row gap-[12px] sm:gap-[24px] justify-start items-center w-full">
                  <div className="flex flex-col gap-[12px] sm:gap-[24px] justify-start items-center w-full">
                    {/* Expanded Category */}
                    <div className="flex flex-col gap-[12px] sm:gap-[24px] justify-start items-center w-full bg-global-1 rounded-[16px] p-[12px] sm:p-[24px]">
                      {/* Category Header with Arrow */}
                      <div className="flex justify-center items-center w-full h-[24px] sm:h-[48px] relative">
                        <span className="text-[16px] sm:text-[18px] font-semibold leading-[20px] sm:leading-[24px] text-global-4 font-manrope w-full">
                          Document & Knowledge Management
                        </span>
                        <img 
                          src="/images/img_weui_arrow_outlined.svg" 
                          alt="arrow" 
                          className="w-[12px] h-[6px] sm:w-[24px] sm:h-[12px] absolute right-[4px] sm:right-[8px]"
                        />
                      </div>

                      {/* Sub-categories */}
                      <Button 
                        variant="secondary"
                        className="text-[12px] sm:text-[14px] font-normal leading-[15px] sm:leading-[17px] text-global-5 font-inter rounded-[12px] px-[8px] sm:px-[16px] py-[8px] sm:py-[16px] bg-global-2 w-full text-center mr-[4px] sm:mr-[8px]"
                        onClick={() => {}}
                      >
                        Document & Knowledge Management
                      </Button>

                      <div className="flex flex-row justify-center items-center w-auto px-[8px] sm:px-[16px] py-[8px] sm:py-[16px]">
                        <span className="text-[12px] sm:text-[14px] font-normal leading-[15px] sm:leading-[17px] text-global-5 font-inter">
                          Summarization & Content Handling
                        </span>
                      </div>

                      <div className="flex flex-row justify-start items-center w-full px-[8px] sm:px-[16px] py-[8px] sm:py-[16px]">
                        <span className="text-[12px] sm:text-[14px] font-normal leading-[15px] sm:leading-[17px] text-global-5 font-inter">
                          Business Intelligence & Analysis
                        </span>
                      </div>

                      <div className="flex flex-row justify-start items-center w-full px-[9px] sm:px-[18px] py-[8px] sm:py-[16px]">
                        <span className="text-[12px] sm:text-[14px] font-normal leading-[15px] sm:leading-[17px] text-global-5 font-inter">
                          Compliance & Security
                        </span>
                      </div>
                    </div>

                    {/* Collapsed Categories */}
                    <div className="flex flex-row justify-start items-center w-full px-[12px] sm:px-[24px] py-[12px] sm:py-[24px]">
                      <div className="flex flex-row justify-center items-center w-full">
                        <span className="text-[16px] sm:text-[18px] font-normal leading-[20px] sm:leading-[24px] text-global-1 font-sora w-[88%]">
                          Summarization & Content Handling
                        </span>
                        <img 
                          src="/images/img_weui_arrow_outlined_black_900_01.svg" 
                          alt="arrow" 
                          className="w-[12px] h-[6px] sm:w-[24px] sm:h-[12px]"
                        />
                      </div>
                    </div>

                    <div className="flex flex-row gap-[5px] sm:gap-[10px] justify-center items-center w-auto px-[12px] sm:px-[24px] py-[12px] sm:py-[24px]">
                      <span className="text-[16px] sm:text-[18px] font-normal leading-[20px] sm:leading-[23px] text-global-1 font-sora">
                        Communication & Assistance
                      </span>
                      <img 
                        src="/images/img_weui_arrow_outlined_black_900_01.svg" 
                        alt="arrow" 
                        className="w-[12px] h-[6px] sm:w-[24px] sm:h-[12px]"
                      />
                    </div>
                  </div>

                  {/* Vertical Divider */}
                  <img 
                    src="/images/img_group_4.svg" 
                    alt="divider" 
                    className="w-[1px] h-[289px] sm:w-[2px] sm:h-[578px]"
                  />
                </div>
              </div>

              {/* Right Content - Agent Cards */}
              <div className="flex flex-col gap-[12px] sm:gap-[24px] w-full lg:w-[70%] ml-0 lg:ml-[32px] sm:ml-[64px]">
                {agentCards?.map((card) => (
                  <div key={card?.id} className="flex flex-row justify-center items-center w-full shadow-[0px_1px_8px_#10182814] sm:shadow-[0px_2px_16px_#10182814] bg-global-2 rounded-[24px] p-[8px] sm:p-[16px]">
                    <div className="flex flex-row justify-center items-center w-full">
                      {/* Card Icon */}
                      <div className="w-[53px] h-[29px] sm:w-[106px] sm:h-[58px] bg-global-1 rounded-[8px]"></div>
                      
                      {/* Card Content */}
                      <div className="flex flex-col justify-start items-start w-full ml-[6px] sm:ml-[12px]">
                        {/* Title and Read more in same row */}
                        <div className="flex flex-row justify-between items-center w-full mb-[6px] sm:mb-[12px]">
                          <h4 className="text-[18px] sm:text-[22px] font-semibold leading-[23px] sm:leading-[28px] text-global-5 font-sora">
                            {card?.title}
                          </h4>
                          <a 
                            href="#" 
                            className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[20px] text-global-7 font-inter text-[#3E57DA]"
                          >
                            Read more
                          </a>
                        </div>
                        {/* Description */}
                        <p className="text-[14px] sm:text-[16px] font-normal leading-[18px] sm:leading-[20px] text-global-6 font-inter w-full">
                          {card?.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>   
        </div>
      </div>
    </div>
  );
};

export default AgentWorkbench;