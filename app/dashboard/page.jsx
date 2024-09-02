import DashboardLayout from "@/components/DashboardLayout";
import React from "react";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="text-2xl font-bold">User Profile</div>
      <p className="mt-4">This is the user profile page.</p>
    </DashboardLayout>
  );
};

export default Dashboard;
