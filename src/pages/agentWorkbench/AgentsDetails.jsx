// src/pages/Agents/AgentDetails.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import agentsData from "../../../public/data/agentsData"; // adjust path if needed
import lockImage from "../../../public/icons/Group.png";

export default function AgentDetails() {
  const { category, categoryId, subcategoryId, agentId } = useParams();
  const [showSignup, setShowSignup] = useState(false);
  const [activeSection, setActiveSection] = useState("About This Agent");
  const [isSignedIn, setIsSignedIn] = useState(false);

  // Sidebar items: map all locked ones to "locked" id
  const sidebarItems = [
    { id: "about", label: "About This Agent" },
    { id: "locked", label: "Core Capabilities" },
    { id: "locked", label: "Perfect For" },
    { id: "locked", label: "How It Works" },
  ];

  // Get agent data
  const categoryData =
    category === "foundational"
      ? agentsData.foundational
      : agentsData.industry;

  const selectedCategory = categoryData.find((cat) => cat.id === categoryId);

  const selectedSubcategory =
    subcategoryId && selectedCategory?.subCategories
      ? selectedCategory.subCategories.find((sub) => sub.id === subcategoryId)
      : null;

  const selectedAgent = selectedSubcategory
    ? selectedSubcategory.agents.find((agent) => agent.id === agentId)
    : selectedCategory?.agents?.find((agent) => agent.id === agentId);

  if (!selectedAgent) {
    return (
      <div className="p-10 text-center text-red-600 font-semibold">
        Agent not found 🚫
      </div>
    );
  }

  // Smooth scroll
  const handleNavClick = (sectionId, label) => {
    setActiveSection(label);
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      className="min-h-screen w-full mt-25 p-1"
      style={{
                 background: 'linear-gradient(180deg, #aab6e240 0px, #c2cce730 100px, #ffffffff 200px)'
            }}
    >
      <div className="flex flex-col lg:flex-row ml-40">
        {/* Sidebar */}
        <aside className="hidden lg:block lg:w-72 lg:sticky lg:top-12 p-4 ml-50 mt-5">
          <div className="flex flex-col w-full lg:sticky  items-start gap-2">
            {sidebarItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(item.id, item.label)}
                className={`flex items-center justify-start gap-2.5 pl-4 pr-6 py-5 md:py-7 w-full rounded-2xl transition-all duration-500 ${
                  activeSection === item.label
                    ? "bg-white shadow-sm"
                    : "bg-transparent hover:bg-white hover:bg-opacity-50"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className={`font-semibold text-base md:text-lg ${
                    activeSection === item.label
                      ? "text-gray-900"
                      : "text-gray-600"
                  }`}
                >
                  {item.label}
                </div>
              </button>
            ))}
          </div>
        </aside>

        {/* Mobile Tabs */}
        <div className="lg:hidden mb-6">
          <div className="flex overflow-x-auto space-x-4 no-scrollbar px-2">
            {sidebarItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(item.id, item.label)}
                className={`flex-shrink-0 px-4 py-2 rounded-xl transition-all ${
                  activeSection === item.label
                    ? "bg-white shadow-sm text-gray-900 font-semibold"
                    : "bg-gray-100 text-gray-600 hover:bg-white"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="container w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-12">
            {/* Header */}
            <div className="lg:mb-12">
              <div className="flex items-center mb-2">
                <span className="text-xs font-semibold px-3 py-1 text-black tracking-wider bg-green-200 rounded-full">
                  Active Agent
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-4">
                {selectedAgent.name}
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl">
                {selectedAgent.summary}
              </p>
            </div>

            {/* Agent Image */}
            {selectedAgent.image && (
              <div className="mb-10 w-full bg-pink ">
                <div className="w-full max-w-6xl">
                  <div className="relative w-full h-64 md:h-96">
                    <img
                      src={selectedAgent.image}
                      alt={selectedAgent.name}
                      className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* About */}
            <div id="about" className="mb-40">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                About This Agent
              </h2>
              <p className="text-gray-600 mb-8">{selectedAgent.summary}</p>
            </div>

            {/* Common Locked Section */}
            <div id="locked" className="relative mb-10">
              <div className={`${!isSignedIn ? "blur-sm pointer-events-none" : ""}`}>
                {/* Core Capabilities */}
                {selectedAgent.solutions && (
                  <div className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      Core Capabilities
                    </h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      {selectedAgent.solutions.map((sol, idx) => (
                        <li key={idx}>{sol}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Perfect For */}
                {selectedAgent.useCases && (
                  <div className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      Perfect For
                    </h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      {selectedAgent.useCases.map((useCase, idx) => (
                        <li key={idx}>{useCase}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Overlay */}
              {!isSignedIn && (
                <div className="absolute inset-0 bg-opacity-80 w-[80%] rounded-lg">
                  <div className="relative z-10 flex flex-col items-center justify-center text-center">
                    <div className="w-20 h-20 mx-auto mb-6">
                      <img src={lockImage} alt="Lock" />
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                      Unlock the full power of Agents with one quick sign-up.
                    </h2>
                    <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                      Every mission needs more Agents. Unlock yours with sign-up.
                    </p>
                    <button
                      onClick={() => setShowSignup(true)}
                      className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-blue-700 transform hover:scale-105 shadow-lg"
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
