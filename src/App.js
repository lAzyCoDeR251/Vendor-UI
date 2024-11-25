import React, { useState } from "react";
import SideNav from "./components/SideNav";
import VendorManagementForm from "./components/VendoManagementForm";
import HomePage from "./components/Home";
import ListVendor from "./components/ListVendor";
import { Moon, Sun } from "lucide-react";
import EnhancedVendorDashboard from "./components/EnhancedVendorDashboard";

export default function Home() {
  const [activeComponent, setActiveComponent] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to handle menu item clicks
  const handleMenuItemClick = (component) => {
    setActiveComponent(component);
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Function to show the Vendor Management Form
  const handleAddVendor = () => {
    setActiveComponent("addVendor");
  };

  return (
    <div
      className={`flex relative min-h-[100vh] ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div>
        <SideNav
          onMenuItemClick={handleMenuItemClick}
          isDarkMode={isDarkMode}
          activeComponent={activeComponent}
        />
      </div>

      <div className="flex-1 p-8">
        <div className="flex items-center space-x-2 absolute right-4 top-2">
          <Sun
            className={`h-4 w-4 text-gray-500 ${
              isDarkMode ? "hidden" : "block"
            }`}
          />
          <label
            htmlFor="darkModeToggle"
            className="relative inline-flex items-center cursor-pointer"
          >
            <input
              type="checkbox"
              id="darkModeToggle"
              checked={isDarkMode}
              onChange={toggleDarkMode}
              className="sr-only"
            />
            <span
              className={`w-10 h-6 rounded-full transition-colors duration-300 ${
                isDarkMode ? "bg-gray-600" : "bg-gray-200"
              }`}
            ></span>
            <span
              className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ease-in-out ${
                isDarkMode ? "translate-x-4" : "translate-x-0"
              }`}
            ></span>
          </label>
          <Moon
            className={`h-4 w-4 text-gray-500 ${
              isDarkMode ? "block" : "hidden"
            }`}
          />
        </div>

        {activeComponent === "home" && <HomePage />}
        {activeComponent === "addVendor" && (
          <VendorManagementForm isDarkMode={isDarkMode} />
        )}
        {activeComponent === "view" && (
          <ListVendor isDarkMode={isDarkMode} onAddVendor={handleAddVendor} />
        )}
        {activeComponent === "dashboard" && (
          <EnhancedVendorDashboard isDarkMode={isDarkMode} />
        )}
      </div>
    </div>
  );
}
