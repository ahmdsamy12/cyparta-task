import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { BiShoppingBag } from "react-icons/bi";
import { MdOutlineMailOutline } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { useEffect, useState } from "react";
import { getProfile } from "@/api";

const ProfileHeader = ({ setShowModal }) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getProfile(setProfile);
  }, []);
  return (
    <>
      <div className="mb-6">
        <div className="flex items-center gap-2 my-4 font-semibold text-[16px]">
          <h3>Employees </h3>
          <IoIosArrowForward />
          <h3>Profile</h3>
        </div>
        <div className="flex items-center justify-between ">
          <div className="user-info flex items-center gap-4">
            <Image
              src={profile?.image || "/user.png"}
              alt="user"
              width={100}
              height={100}
            />
            <div>
              <h3 className="font-semibold text-[24px] mb-2">
                {profile?.name || "Full Name"}
              </h3>
              <p className="flex items-center gap-2 text-[#16151C]">
                <BiShoppingBag />
                {profile?.bio || "Bio"}
              </p>
              <p className="flex items-center gap-2 text-[#16151C]">
                <MdOutlineMailOutline />
                {profile?.email || "test@example.com"}
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 bg-[#242223] mt-10 text-white px-4 py-2 rounded-md"
          >
            <AiFillEdit />
            Edit Profile
          </button>
        </div>
      </div>

      <hr />
    </>
  );
};

export default ProfileHeader;
