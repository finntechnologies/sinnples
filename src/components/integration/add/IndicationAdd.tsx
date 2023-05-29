import React, { useState } from "react";
import Layout from "../../Layout";

const IndicationAdd = () => {
  const [formData, setFormData] = useState({
    name: "",
    apartmentBlock: "",
    apartment: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/indication", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // @todo tailwind feedback
        console.log("Indication saved successfully");
      } else {
        // @todo tailwind feedback
        console.log("Error saving indication");
      }
    } catch (error) {
      // @todo tailwind feedback
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
    <Layout>
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-4">
          Nova Indicação
        </h1>
        <form onSubmit={handleSubmit} className="max-w-md">
          <div className="mb-4">
            <label className="block mb-2 font-medium" htmlFor="name">
              Nome
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium" htmlFor="apartmentBlock">
              Bloco do Apartamento
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              type="text"
              id="apartmentBlock"
              name="apartmentBlock"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium" htmlFor="apartment">
              Apartmento
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              type="text"
              id="apartment"
              name="apartment"
              required
            />
          </div>
          <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
            Indicar
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default IndicationAdd;
