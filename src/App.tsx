import React, { useState } from "react";
import './App.css';
import Analysis from './components/ui/Analysis';
import Sidebar from './components/ui/Sidebar';
import { FiMenu, FiX } from "react-icons/fi"; // Importing icons

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative flex font-DM">
      <button
        className={`sm:hidden fixed z-50 top-0 is left-0 mt-4 ml-4 p-2 text-white bg-gray-800 rounded-full`}
        onClick={toggleSidebar}
      >
        {/* Toggle between menu and close icons */}
        {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      <Analysis />
    </div>
  );
};

export default App;
