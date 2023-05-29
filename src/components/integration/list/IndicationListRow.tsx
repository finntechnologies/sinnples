import React from "react";
import { IndicationType } from "../IndicationTypes";

type IndicationListRowProps = {
  indication: IndicationType;
};
const IndicationListRow = ({ indication }: IndicationListRowProps) => {
  return (
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
          <div className="font-medium text-black">{indication.name}</div>
          <div className="text-gray-600 dark:text-gray-500 text-sm">
            Bloco {indication.apartmentBlock} - Apartamento{" "}
            {indication.apartment}
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <div className="font-medium dark:black">
            {indication?.indicationCategory || "-"}
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
  );
};

export default IndicationListRow;
