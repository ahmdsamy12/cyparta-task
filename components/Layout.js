import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen p-4 w-full">
      {/* Sidebar */}
      <div className=" bg-[#F9F9F9] fixed h-full rounded-3xl shadow-2xl w-[329px]">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="w-[200px]">
        {/* Header */}
        <header className="bg-gray-100 text-gray-800 fixed  flex items-center justify-between px-6 py-4 shadow-md z-10">
          <div className="text-xl font-semibold">Header</div>
          <div>User Profile</div>
        </header>

        {/* Children (Page Content) */}
        <main className="mt-16 p-6">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
