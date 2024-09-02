"use client";
import { getProfile } from "@/api";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";

// components/Header.js
const Header = () => {
  const [profile, setProfile] = useState(null);
  const [showBtn, setShowBtn] = useState(false);
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  useEffect(() => {
    getProfile(setProfile);
  }, []);
  return (
    <div className="flex justify-end items-center gap-4 ">
      <div className="w-[50px] h-[50px] rounded-md bg-[#A2A1A833] flex items-center justify-center">
        <IoMdNotificationsOutline size={25} />
      </div>
      <Image
        src={profile?.image || "/user.png"}
        alt={profile?.name || "user"}
        width={50}
        height={50}
        className="rounded-full"
        onMouseEnter={() => setShowBtn((prev) => !prev)}
      />
      {showBtn && (
        <button
          onClick={logout}
          className="text-white px-4 py-2 rounded-md bg-[#212121]"
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Header;
