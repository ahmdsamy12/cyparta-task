"use client";

import { tabData } from "@/constants";
import { useState } from "react";

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tabs w-full mx-auto mt-8 relative">
      <div className="tab-titles flex border-b ">
        {tabData.map((tab, index) => (
          <button
            key={index}
            className={`tab-title px-4 py-2 cursor-pointer ${
              activeTab === index
                ? "border-b-2 border-[#EC232B] text-[#EC232B]"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tab-content p-4 border border-t-0">
        {tabData[activeTab].content}
      </div>
      {activeTab === 0 && (
        <div className="salary absolute bottom-6 right-3">
          <span className="text-[#EE232F]">Total Salary</span>
          <h3>54000 EGP</h3>
        </div>
      )}
    </div>
  );
};

export default ProfileTabs;
