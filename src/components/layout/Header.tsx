import { MdAccessTime } from "react-icons/md";

export default function HeaderSection() {
    return (
        <header className="sm:bg-[rgba(255,255,255,1)] m-2 sm:m-4 rounded-[20px] flex flex-col gap-2 sm:flex-row items-center justify-between p-[8px_8px_8px_12px] sm:p-[16px_16px_16px_24px]">
            {/* Heading */}
            <div className="bg-[rgba(255,255,255,1)] py-3 sm:p-0 rounded-[10px] sm:rounded-none w-full sm:w-fit sm:bg-none">
                <h3 className="text-center text-[rgba(61,57,54,1)] font-medium text-4.5 leading-[100%] tracking-[-2%]">People</h3>
            </div>

            <div className="bg-[rgba(255,255,255,1)] sm:bg-none flex items-center gap-2.5 p-3 rounded-[10px] sm:p-0 sm:rounded-none">
                <span className="p-3 sm:p-4 border border-[rgba(229,229,228,1)] rounded-[40px] font-medium text-[13px] sm:text-sm leading-[100%] tracking-[-2%]">MST</span>

                <div className="flex items-center gap-2.5 border border-[rgba(229,229,228,1)] rounded-[40px] p-[3px_3px_3px_10px] sm:p-[4px_4px_4px_12px] sm:text-md">
                    <MdAccessTime size={24} />
                    02:03:02
                    <div className="bg-[rgba(247,247,247,1)] p-2 rounded-[40px]">
                        <img src="/images/icons/notes.png" alt="Note With Pen Icon" />
                    </div>
                </div>
                <div className="border border-[rgba(229,229,228,1)]  rounded-[40px] p-2.5 sm:p-3">
                    <img className="w-[5vw] sm:w-full" src="/images/icons/drive.png" alt="Drive Icon" />
                </div>
                <div>
                    <img className="w-[10vw] sm:w-full" src="/images/icons/profile.png" alt="Profile Photo" />
                </div>
            </div>
        </header>
    )
}