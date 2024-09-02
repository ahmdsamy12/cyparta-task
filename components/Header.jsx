"use client";
import { getProfile } from "@/api";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";

// components/Header.js
const Header = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getProfile(setProfile);
  }, []);
  return (
    <div className="flex justify-end items-center gap-4 ">
      <div className="w-[50px] h-[50px] rounded-md bg-[#A2A1A833] flex items-center justify-center">
        <IoMdNotificationsOutline size={25} />
      </div>
      <Image
        src={profile?.image}
        alt={profile?.name}
        width={50}
        height={50}
        className="rounded-full"
      />
    </div>
  );
};

export default Header;
