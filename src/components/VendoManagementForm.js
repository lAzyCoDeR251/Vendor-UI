import React, { useState } from "react";
import { Building2, CheckCircle2 } from "lucide-react";
import axios from "axios";

const VendorManagementForm = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    criticality: "",
    status: "",
    primaryContactName: "",
    primaryContactEmail: "",
    primaryContactPhone: "",
    companyRegistrationNumber: "",
    taxId: "",
    yearEstablished: "",
    servicesProvided: [],
    contractStartDate: "",
    contractEndDate: "",
    annualRevenue: "",
    paymentTerms: "",
    complianceCertifications: [],
    insuranceCoverage: "",
    onTimeDeliveryRate: "",
    qualityScore: "",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServicesChange = (e) => {
    const values = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setFormData((prev) => ({ ...prev, servicesProvided: values }));
  };

  const handleComplianceChange = (e) => {
    const values = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setFormData((prev) => ({ ...prev, complianceCertifications: values }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Set submitting state to true and reset success message
    setIsSubmitting(true);
    setSuccessMessage("");
    // Add form submission logic here
    try {
      // Make a POST request to your backend to save the vendor data
      const response = axios.post(
        "http://localhost:5000/api/vendors",
        formData
      );
      console.log("Vendor Data Submitted:", response.data);
      // Handle success (e.g., show a success message, reset form, etc.)
      // Show success message
      setSuccessMessage("Vendor details submitted successfully!");

      // Clear form fields by resetting formData state
      setFormData({
        name: "",
        type: "",
        criticality: "",
        status: "",
        primaryContactName: "",
        primaryContactEmail: "",
        primaryContactPhone: "",
        companyRegistrationNumber: "",
        taxId: "",
        yearEstablished: "",
        servicesProvided: [],
        contractStartDate: "",
        contractEndDate: "",
        annualRevenue: "",
        paymentTerms: "",
        complianceCertifications: [],
        insuranceCoverage: "",
        onTimeDeliveryRate: "",
        qualityScore: "",
        notes: "",
      });
    } catch (error) {
      console.error("Error submitting vendor data:", error);
      // Handle error (e.g., show an error message)
      setSuccessMessage("Failed to submit vendor data. Please try again.");
    } finally {
      // Set submitting state back to false
      setIsSubmitting(false);
    }
    console.log("Vendor Data:", formData);
  };

  return (
    <div
      className={`container mx-auto p-6 ml-36 w-[90%] `}
      // ${isDarkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-8 space-y-6"
      >
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
              value={formData.name}
              onChange={handleChange}
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
              value={formData.type}
              onChange={handleChange}
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
              value={formData.criticality}
              onChange={handleChange}
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
              value={formData.status}
              onChange={handleChange}
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
              value={formData.primaryContactName}
              onChange={handleChange}
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
              value={formData.primaryContactEmail}
              onChange={handleChange}
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
              value={formData.primaryContactPhone}
              onChange={handleChange}
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
              value={formData.companyRegistrationNumber}
              onChange={handleChange}
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
              value={formData.taxId}
              onChange={handleChange}
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
              value={formData.yearEstablished}
              onChange={handleChange}
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
              value={formData.servicesProvided}
              onChange={handleServicesChange}
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
              value={formData.contractStartDate}
              onChange={handleChange}
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
              value={formData.contractEndDate}
              onChange={handleChange}
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
              value={formData.annualRevenue}
              onChange={handleChange}
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
              value={formData.paymentTerms}
              onChange={handleChange}
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
              value={formData.complianceCertifications}
              onChange={handleComplianceChange}
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
              value={formData.insuranceCoverage}
              onChange={handleChange}
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
              value={formData.onTimeDeliveryRate}
              onChange={handleChange}
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
              value={formData.qualityScore}
              onChange={handleChange}
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
            value={formData.notes}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Additional notes about the vendor"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-md"
            disabled={isSubmitting} // Disable button while submitting
          >
            {isSubmitting ? (
              "Submitting..." // Show "Submitting..." text while submitting
            ) : (
              <>
                <CheckCircle2 className="inline mr-2" />
                Submit Vendor Details
              </>
            )}
          </button>
        </div>
        {successMessage && (
          <div className="mt-4 text-green-600 text-center">{successMessage}</div>
        )}
      </form>
    </div>
  );
};

export default VendorManagementForm;
