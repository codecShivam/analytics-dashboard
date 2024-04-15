import React, { useState } from "react";
import './App.css';
import Analysis from './components/ui/Analysis';
import Sidebar from './components/ui/Sidebar';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative flex">
      {isSidebarOpen && <div className="sm:hidden fixed "></div>}
      <button
        className="sm:hidden fixed z-50 top-0 left-0 mt-4 ml-4 p-2 text-white bg-gray-800 rounded-full"
        onClick={toggleSidebar}
      >
        {/* You can use any icon or text for the button */}
        {isSidebarOpen ? "Close" : "Open"}
      </button>
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      <Analysis />
    </div>
  );
};

export default App;
