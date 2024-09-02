// components/DashboardLayout.js
"use client";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { redirect } from "next/navigation";
import Modal from "./Modal";
import { useState } from "react";

const DashboardLayout = ({ children }) => {
  //use token to protected this and navigate to login page
  const token = localStorage.getItem("token");
  if (!token) {
    return redirect("/login");
  }

  return (
    <>
      <div className="flex p-4 bg-[#F9F9F9]">
        <Sidebar />
        <div className="ml-[329px] w-full bg-[#F9F9F9] h-screen">
          <Header />
          <div className="p-4">{children}</div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
