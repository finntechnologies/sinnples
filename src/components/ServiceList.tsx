import { useEffect, useState } from "react";
const servicesMock = [
    {
        id: 1,
        personalName: 'John Doe',
        block: 'A',
        ap: 101,
        serviceCategory: 'Plumbing',
        value: 50,
    },
    {
        id: 2,
        personalName: 'Jane Smith',
        block: 'B',
        ap: 202,
        serviceCategory: 'Electrician',
        value: 75,
    },
    // Add more services here
];

const ServiceList = () => {
  const [services, setServices] = useState(servicesMock);

  useEffect(() => {
    fetch("/api/service")
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((error) => console.error("Error fetching services:", error));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Service List</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Personal Name
            </th>
            <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Block
            </th>
            <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Apartment
            </th>
            <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Service Category
            </th>
            <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Value
            </th>
            <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {services.map((service) => (
            <tr key={service.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                {service.personalName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{service.block}</td>
              <td className="px-6 py-4 whitespace-nowrap">{service.ap}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {service.serviceCategory}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{service.value}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="text-blue-600">Edit</button>
                <button className="text-red-600">Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceList;
