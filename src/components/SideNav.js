import React from "react";

const SideNav = ({ onMenuItemClick, isDarkMode, activeComponent }) => {
  return (
    <div
      className={`fixed flex flex-col items-center w-40 h-[100vh] overflow-hidden ${
        isDarkMode ? "bg-white text-black" : "bg-gray-900 text-white"
      }`}
    >
      {/* App link */}
      <a className="flex items-center w-full px-3 mt-3" href="#e">
        <svg
          className="w-8 h-8 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
        </svg>
        <span className="ml-2 text-sm font-bold">Vendor Management</span>
      </a>

      {/* Menu items */}
      <div className="w-full px-2">
        <div className="flex flex-col items-center w-full mt-3 border-t border-gray-700">
          <button
            onClick={() => onMenuItemClick("home")}
            className={`flex items-center w-full h-12 px-3 mt-2 rounded ${
              activeComponent === "home"
                ? "bg-gray-700 text-gray-300"
                : "hover:bg-gray-700 hover:text-gray-300"
            }`}
          >
            <svg
              className="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="ml-2 text-sm font-medium">Home</span>
          </button>
          <button
            onClick={() => onMenuItemClick("addVendor")}
            className={`flex items-center w-full h-12 px-3 mt-2 rounded ${
              activeComponent === "addVendor"
                ? "bg-gray-700 text-gray-300"
                : "hover:bg-gray-700 hover:text-gray-300"
            }`}
          >
            <svg
              className="w-8 h-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 011 1v2a1 1 0 01-1 1h-3v3a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3H5a1 1 0 01-1-1v-2a1 1 0 011-1h3V6a1 1 0 011-1h2z"
                clipRule="evenodd"
              />
            </svg>
            <span className="ml-2 text-sm font-medium">Add Vendor</span>
          </button>

          <button
            onClick={() => onMenuItemClick("view")}
            className={`flex items-center w-full h-12 px-3 mt-2 rounded ${
              activeComponent === "view"
                ? "bg-gray-700 text-gray-300"
                : "hover:bg-gray-700 hover:text-gray-300"
            }`}
          >
            <svg
              className="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="ml-2 text-sm font-medium">List</span>
          </button>
        </div>

        {/* Other Menu Items */}
        <div className="flex flex-col items-center w-full mt-2 border-t border-gray-700">
          <button
            onClick={() => onMenuItemClick("dashboard")}
            className={`flex items-center w-full h-12 px-3 mt-2 rounded ${
              activeComponent === "dashboard"
                ? "bg-gray-700 text-gray-300"
                : "hover:bg-gray-700 hover:text-gray-300"
            }`}
          >
            <svg
              className="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
            <span className="ml-2 text-sm font-medium">Dashboard</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
