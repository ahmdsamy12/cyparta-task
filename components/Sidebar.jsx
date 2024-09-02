// "use client";

// import Image from "next/image";
// import { MdOutlinePayments, MdOutlineSpaceDashboard } from "react-icons/md";
// import { TbUsersGroup } from "react-icons/tb";
// import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
// import { CiDollar, CiUser } from "react-icons/ci";
// import { PiCalendarCheckLight } from "react-icons/pi";
// import { GrNotes } from "react-icons/gr";
// import { LiaNotesMedicalSolid } from "react-icons/lia";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState } from "react";

// const Sidebar = () => {
//   const pathname = usePathname();
//   const [showMenu, setShowMenu] = useState(false);

//   return (
//     <div className="h-screen bg-[#F9F9F9] text-[#242223] fixed md:w-[329px] rounded-3xl flex flex-col items-center shadow-2xl">
//       <div className="logo w-full">
//         <Image
//           src={"/logo.png"}
//           alt="logo"
//           width={225}
//           height={102}
//           className="my-10 mx-auto"
//         />
//       </div>
//       <ul className="w-full">
//         <li
//           className={`p-4 ${
//             pathname === "/dashboard"
//               ? "bg-[#F9EAEB] before:absolute before:w-[5px] before:h-full before:bg-[#EC232B] before:rounded-3xl before:top-0 before:left-0 rounded-r-3xl text-[#EC232B]"
//               : ""
//           } flex items-center gap-2 w-full justify-center relative`}
//         >
//           <MdOutlineSpaceDashboard className="font-semibold" size={20} />

//           <Link href="/dashboard" className="font-medium text-[16px] w-[85px]">
//             Dashboard
//           </Link>
//         </li>

//         <li
//           onClick={() => {
//             return setShowMenu((prev) => !prev);
//           }}
//           className={`p-4 ${
//             showMenu
//               ? "bg-[#F9EAEB] before:absolute before:w-[5px] before:h-full before:bg-[#EC232B] before:rounded-3xl before:top-0 before:left-0 rounded-r-3xl text-[#EC232B]"
//               : ""
//           } flex items-center gap-2 w-full justify-center relative`}
//         >
//           <TbUsersGroup className="font-semibold" size={20} />

//           <Link
//             href="/employees/profile"
//             className="font-medium text-[16px] w-[85px]"
//           >
//             Employees
//           </Link>

//           {showMenu ? (
//             <IoIosArrowDown className=" absolute top-5 text-[20px] right-3 cursor-pointer" />
//           ) : (
//             <IoIosArrowForward className=" absolute top-5 text-[20px] right-3 cursor-pointer" />
//           )}
//         </li>
//         {showMenu && (
//           <ul className="flex flex-col gap-2 w-full   pl-5">
//             <li className="mt-5">
//               <Link
//                 href="/employees/profile"
//                 className={`font-normal text-[16px] flex items-center justify-center gap-2 ${
//                   pathname === "/employees/profile" && "text-[#7B7B7B]"
//                 }`}
//               >
//                 <CiUser size={20} />
//                 Profile
//               </Link>
//             </li>

//             <li className="mt-1 pl-10">
//               <Link
//                 href="/employees/attendance"
//                 className="font-normal text-[16px] flex justify-center gap-2 focus:text-[#7B7B7B]"
//               >
//                 <PiCalendarCheckLight size={20} />
//                 Attendance
//               </Link>
//             </li>

//             <li className="mt-1">
//               <Link
//                 href="/employees/tasks"
//                 className="font-normal text-[16px] flex items-center justify-center gap-2 focus:text-[#7B7B7B]"
//               >
//                 <GrNotes size={20} />
//                 Tasks
//               </Link>
//             </li>
//           </ul>
//         )}

//         <li
//           className={`p-4 ${
//             pathname === "/payroll"
//               ? "bg-[#F9EAEB] before:absolute before:w-[5px] before:h-full before:bg-[#EC232B] before:rounded-3xl before:top-0 before:left-0 rounded-r-3xl text-[#EC232B]"
//               : ""
//           } flex items-center gap-2 w-full justify-center relative`}
//         >
//           <CiDollar className="font-semibold" size={25} />

//           <Link href="/payroll" className="font-medium text-[16px] w-[85px]">
//             Payroll
//           </Link>
//         </li>

//         <li
//           className={`p-4 ${
//             pathname === "/holidays"
//               ? "bg-[#F9EAEB] before:absolute before:w-[5px] before:h-full before:bg-[#EC232B] before:rounded-3xl before:top-0 before:left-0 rounded-r-3xl text-[#EC232B]"
//               : ""
//           } flex items-center gap-2 w-full justify-center relative`}
//         >
//           <LiaNotesMedicalSolid className="font-semibold" size={20} />

//           <Link href="/holidays" className="font-medium text-[16px] w-[85px]">
//             Holidays
//           </Link>

//           {pathname === "/holidays" ? (
//             <IoIosArrowDown className=" absolute top-5 text-[20px] right-3 cursor-pointer" />
//           ) : (
//             <IoIosArrowForward className=" absolute top-5 text-[20px] right-3 cursor-pointer" />
//           )}
//         </li>

//         <li
//           className={`p-4 ${
//             pathname === "/payment"
//               ? "bg-[#F9EAEB] before:absolute before:w-[5px] before:h-full before:bg-[#EC232B] before:rounded-3xl before:top-0 before:left-0 rounded-r-3xl text-[#EC232B]"
//               : ""
//           } flex items-center gap-2 w-full justify-center relative pl-20`}
//         >
//           <MdOutlinePayments className="font-semibold" size={20} />

