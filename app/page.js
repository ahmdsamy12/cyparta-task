import DashboardLayout from "@/components/DashboardLayout";
import Layout from "@/components/Layout";
import React from "react";

const Home = () => {
  return (
    <>
      <DashboardLayout>
        <div className="text-2xl font-bold">Welcome to the Dashboard</div>
        <p className="mt-4">This is the main content area.</p>
      </DashboardLayout>
    </>
  );
};

export default Home;
