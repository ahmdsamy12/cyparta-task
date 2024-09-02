import { getProfile } from "@/api";
import axios from "axios";
import React, { useEffect, useState } from "react";

const PersonalInfo = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getProfile(setProfile);
  }, []);

  const personalContent = [
    {
      heading1: "First Name",
      subTitle1: profile?.first_name || "first name",
      heading2: "Last Name",
      subTitle2: profile?.last_name || "last name",
    },
    {
      heading1: "Mobile Number",
      subTitle1: profile?.phone || "01254544445454",
      heading2: "Email Address",
      subTitle2: profile?.email || "test@example.com",
    },
    {
      heading1: "Date of Birth",
      subTitle1: "12/12/1998",
      heading2: "Marital Status",
      subTitle2: "Single",
    },
    {
      heading1: "Gender",
      subTitle1: "male",
      heading2: "Nationality",
      subTitle2: "Egypt",
    },
    {
      heading1: "Address",
      subTitle1: "Maadi",
      heading2: "City",
      subTitle2: "Cairo",
    },
    {
      heading1: "State",
      subTitle1: "Cairo",
      heading2: "Zip Code",
      subTitle2: "35624",
    },
    {
      heading1: "Work’s hours",
      subTitle1: "180 hour",
      heading2: "Salary/hour",
      subTitle2: "300 EGP",
    },
  ];

  return (
    <div className="mb-2">
      {personalContent.map((item) => (
        <div
          className="info flex items-center justify-between mb-2"
          key={item.heading1}
        >
          <div className="border-b w-[48%] pb-2">
            <span className="text-[#A2A1A8]">{item.heading1}</span>
            <h2 className="text-[#16151C] font-medium text-[16px]">
              {item.subTitle1}
            </h2>
          </div>

          <div className="border-b w-[48%] pb-2">
            <span className="text-[#A2A1A8]">{item.heading2}</span>
            <h2 className="text-[#16151C] font-medium text-[16px]">
              {item.subTitle2}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PersonalInfo;
