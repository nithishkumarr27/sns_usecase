import React from 'react'
import Button from '../../components/ui/Button'
import EditText from '../../components/ui/EditText'

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

const CategoriesAgents = () => {
  return (
    <div>
      <div className="flex flex-col gap-[29px] sm:gap-[58px] justify-start items-center w-full max-w-[618px] sm:max-w-[1230px] mx-auto">
          {/* Agent Categories Section */}
          <div className="flex flex-col gap-[31px] sm:gap-[62px] justify-start items-center w-full">
            {/* Category Buttons and Description */}
            <div className="flex flex-col gap-[16px] sm:gap-[32px] justify-start items-center w-full">
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
  )
}

export default CategoriesAgents