//           <Link href="/payment" className="font-medium text-[16px] ">
//             Advanced Payment
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

"use client";

import Image from "next/image";
import { MdOutlinePayments, MdOutlineSpaceDashboard } from "react-icons/md";
import { TbUsersGroup } from "react-icons/tb";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { CiDollar, CiUser } from "react-icons/ci";
import { PiCalendarCheckLight } from "react-icons/pi";
import { GrNotes } from "react-icons/gr";
import { LiaNotesMedicalSolid } from "react-icons/lia";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Sidebar = () => {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);

  const isEmployeesActive = pathname.startsWith("/employees") || showMenu;

  return (
    <div className="h-screen bg-[#F9F9F9] text-[#242223] fixed md:w-[329px] rounded-3xl flex flex-col items-center shadow-2xl">
      <div className="logo w-full">
        <Image
          src={"/logo.png"}
          alt="logo"
          width={225}
          height={102}
          className="my-10 mx-auto"
        />
      </div>
      <ul className="w-full">
        <li
          className={`p-4 ${
            pathname === "/dashboard"
              ? "bg-[#F9EAEB] before:absolute before:w-[5px] before:h-full before:bg-[#EC232B] before:rounded-3xl before:top-0 before:left-0 rounded-r-3xl text-[#EC232B]"
              : ""
          } flex items-center gap-2 w-full justify-center relative`}
        >
          <MdOutlineSpaceDashboard className="font-semibold" size={20} />

          <Link href="/dashboard" className="font-medium text-[16px] w-[85px]">
            Dashboard
          </Link>
        </li>

        <li
          onClick={() => setShowMenu((prev) => !prev)}
          className={`p-4 ${
            isEmployeesActive
              ? "bg-[#F9EAEB] before:absolute before:w-[5px] before:h-full before:bg-[#EC232B] before:rounded-3xl before:top-0 before:left-0 rounded-r-3xl text-[#EC232B]"
              : ""
          } flex items-center gap-2 w-full justify-center relative`}
        >
          <TbUsersGroup className="font-semibold" size={20} />

          <Link
            href="/employees/profile"
            className="font-medium text-[16px] w-[85px]"
          >
            Employees
          </Link>

          {isEmployeesActive ? (
            <IoIosArrowDown className="absolute top-5 text-[20px] right-3 cursor-pointer" />
          ) : (
            <IoIosArrowForward className="absolute top-5 text-[20px] right-3 cursor-pointer" />
          )}
        </li>
        {isEmployeesActive && (
          <ul className="flex flex-col gap-2 w-full pl-5">
            <li className="mt-5">
              <Link
                href="/employees/profile"
                className={`font-normal text-[16px] flex items-center justify-center gap-2 ${
                  pathname === "/employees/profile" ? "text-[#7B7B7B]" : ""
                }`}
              >
                <CiUser size={20} />
                Profile
              </Link>
            </li>

            <li className="mt-1 pl-10">
              <Link
                href="/employees/attendance"
                className={`font-normal text-[16px] flex justify-center gap-2 ${
                  pathname === "/employees/attendance" ? "text-[#7B7B7B]" : ""
                }`}
              >
                <PiCalendarCheckLight size={20} />
                Attendance
              </Link>
            </li>

            <li className="mt-1">
              <Link
                href="/employees/tasks"
                className={`font-normal text-[16px] flex items-center justify-center gap-2 ${
                  pathname === "/employees/tasks" ? "text-[#7B7B7B]" : ""
                }`}
              >
                <GrNotes size={20} />
                Tasks
              </Link>
            </li>
          </ul>
        )}

        <li
          className={`p-4 ${
            pathname === "/payroll"
              ? "bg-[#F9EAEB] before:absolute before:w-[5px] before:h-full before:bg-[#EC232B] before:rounded-3xl before:top-0 before:left-0 rounded-r-3xl text-[#EC232B]"
              : ""
          } flex items-center gap-2 w-full justify-center relative`}
        >
          <CiDollar className="font-semibold" size={25} />

          <Link href="/payroll" className="font-medium text-[16px] w-[85px]">
            Payroll
          </Link>
        </li>

        <li
          className={`p-4 ${
            pathname === "/holidays"
              ? "bg-[#F9EAEB] before:absolute before:w-[5px] before:h-full before:bg-[#EC232B] before:rounded-3xl before:top-0 before:left-0 rounded-r-3xl text-[#EC232B]"
              : ""
          } flex items-center gap-2 w-full justify-center relative`}
        >
          <LiaNotesMedicalSolid className="font-semibold" size={20} />

          <Link href="/holidays" className="font-medium text-[16px] w-[85px]">
            Holidays
          </Link>

          {pathname === "/holidays" ? (
            <IoIosArrowDown className="absolute top-5 text-[20px] right-3 cursor-pointer" />
          ) : (
            <IoIosArrowForward className="absolute top-5 text-[20px] right-3 cursor-pointer" />
          )}
        </li>

        <li
          className={`p-4 ${
            pathname === "/payment"
              ? "bg-[#F9EAEB] before:absolute before:w-[5px] before:h-full before:bg-[#EC232B] before:rounded-3xl before:top-0 before:left-0 rounded-r-3xl text-[#EC232B]"
              : ""
          } flex items-center gap-2 w-full justify-center relative pl-20`}
        >
          <MdOutlinePayments className="font-semibold" size={20} />

          <Link href="/payment" className="font-medium text-[16px]">
            Advanced Payment
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
