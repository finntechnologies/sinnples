const ServiceList = ({ indications = [] }) => {
  const row = (row) => {
    return (
      <tr key={row?.id}>
        <td className="px-6 py-4 whitespace-nowrap">{row?.personalName}</td>
        <td className="px-6 py-4 whitespace-nowrap">{row?.block}</td>
        <td className="px-6 py-4 whitespace-nowrap">{row?.ap}</td>
        <td className="px-6 py-4 whitespace-nowrap">
          {row?.indicationCategory}
        </td>
        <td className="px-6 py-4 whitespace-nowrap">{row?.value}</td>
        <td className="px-6 py-4 whitespace-nowrap">
          <button className="text-red-600">Remove</button>
        </td>
      </tr>
    );
  };

  const renderRows = () => {
    if (indications.length === 0) {
      return null;
    }

    return indications.map((indication) => row(indication));
  };

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
          {renderRows()}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceList;
