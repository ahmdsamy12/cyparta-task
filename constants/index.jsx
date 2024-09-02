import PersonalInfo from "@/components/PersonalInfo";
import { FaUser } from "react-icons/fa";
import { BiShoppingBag } from "react-icons/bi";
import { MdOutlineAccountBox, MdOutlineDocumentScanner } from "react-icons/md";

export const tabData = [
  {
    title: (
      <div className="flex items-center gap-2">
        <FaUser />
        <h2>Personal Information</h2>
      </div>
    ),
    content: <PersonalInfo />,
  },
  {
    title: (
      <div className="flex items-center gap-2">
        <BiShoppingBag />
        <h2>Professional Information</h2>
      </div>
    ),
    content: (
      <div>
        <h2>Professional Information</h2>
        <p>Job Title: UX/UI Designer</p>
        <p>Department: Design</p>
        <p>Hire Date: 12/12/2021</p>
      </div>
    ),
  },
  {
    title: (
      <div className="flex items-center gap-2">
        <MdOutlineDocumentScanner />
        <h2>Documents</h2>
      </div>
    ),
    content: (
      <div>
        <h2>Documents</h2>
        <p>ID Card: ID-123456</p>
        <p>Passport: PASS-789012</p>
      </div>
    ),
  },

  {
    title: (
      <div className="flex items-center gap-2">
        <MdOutlineAccountBox />
        <h2>Account Access</h2>
      </div>
    ),
    content: (
      <div>
        <h2>Account Access</h2>
        <p>Username: mariam</p>
        <p>Password: **********</p>
      </div>
    ),
  },
];
