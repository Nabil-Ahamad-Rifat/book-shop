import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import { HiMenuAlt3, HiX } from "react-icons/hi";

function DashBoardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden font-sans'>

      {/* Mobile Sidebar Overlay - Closes sidebar when clicking outside */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      {/* Mobile: Fixed & Translated via state. Desktop: Relative & Always visible */}
      <div className={`
            fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 border-r border-gray-700
            transform transition-transform duration-300 ease-in-out shadow-2xl md:shadow-none
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            md:relative md:translate-x-0
        `}>
        <SideBar />

        {/* Close Button (Mobile Only) */}
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white md:hidden bg-gray-700 rounded-full p-1"
        >
          <HiX size={20} />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col w-full h-full overflow-hidden">

        {/* Mobile Header - Only visible on small screens */}
        <div className="md:hidden bg-gray-800 border-b border-gray-700 p-4 flex items-center justify-between shadow-md z-30">
          <span className="font-bold text-xl text-white tracking-wide flex items-center gap-2">
            <span className="text-blue-500">Book</span>Inventory
          </span>
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="text-gray-300 hover:text-white p-2 rounded-md hover:bg-gray-700 transition active:scale-95"
          >
            <HiMenuAlt3 size={28} />
          </button>
        </div>

        {/* Scrollable Content Wrapper */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth" onClick={() => isSidebarOpen && setIsSidebarOpen(false)}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DashBoardLayout