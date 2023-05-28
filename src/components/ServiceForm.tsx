import React, { useState, useEffect } from "react";

type ServiceFormProps = {
  serviceId?: string;
};

const ServiceForm = ({ serviceId }: ServiceFormProps) => {
  const [formData, setFormData] = useState({
    personalName: "",
    block: "",
    apartment: "",
    serviceCategory: "",
    value: "",
  });

  useEffect(() => {
    if (serviceId) {
      // Fetch the service data from the API based on the serviceId
      fetch(`/api/services/${serviceId}`)
        .then((response) => response.json())
        .then((data) => {
          setFormData(data);
        })
        .catch((error) => {
          console.error("Error fetching service data:", error);
        });
    }
  }, [serviceId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = serviceId ? `/api/services/${serviceId}` : "/api/services";
      const method = serviceId ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Service created or updated successfully
        // Perform any necessary actions such as showing a success message or redirecting
        console.log("Service saved successfully");
      } else {
        // Handle the error case
        console.log("Error saving service");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        {serviceId ? "Edit Service" : "New Service Indication"}
      </h1>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label className="block mb-2 font-medium" htmlFor="personalName">
            Personal Name
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            type="text"
            id="personalName"
            name="personalName"
            value={formData.personalName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium" htmlFor="block">
            Block
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            type="text"
            id="block"
            name="block"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium" htmlFor="apartment">
            Apartment
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            type="text"
            id="apartment"
            name="apartment"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium" htmlFor="serviceCategory">
            Service Category
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            type="text"
            id="serviceCategory"
            name="serviceCategory"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium" htmlFor="value">
            Value
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            type="text"
            id="value"
            name="value"
            required
          />
        </div>
        <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
          {serviceId ? "Update" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ServiceForm;
