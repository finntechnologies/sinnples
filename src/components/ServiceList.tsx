import { useEffect, useState } from "react";

const ServiceList = ({ indications }) => {
  console.log({ indications });
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
          {(indications || []).map((indication) => (
            <tr key={indication?.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                {indication?.personalName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {indication?.block}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{indication?.ap}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {indication?.indicationCategory}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {indication?.value}
              </td>
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
