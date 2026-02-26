import {
  MdAccessTime,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdOutlinePersonAddAlt,
  MdPeopleAlt,
} from "react-icons/md";
import "./App.css";
import { FiDownload, FiHome } from "react-icons/fi";
import { IoPersonOutline, IoSearch } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { CgNotes } from "react-icons/cg";
import { HiOutlineChartPie } from "react-icons/hi";
import { TbSettings2 } from "react-icons/tb";
import { BiFilterAlt } from "react-icons/bi";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { CiGrid2H } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import AllUsers from "./components/EmployeeCard";

function App() {
  return (
    <div className="grid grid-cols-[25%_75%] bg-[whitesmoke] h-[155vh] w-screen">
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
      <div className="w-full font-['Poppins'] overflow-y-auto">
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

        {/* Hero Section */}
        <main className="h-100vh bg-[rgba(255,255,255,1)] m-4 rounded-[20px]">
          <div className="w-full flex items-center justify-betweem">
            <div className="relative w-full">
              <div className="absolute bottom-10.5 left-10">
                <IoSearch size={16} />
              </div>
              <input
                className="m-6 px-4 py-3.5 border border-[rgba(229,229,228,1)] rounded-[40px] text-3.5 leading-[100%] tracking-[-2%] w-[30vw] ps-12"
                type="text"
                placeholder="Search by Employee Name or Number" />
            </div>

            <div className="flex items-center justify-end w-full m-6 gap-2.5">
              <div className="border border-[#E5E5E4] p-3 rounded-[14px]">
                <FiDownload size={24} />
              </div>
              <div className="border border-[#E5E5E4] p-3 rounded-[14px]">
                <BiFilterAlt size={24} />
              </div>
              <div className="bg-[#3D3936] p-3 rounded-[14px] text-white">
                <GoPlus size={24} />
              </div>
              <div className="flex items-center border border-[#E5E5E4] gap-1 p-1 rounded-[14px]">
                <div className="bg-[#3D3936] p-2 rounded-xl text-white">
                  <HiOutlineSquares2X2 size={24} />
                </div>
                <div className="p-2 rounded-xl">
                  <CiGrid2H size={24} />
                </div>
                <div className="p-2 rounded-xl">
                  <img src="../images/hierarchy.png" alt="Hierarchy Icon" />
                </div>
              </div>
            </div>
          </div>

          {/* Employee Cards */}
          <div className="h-[107vh] overflow-y-auto">
            <AllUsers />
          </div>

          {/* Pagination */}
          <div className="flex items-center gap-2.5 p-3 bg-[#FFFFFF] rounded-b-[20px]">
            <div className="flex items-center gap-4">

              <span
                className="leading-[100%] tracking-[-2%] text-sm font-medium text-[#3D3936]">
                Rows per page:
              </span>

              <select name="rows-per-page" className="px-3 py-2 border border-[#E5E5E4] rounded-xl text-[#3D3936] text-sm leading-[100%] tracking-[-2%]">
                <option value="100">100</option>
                <option value="75">75</option>
                <option value="50">50</option>
                <option value="25">25</option>
              </select>

              <p className="text-[#3D3936] text-sm leading-[100%] tracking-[-2%]">1-100 of 500</p>
              <button className="text-gray-500">
                <MdKeyboardArrowLeft size={16}/>
              </button>
              <button>
                <MdKeyboardArrowRight size={16}/>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
