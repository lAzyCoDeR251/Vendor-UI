import React from "react";
import { Building2 } from "lucide-react";

const VendorManagementForm = ({ isDarkMode, onClose, isOpen, vendorData }) => {
  if (!isOpen) return null;

  const safeVendorData = {
    name: vendorData.name || "",
    type: vendorData.type || "",
    criticality: vendorData.criticality || "",
    status: vendorData.status || "",
    primaryContactName: vendorData.primaryContactName || "",
    primaryContactEmail: vendorData.primaryContactEmail || "",
    primaryContactPhone: vendorData.primaryContactPhone || "",
    companyRegistrationNumber: vendorData.companyRegistrationNumber || "",
    taxId: vendorData.taxId || "",
    yearEstablished: vendorData.yearEstablished || "",
    servicesProvided: vendorData.servicesProvided || [],
    contractStartDate: vendorData.contractStartDate || "",
    contractEndDate: vendorData.contractEndDate || "",
    annualRevenue: vendorData.annualRevenue || "",
    paymentTerms: vendorData.paymentTerms || "",
    complianceCertifications: vendorData.complianceCertifications || [],
    insuranceCoverage: vendorData.insuranceCoverage || "",
    onTimeDeliveryRate: vendorData.onTimeDeliveryRate || "",
    qualityScore: vendorData.qualityScore || "",
    notes: vendorData.notes || "",
  };

  return (
    <div
      className={`container mx-auto p-6 absolute z-50 top-10 w-[80%]`}
      // ${isDarkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl"
      >
        &times;
      </button>

      <form className="bg-white shadow-md rounded-lg p-8 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <Building2 className="mr-3 text-blue-600" /> Vendor Management Form
        </h2>

        {/* Basic Information Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="form-group">
            <label className="block text-gray-700 font-semibold mb-2">
              Vendor Name
            </label>
            <input
              type="text"
              name="name"
              value={safeVendorData.name}
              readOnly
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter vendor name"
              required
            />
          </div>

          <div className="form-group">
            <label className="block text-gray-700 font-semibold mb-2">
              Vendor Type
            </label>
            <select
              name="type"
              value={safeVendorData.type}
              readOnly
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Type</option>
              <option value="IT">IT Services</option>
              <option value="Consulting">Consulting</option>
              <option value="Software">Software</option>
              <option value="Hardware">Hardware</option>
              <option value="Professional">Professional Services</option>
            </select>
          </div>

          <div className="form-group">
            <label className="block text-gray-700 font-semibold mb-2">
              Criticality
            </label>
            <select
              name="criticality"
              value={safeVendorData.criticality}
              readOnly
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Criticality</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>

          <div className="form-group">
            <label className="block text-gray-700 font-semibold mb-2">
              Status
            </label>
            <select
              name="status"
              value={safeVendorData.status}
              readOnly
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="pending">Pending</option>
            </select>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="form-group">
            <label className="block text-gray-700 font-semibold mb-2">
              Primary Contact Name
            </label>
            <input
              type="text"
              name="primaryContactName"
              value={safeVendorData.primaryContactName}
              readOnly
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Contact Name"
            />
          </div>

          <div className="form-group">
            <label className="block text-gray-700 font-semibold mb-2">
              Contact Email
            </label>
            <input
              type="email"
              name="primaryContactEmail"
              value={safeVendorData.primaryContactEmail}
              readOnly
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="contact@example.com"
            />
          </div>

          <div className="form-group">
            <label className="block text-gray-700 font-semibold mb-2">
              Contact Phone
            </label>
            <input
              type="tel"
              name="primaryContactPhone"
              value={safeVendorData.primaryContactPhone}
              readOnly
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="+1 (123) 456-7890"
            />
          </div>
        </div>

        {/* Company Details Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="form-group">
            <label className="block text-gray-700 font-semibold mb-2">
              Company Registration Number
            </label>
            <input
              type="text"
              name="companyRegistrationNumber"
              value={safeVendorData.companyRegistrationNumber}
              readOnly
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Company Registration Number"
            />
          </div>

          <div className="form-group">
            <label className="block text-gray-700 font-semibold mb-2">
              Tax ID
            </label>
            <input
              type="text"
              name="taxId"
              value={safeVendorData.taxId}
              readOnly
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tax ID"
            />
          </div>

          <div className="form-group">
            <label className="block text-gray-700 font-semibold mb-2">
              Year Established
            </label>
            <input
              type="text"
              name="yearEstablished"
              value={safeVendorData.yearEstablished}
              readOnly
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Year Established"
            />
          </div>
        </div>

        {/* Services and Contract Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="form-group">
            <label className="block text-gray-700 font-semibold mb-2">
              Services Provided
            </label>
            <select
              name="servicesProvided"
              multiple
              value={safeVendorData.servicesProvided}
              readOnly
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Installation">Installation</option>
              <option value="Maintenance">Maintenance</option>
              <option value="Consulting">Consulting</option>
              <option value="Support">Support</option>
            </select>
          </div>

          <div className="form-group">
            <label className="block text-gray-700 font-semibold mb-2">
              Contract Start Date
            </label>
            <input
              type="date"
              name="contractStartDate"
              value={safeVendorData.contractStartDate}
              readOnly
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="form-group">
            <label className="block text-gray-700 font-semibold mb-2">
              Contract End Date
            </label>
            <input
              type="date"
              name="contractEndDate"
              value={safeVendorData.contractEndDate}
              readOnly
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Financial Information Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="form-group">
            <label className="block text-gray-700 font-semibold mb-2">
              Annual Revenue
            </label>
            <input
              type="text"
              name="annualRevenue"
              value={safeVendorData.annualRevenue}
              readOnly
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Annual Revenue"
            />
          </div>

          <div className="form-group">
            <label className="block text-gray-700 font-semibold mb-2">
              Payment Terms
            </label>
            <input
              type="text"
              name="paymentTerms"
              value={safeVendorData.paymentTerms}
              readOnly
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Payment Terms"
            />
          </div>
        </div>

        {/* Compliance and Insurance Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="form-group">
            <label className="block text-gray-700 font-semibold mb-2">
              Compliance Certifications
            </label>
            <select
              name="complianceCertifications"
              multiple
              value={safeVendorData.complianceCertifications}
              readOnly
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="ISO9001">ISO 9001</option>
              <option value="ISO27001">ISO 27001</option>
              <option value="GDPR">GDPR Compliant</option>
              <option value="SOC2">SOC 2</option>
            </select>
          </div>

          <div className="form-group">
            <label className="block text-gray-700 font-semibold mb-2">
              Insurance Coverage
            </label>
            <input
              type="text"
              name="insuranceCoverage"
              value={safeVendorData.insuranceCoverage}
              readOnly
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Insurance Coverage"
            />
          </div>
        </div>

        {/* Performance Metrics Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="form-group">
            <label className="block text-gray-700 font-semibold mb-2">
              On-Time Delivery Rate (%)
            </label>
            <input
              type="number"
              name="onTimeDeliveryRate"
              value={safeVendorData.onTimeDeliveryRate}
              readOnly
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="On-Time Delivery Rate"
            />
          </div>

          <div className="form-group">
            <label className="block text-gray-700 font-semibold mb-2">
              Quality Score
            </label>
            <input
              type="number"
              name="qualityScore"
              value={safeVendorData.qualityScore}
              readOnly
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Quality Score"
            />
          </div>
        </div>

        {/* Additional Notes Section */}
        <div className="form-group">
          <label className="block text-gray-700 font-semibold mb-2">
            Additional Notes
          </label>
          <textarea
            name="notes"
            value={safeVendorData.notes}
            readOnly
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Additional notes about the vendor"
          />
        </div>
      </form>
    </div>
  );
};

export default VendorManagementForm;
