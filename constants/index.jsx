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

export const personalContent = [
  {
    heading1: "First Name",
    subTitle1: "Mariam",
    heading2: "Last Name",
    subTitle2: "Aly",
  },
  {
    heading1: "Mobile Number",
    subTitle1: "010567240256",
    heading2: "Email Address",
    subTitle2: "mariam@gmail.com",
  },
  {
    heading1: "Date of Birth",
    subTitle1: "12/12/1998",
    heading2: "Marital Status",
    subTitle2: "Single",
  },
  {
    heading1: "Gender",
    subTitle1: "Female",
    heading2: "Nationality",
    subTitle2: "Egypt",
  },
  {
    heading1: "Address",
    subTitle1: "Maadi",
    heading2: "City",
    subTitle2: "Cairo",
  },
  {
    heading1: "State",
    subTitle1: "Cairo",
    heading2: "Zip Code",
    subTitle2: "35624",
  },
  {
    heading1: "Work’s hours",
    subTitle1: "180 hour",
    heading2: "Salary/hour",
    subTitle2: "300 EGP",
  },
];
