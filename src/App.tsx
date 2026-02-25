import {
  MdAccessTime,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdOutlinePersonAddAlt,
  MdPeopleAlt,
} from "react-icons/md";
import "./App.css";
import { FiHome } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { CgNotes } from "react-icons/cg";
import { HiOutlineChartPie } from "react-icons/hi";
import { TbSettings2 } from "react-icons/tb";

function App() {
  return (
    <div className="grid grid-cols-[25%_75%] bg-[whitesmoke] h-screen w-screen">
      <div className="w-full">
        {/* Side Menu */}
        <div className="bg-[rgba(61,57,54,1)] m-4 rounded-[20px] h-[150vh] flex flex-col justify-between">
          <div>
            {/* Brand Logo */}
            <div className="flex items-center justify-between px-5 py-6">
              <img src="../images/Brand-Name.png" alt="Brand Logo" />
              <button className="cursor-pointer">
                <MdKeyboardDoubleArrowLeft size={25} className="text-white" />
              </button>
            </div>

            {/* List */}
            <ul className="mt-6 px-4 font-['Poppins'] text-gray-300 text-[14px] flex flex-col gap-3 cursor-default">
              <li className="flex items-center px-4 py-2 gap-3 leading-[100%] tracking-[-2%]">
                <FiHome size={20} />
                Home
              </li>

              <li className="flex items-center justify-between px-4 py-2">
                <div className="flex items-center gap-3 leading-[100%] tracking-[-2%]">
                  <IoPersonOutline size={20} />
                  My Info
                </div>
                <div>
                  <MdKeyboardArrowRight size={20} />
                </div>
              </li>

              <li className="flex items-center gap-3 px-4 py-2 text-[14px] leading-[100%] tracking-[-2%]">
                <MdPeopleAlt size={20} />
                People
              </li>

              <li className="flex items-center justify-between px-4 py-2">
                <div className="flex items-center gap-3 leading-[100%] tracking-[-2%]">
                  <IoIosPeople size={20} />
                  Team Management
                </div>
                <div>
                  <MdKeyboardArrowRight size={20} />
                </div>
              </li>

              <li className="flex items-center justify-between px-4 py-2">
                <div className="flex items-center gap-3 leading-[100%] tracking-[-2%]">
                  <CgNotes size={20} />
                  Project Setup
                </div>
                <div>
                  <MdKeyboardArrowRight size={20} />
                </div>
              </li>

              <li className="flex items-center gap-3 px-4 py-2 text-[14px] leading-[100%] tracking-[-2%]">
                <MdOutlinePersonAddAlt size={20} />
                Hiring
              </li>

              <li className="flex items-center gap-3 px-4 py-2 text-[14px] leading-[100%] tracking-[-2%]">
                <HiOutlineChartPie size={20} />
                Report
              </li>
            </ul>
          </div>

          {/* Setting Button */}
          <div className="flex items-center w-68 border border-[rgba(255,255,255,0.1)] rounded-2xl p-4 text-[14px] font-['Poppins'] m-4">
            <button className="flex items-center gap-2.5  justify-center text-white  leading-[100%] tracking-[-2%] ">
              <TbSettings2 size={20} />
              Settings
            </button>
          </div>
        </div>
      </div>
      <div className="w-full font-['Poppins']">
        {/* Header Section */}
        <header className="bg-[rgba(255,255,255,1)] m-4 rounded-[20px] flex items-center justify-between p-[16px_16px_16px_24px]">
          {/* Heading */}
          <div>
            <h3 className="text-[rgba(61,57,54,1)] font-medium text-4.5 leading-[100%] tracking-[-2%]">People</h3>
          </div>

          <div className="flex items-center gap-2.5">
            <span className="p-4 border border-[rgba(229,229,228,1)] rounded-[40px] font-medium text-3.5 leading-[100%] tracking-[-2%]">MST</span>
            <div className="flex items-center gap-2.5 border border-[rgba(229,229,228,1)] rounded-[40px] p-[4px_4px_4px_12px]">
              <MdAccessTime size={24} />
              02:03:02
              <div className="bg-[rgba(247,247,247,1)] p-2 rounded-[40px]">
                <img src="../images/notes.png" alt="Note With Pen Icon" />
              </div>
            </div>
            <div className="border border-[rgba(229,229,228,1)]  rounded-[40px] p-3">
              <img src="../images/drive.png" alt="Drive Icon" />
            </div>
            <div>
              <img src="../images/profile.png" alt="Profile Photo" />
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
