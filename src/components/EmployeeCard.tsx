type EmployeeCardProps = {
    image: string;
    name: string;
    role: string;
};

export default function AllUsers() {
    const users: EmployeeCardProps[] = [
        {
            image: "../images/people/Ethan Lee.png",
            name: "Ethan Lee",
            role: "IT Specialist",
        },
        {
            image: "../images/people/Emily Baker.png",
            name: "Emily Baker",
            role: "Marketing Manager",
        },
        {
            image: "../images/people/Micheal Shaun.png",
            name: "Micheal Shaun",
            role: "Sales Director",
        },
        {
            image: "../images/people/Liam Carter.png",
            name: "Liam Carter",
            role: "Product Designer",
        },
        {
            image: "../images/people/Grace Kim.png",
            name: "Grace Kim",
            role: "Customer Lead",
        },
        {
            image: "../images/people/Noah Williams.png",
            name: "Noah Williams",
            role: "Finance Head",
        },
        {
            image: "../images/people/Isabella Rossi.png",
            name: "Isabella Rossi",
            role: "Operations Manager",
        },
        {
            image: "../images/people/Ava Thompson.png",
            name: "Ava Thompson",
            role: "HR Executive",
        },
        {
            image: "../images/people/Micheal Shaun.png",
            name: "Micheal Shaun",
            role: "Sales Director",
        },
        {
            image: "../images/people/Liam Carter.png",
            name: "Liam Carter",
            role: "Product Designer",
        },
        {
            image: "../images/people/Grace Kim.png",
            name: "Grace Kim",
            role: "Customer Lead",
        },
        {
            image: "../images/people/Noah Williams.png",
            name: "Noah Williams",
            role: "Finance Head",
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 m-6">
            {users.map((user, index) => (
                <div key={index} className="bg-[rgba(255,255,255,1)] rounded-3xl border border-[#E5E5E4] p-6 flex flex-col items-center gap-5">
                    <div>
                        <img
                            src={user.image}
                            alt={user.name}
                            className="w-full h-full"
                        />
                    </div>

                    <div className="flex flex-col items-center gap-1">
                        <h3 className="text-base font-medium leading-[100%] tracking-[-2%] text-[#3D3936]">{user.name}</h3>

                        <p className="text-sm text-[#947550] leading-[100%] tracking-[-2%] mt-2">{user.role}</p>

                        <div className="flex justify-center gap-2 mt-2">
                            <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                            <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}