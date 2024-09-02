"use client";

import axios from "axios";

export const getProfile = async (setProfile) => {
  try {
    const accessToken = localStorage.getItem("token");

    if (!accessToken) {
      throw new Error("No access token found");
    }

    const profileResponse = await axios.get(
      "https://cyparta-backend-gf7qm.ondigitalocean.app/api/profile/",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (profileResponse.status === 200) {
      setProfile(profileResponse.data);
    } else {
      console.log("Failed to retrieve profile information.");
    }
  } catch (err) {
    console.error("Error fetching profile:", err);
  }
};
