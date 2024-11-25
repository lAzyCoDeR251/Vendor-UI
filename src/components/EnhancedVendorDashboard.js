import { useState, useEffect } from "react";
import VendorDetailsModal from "./VendorDetails.js";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Search, Info } from "lucide-react";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function EnhancedVendorDashboard({ isDarkMode }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loadingVendors, setLoadingVendors] = useState({}); // New state to track individual vendor loading status

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

  // Generate dynamic vendorTypeData based on vendors
  const generateVendorTypeData = () => {
    const typeCounts = vendors.reduce((acc, vendor) => {
      acc[vendor.type] = (acc[vendor.type] || 0) + 1;
      return acc;
    }, {});

    return Object.keys(typeCounts).map((type) => ({
      name: type,
      value: typeCounts[type],
    }));
  };

  // Generate dynamic criticalityData based on vendors
  const generateCriticalityData = () => {
    const criticalityCounts = vendors.reduce((acc, vendor) => {
      acc[vendor.criticality] = (acc[vendor.criticality] || 0) + 1;
      return acc;
    }, {});

    return Object.keys(criticalityCounts).map((criticality) => ({
      name: criticality,
      value: criticalityCounts[criticality],
    }));
  };

  const getCriticalityColor = (criticality) => {
    switch (criticality.toLowerCase()) {
      case "low":
        return "bg-green-100 text-green-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "high":
        return "bg-orange-100 text-orange-800";
      case "critical":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-green-100 text-green-800";
      case "inactive":
        return "bg-red-100 text-gray-800";
      case "pending":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const response = await axios.get("https://server-vendor.onrender.com/api/vendors");
        setVendors(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to load vendor data.");
        setLoading(false);
      }
    };

    fetchVendors();
  }, []);

  const handleOpenModal = async (vendorId) => {
    // Set loading state for the specific vendor
    setLoadingVendors((prev) => ({
      ...prev,
      [vendorId]: "Fetching...", // Set button text to "Fetching..." for the clicked vendor
    }));

    try {
      const response = await axios.get(
        `https://server-vendor.onrender.com/api/vendors/${vendorId}`
      );
      setSelectedVendor(response.data);
      setIsModalOpen(true);
      // Reset button text once the modal is open
      setLoadingVendors((prev) => ({
        ...prev,
        [vendorId]: "Details", // Reset to "Details" after fetching
      }));
    } catch (error) {
      console.error("Error fetching vendor details:", error);
      // Reset button text if there is an error
      setLoadingVendors((prev) => ({
        ...prev,
        [vendorId]: "Details",
      }));
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVendor(null);
  };

  return (
    <div
      className={`w-[90%] mx-auto ml-36 ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      } min-h-screen`}
    >
      <div className="flex">
        <main className="flex-1 p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">Vendor Dashboard</h1>
          </div>

          {/* Vendor Table */}
          <div className="mb-8">
            <div className="mb-4">
              <label htmlFor="search" className="block text-lg">
                Search Vendors
              </label>
              <div className="flex mt-1">
                <input
                  id="search"
                  type="text"
                  placeholder="Search by name, type, or service"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-grow p-2 border rounded "
                />
                <button className="ml-2 bg-blue-600 text-white p-2 rounded">
                  <Search className="h-4 w-4" />
                </button>
              </div>
            </div>

            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}

            {!loading && !error && (
              <table className="w-full table-auto">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Name</th>
                    <th className="text-left p-2">Type</th>
                    <th className="text-left p-2">Criticality</th>
                    <th className="text-left p-2">Status</th>
                    <th className="text-left p-2">Contact</th>
                    <th className="text-left p-2">Service Provided</th>
                    <th className="text-left p-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredVendors.map((vendor) => (
                    <tr key={vendor._id} className="hover:bg-gray-200">
                      <td className="p-2">{vendor.name}</td>
                      <td className="p-2">{vendor.type}</td>
                      <td className="p-2">
                        <span
                          className={`${getCriticalityColor(
                            vendor.criticality
                          )} px-2 py-1 rounded`}
                        >
                          {vendor.criticality}
                        </span>
                      </td>
                      <td className="p-2">
                        <span
                          className={`${getStatusColor(
                            vendor.status
                          )} px-2 py-1 rounded`}
                        >
                          {vendor.status}
                        </span>
                      </td>
                      <td className="p-2">{vendor.primaryContactPhone}</td>
                      <td className="p-2">
                        <ul>
                          {vendor.servicesProvided.map((service, index) => (
                            <li key={index}>{service}</li>
                          ))}
                        </ul>
                      </td>
                      <td className="p-2">
                        <button
                          className="flex items-center bg-blue-500 text-white p-2 rounded"
                          onClick={() => handleOpenModal(vendor._id)}
                        >
                          <Info className="h-4 w-4 mr-1" />
                          {loadingVendors[vendor._id] || "Details"}{" "}
                          {/* Display dynamic text */}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Vendor Types Pie Chart */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4">Vendor Types</h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={generateVendorTypeData()} // Use dynamic vendor type data
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {generateVendorTypeData().map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]} // Assign colors dynamically
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Vendor Criticality Bar Chart */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4">Vendor Criticality</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={generateCriticalityData()}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <RechartsTooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </main>
      </div>

      {/* Vendor Details Modal */}
      {isModalOpen && selectedVendor && (
        <VendorDetailsModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          vendorData={selectedVendor} // Pass selected vendor data to the modal
        />
      )}
    </div>
  );
}
