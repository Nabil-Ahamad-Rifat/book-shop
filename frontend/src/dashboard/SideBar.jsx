import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { useContext } from "react";
import { AuthContext } from "../contects/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

function SideBar() {
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      logout().then(() => {
        navigate("/login");
      }).catch((error) => {
        console.error("Logout failed", error);
      });
    }
  };

  return (
    <div className='h-full'>
      <Sidebar aria-label="Admin Dashboard Sidebar" className="h-full border-r border-gray-700 bg-gray-800">

        {/* Simple Profile Section within Sidebar */}
        <div className="flex items-center gap-3 px-4 py-6 border-b border-gray-700 mb-4">
          {/* Display Profile Pic or Fallback */}
          <img
            src={user?.photoURL || `https://ui-avatars.com/api/?name=${user?.displayName || "Admin"}&background=random&color=fff&size=128`}
            alt="User"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `https://ui-avatars.com/api/?name=${user?.displayName || "Admin"}&background=random&color=fff&size=128`;
            }}
            className="w-10 h-10 rounded-full ring-2 ring-gray-600 object-cover min-w-[2.5rem]"
          />
          <div className="text-gray-200">
            <p className="text-sm font-bold truncate max-w-[140px]">{user?.displayName || "Admin User"}</p>
            <p className="text-xs text-gray-400">Admin</p>
          </div>
        </div>

        <SidebarItems>
          <SidebarItemGroup>
            <SidebarItem
              href="/admin/dashboard"
              icon={HiChartPie}
              active={location.pathname === "/admin/dashboard"}
              className={location.pathname === "/admin/dashboard" ? "bg-gray-700" : ""}
            >
              Dashboard
            </SidebarItem>
            <SidebarItem
              href="/admin/dashboard/upload"
              icon={HiOutlineCloudUpload}
              active={location.pathname === "/admin/dashboard/upload"}
            >
              Upload Book
            </SidebarItem>
            <SidebarItem
              href="/admin/dashboard/manage"
              icon={HiInbox}
              active={location.pathname === "/admin/dashboard/manage"}
            >
              Manage Book
            </SidebarItem>
            <SidebarItem href="#" icon={HiUser}>
              Users
            </SidebarItem>
            <SidebarItem href="#" icon={HiShoppingBag}>
              Products
            </SidebarItem>

            <SidebarItem
              onClick={handleLogout}
              icon={HiTable}
              className="cursor-pointer hover:bg-gray-700 text-red-400 hover:text-red-300 font-bold"
            >
              Logout
            </SidebarItem>
          </SidebarItemGroup>
          <SidebarItemGroup>
            {/* Updated Help Link */}
            <SidebarItem
              href="/admin/dashboard/help"
              icon={BiBuoy}
              active={location.pathname === "/admin/dashboard/help"}
            >
              Help
            </SidebarItem>
          </SidebarItemGroup>
        </SidebarItems>
      </Sidebar>
    </div>
  )
}

export default SideBar