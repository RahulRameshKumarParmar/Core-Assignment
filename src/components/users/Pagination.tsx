import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function Pagination() {
    return (
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

                <p className="hidden sm:block text-[#3D3936] text-sm leading-[100%] tracking-[-2%]">1-100 of 500</p>

                <button className="text-gray-500">
                    <MdKeyboardArrowLeft size={16} />
                </button>
                <button>
                    <MdKeyboardArrowRight size={16} />
                </button>
            </div>
        </div>
    )
}