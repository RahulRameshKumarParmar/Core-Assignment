import HeaderSection from "../components/layout/Header";
import SideMenu from "../components/layout/SideMenu";
import AllUsers from "../components/users/EmployeeCard";
import Toolbar from "../components/users/EmployeeToolbar";
import Pagination from "../components/users/Pagination";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-[25%_75%] bg-[whitesmoke] h-[155vh] w-screen">

      {/* Side Menu */}
      <div className="w-full">
        <SideMenu />
      </div>

      <div className="w-full font-['Poppins'] overflow-y-auto">
        {/* Header Section */}
        <HeaderSection />

        {/* Hero Section */}
        <main className="h-100vh bg-[rgba(255,255,255,1)] m-4 rounded-[20px]">

          {/* Toolbar */}
          <Toolbar />

          {/* Employee Cards */}
          <div className="h-[107vh] overflow-y-auto">
            <AllUsers />
          </div>

          {/* Pagination */}
          <Pagination />
        </main>
      </div>
    </div>
  );
}
