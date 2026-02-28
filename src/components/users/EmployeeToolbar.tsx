import { useState } from "react";
import { BiFilterAlt } from "react-icons/bi";
import { CgMenuGridO } from "react-icons/cg";
import { CiGrid2H } from "react-icons/ci";
import { FiDownload } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";

export default function Toolbar() {
    const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full relative flex items-center justify-betweem">
      <div className="relative w-full">
        <div className="absolute bottom-10.5 left-10">
          <IoSearch size={16} />
        </div>
        <input
          className="m-6 px-4 py-3.5 border border-[rgba(229,229,228,1)] rounded-[40px] text-3.5 leading-[100%] tracking-[-2%] w-[55vw] sm:w-[30vw] ps-12 sm:placeholder:One"
          type="text"
          placeholder={window.innerWidth < 640 ? "Search" : 'Search by Employee Name or Number'}
        />
      </div>

      <div onClick={() => setShowMenu(!showMenu)} className="sm:hidden border p-2 m-4 border-[rgba(229,229,228,1)] rounded-[10px]">
        <CgMenuGridO size={30} />
      </div>

          <div className={`sm:flex ${showMenu ? 'flex' : 'hidden'} absolute top-[60%] -right-2 sm:relative sm:top-0 sm:right-0 z-10 bg-white justify-start flex-col sm:flex-row sm:items-center sm:justify-end sm:w-full m-6 sm:gap-2.5 border border-[#E5E5E4] sm:border-none rounded-2xl sm:rounded-none`}>
        <div className="flex items-center gap-2 sm:block sm:border sm:border-[#E5E5E4] p-3 rounded-[14px]">
          <span className="sm:hidden">Download</span>
          <FiDownload size={24} />
        </div>
        <div className="flex items-center gap-2 sm:block sm:border sm:border-[#E5E5E4] p-3 rounded-[14px]">
          <span className="sm:hidden">Filter</span>
          <BiFilterAlt size={24} />
        </div>
        <div className="flex items-center gap-2 sm:block sm:bg-[#3D3936] p-3 rounded-[14px] sm:text-white">
          <span className="sm:hidden">Add</span>
          <GoPlus size={24} />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:border sm:border-[#E5E5E4] gap-1 p-1 rounded-[14px]">
          <div className="flex items-center gap-2 sm:block sm:bg-[#3D3936] p-2 rounded-xl sm:text-white">
            <span className="sm:hidden">Option</span>
            <HiOutlineSquares2X2 size={24} />
          </div>
          <div className="flex items-center gap-2 sm:block p-2 rounded-xl">
            <span className="sm:hidden">Setting</span>
            <CiGrid2H size={24} />
          </div>
          <div className="flex items-center gap-2 sm:block p-2 rounded-xl">
            <span className="sm:hidden">Structure</span>
            <img src="/images/icons/hierarchy.png" alt="Hierarchy Icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
