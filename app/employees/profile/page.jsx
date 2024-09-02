"use client";

import DashboardLayout from "@/components/DashboardLayout";
import Modal from "@/components/Modal";
import ProfileHeader from "@/components/ProfileHeader";
import ProfileTabs from "@/components/ProfileTabs";
import React from "react";

const Profile = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <DashboardLayout>
      <ProfileHeader setShowModal={setShowModal} />
      <ProfileTabs />
      {showModal && <Modal setShowModal={setShowModal} />}
    </DashboardLayout>
  );
};

export default Profile;
