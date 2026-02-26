import { BiFilterAlt } from "react-icons/bi";
import { CiGrid2H } from "react-icons/ci";
import { FiDownload } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";

export default function Toolbar() {
    return (
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
                        <img src="images/icons/hierarchy.png" alt="Hierarchy Icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}