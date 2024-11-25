import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import axios from "axios";

export default function VendorListView({ isDarkMode, onAddVendor }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const response = await axios.get("https://server-vendor.onrender.com/api/vendors");
        setVendors(response.data); // Store vendors in state
        console.log(response.data);

        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to load vendor data.");
        setLoading(false);
      }
    };

    fetchVendors();
  }, []);

  const filteredVendors = vendors.filter((vendor) => {
    const name = vendor.name ? vendor.name.toLowerCase() : "";
    const type = vendor.type ? vendor.type.toLowerCase() : "";
    const serviceProvided = vendor.serviceProvided
      ? vendor.serviceProvided.toLowerCase()
      : "";

    return (
      name.includes(searchTerm.toLowerCase()) ||
      type.includes(searchTerm.toLowerCase()) ||
      serviceProvided.includes(searchTerm.toLowerCase())
    );
  });

  const getCriticalityColor = (criticality) => {
    switch (criticality.toLowerCase()) {
      case "low":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-3 rounded-md";
      case "medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 px-3 rounded-md";
      case "high":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300 px-3 rounded-md";
      case "critical":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 px-3 rounded-md";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300 px-3 rounded-md";
    }
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-3 rounded-md";
      case "inactive":
        return "bg-red-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300 px-3 rounded-md";
      case "under review":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 px-3 rounded-md";
      default:
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 px-3 rounded-md";
    }
  };

  return (
    <div
      className={`min-h-screen p-8 w-[90%] mx-auto ml-36 ${
        isDarkMode ? "dark" : ""
      }`}
    >
      <div className="dark:bg-gray-900 min-h-screen transition-colors duration-300">
        <div className="w-full mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <div className="flex flex-row items-center justify-between p-4 border-b dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Vendor List
            </h2>
          </div>

          <div className="p-6">
            {/* Search bar */}
            <div className="flex justify-between items-center mb-6">
              <div className="relative w-64">
                <input
                  type="text"
                  placeholder="Search vendors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border rounded-md w-full dark:bg-gray-700 dark:text-gray-100"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 dark:text-gray-300" />
              </div>
              <button
                onClick={onAddVendor}
                className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded"
              >
                Add New Vendor
              </button>
            </div>

            {/* Loading state */}
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}

            {/* Table */}
            {!loading && !error && (
              <table className="w-full table-auto border">
                <thead>
                  <tr className="border">
                    <th className="text-center text-gray-900 dark:text-gray-300 border p-1">
                      Name
                    </th>
                    <th className="text-center text-gray-900 dark:text-gray-300 border p-1">
                      Type
                    </th>
                    <th className="text-center text-gray-900 dark:text-gray-300 border p-1">
                      Criticality
                    </th>
                    <th className="text-center text-gray-900 dark:text-gray-300 border p-1">
                      Status
                    </th>
                    <th className="text-center text-gray-900 dark:text-gray-300 border p-1">
                      Contact
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredVendors.map((vendor) => (
                    <tr
                      key={vendor._id} // Assuming each vendor has a unique _id
                      className="hover:bg-gray-50 dark:hover:bg-gray-700 border"
                    >
                      <td className="font-medium text-gray-900 dark:text-gray-300 border text-center">
                        {vendor.name}
                      </td>
                      <td className="text-gray-900 dark:text-gray-300 border text-center">
                        {vendor.type}
                      </td>
                      <td className="border text-center">
                        <span
                          className={`font-semibold  ${getCriticalityColor(
                            vendor.criticality
                          )}`}
                        >
                          {vendor.criticality}
                        </span>
                      </td>
                      <td className="border text-center">
                        <span
                          className={`font-semibold  ${getStatusColor(
                            vendor.status
                          )}`}
                        >
                          {vendor.status}
                        </span>
                      </td>
                      <td className="text-gray-900 dark:text-gray-300 border text-center ">
                        {vendor.primaryContactPhone}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
