const people = [
  {
    name: "Leslie Alexander",
    email: "leslie.alexander@example.com",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Michael Foster",
    email: "michael.foster@example.com",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Dries Vincent",
    email: "dries.vincent@example.com",
    role: "Business Relations",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: null,
  },
  {
    name: "Lindsay Walton",
    email: "lindsay.walton@example.com",
    role: "Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Courtney Henry",
    email: "courtney.henry@example.com",
    role: "Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Tom Cook",
    email: "tom.cook@example.com",
    role: "Director of Product",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: null,
  },
];
const ServiceList = ({ indications = [] }) => {
  const row = (row) => {
    return (
      <tr key={row?.id}>
        <td className="px-6 py-4 whitespace-nowrap">{row?.name}</td>
        <td className="px-6 py-4 whitespace-nowrap">{row?.apartmentBlock}</td>
        <td className="px-6 py-4 whitespace-nowrap">{row?.apartment}</td>
        {/*<td className="px-6 py-4 whitespace-nowrap">*/}
        {/*  {row?.indicationCategory}*/}
        {/*</td>*/}
        {/*<td className="px-6 py-4 whitespace-nowrap">{row?.value}</td>*/}
        <td className="px-6 py-4 whitespace-nowrap">
          <button className="text-red-600">Remover</button>
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
    <div className="flex flex-col container max-w-md mt-10 mx-auto w-full items-center justify-center bg-white dark:bg-white-800 rounded-lg shadow">
      <ul className="flex flex-col divide-y w-full">
        {indications.map((indication) => (
          <li className="flex flex-row">
            <div className="select-none cursor-pointer hover:bg-blue-500 flex flex-1 items-center p-4">
              <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                <a href="#" className="block relative">
                  <img
                    alt="profil"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Noun_Project_tools_icon_943586_cc.svg/1024px-Noun_Project_tools_icon_943586_cc.svg.png"
                    className="mx-auto object-cover rounded-full h-10 w-10"
                  />
                </a>
              </div>
              <div className="flex-1 pl-1">
                <div className="font-medium text-black">
                  {indication.name}
                </div>
                <div className="text-gray-600 dark:text-gray-500 text-sm">
                  Bloco {indication.apartmentBlock} - Apartamento {indication.apartment}
                </div>
              </div>
              <div className="flex flex-row justify-center">
                <div className="font-medium dark:black">
                  {indication?.indicationCategory || '-'}
                </div>
                <button className="w-10 text-right flex justify-end">
                  <svg
                    width="20"
                    fill="currentColor"
                    height="20"
                    className="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
    // <ul role="list" className="divide-y divide-gray-100">
    //   {indications.map((indication) => (
    //     <li key={indication.id} className="flex justify-between gap-x-6 py-5">
    //       <div className="flex gap-x-4">
    //         <img
    //           className="h-12 w-12 flex-none rounded-full bg-gray-50"
    //           src={
    //             "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Noun_Project_tools_icon_943586_cc.svg/1024px-Noun_Project_tools_icon_943586_cc.svg.png"
    //           }
    //           alt=""
    //         />
    //         <div className="min-w-0 flex-auto">
    //           <p className="text-sm font-semibold leading-6 text-gray-900">
    //             {indication.name}
    //           </p>
    //           <p className="mt-1 truncate text-xs leading-5 text-gray-500">
    //             Bloco {indication.apartmentBlock} - Apartamento{" "}
    //             {indication.apartment}
    //           </p>
    //         </div>
    //         <div className="flex flex-row justify-center">
    //           <button className="w-10 text-right flex justify-end">
    //             <svg
    //               width="20"
    //               fill="currentColor"
    //               height="20"
    //               className="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500"
    //               viewBox="0 0 1792 1792"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
    //             </svg>
    //           </button>
    //         </div>
    //       </div>
    //     </li>
    //   ))}
    // </ul>
  );
};

export default ServiceList;
