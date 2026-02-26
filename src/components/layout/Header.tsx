import { MdAccessTime } from "react-icons/md";

export default function HeaderSection() {
    return (
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
                        <img src="images/icons/notes.png" alt="Note With Pen Icon" />
                    </div>
                </div>
                <div className="border border-[rgba(229,229,228,1)]  rounded-[40px] p-3">
                    <img src="images/icons/drive.png" alt="Drive Icon" />
                </div>
                <div>
                    <img src="images/icons/profile.png" alt="Profile Photo" />
                </div>
            </div>
        </header>
    )
}