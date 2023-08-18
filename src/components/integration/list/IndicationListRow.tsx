import React from "react";
import { IndicationType } from "../IndicationTypes";

type IndicationListRowProps = {
  indication: IndicationType;
};
const IndicationListRow = ({ indication }: IndicationListRowProps) => {
  return (
      <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800 hover:bg-gray-700">
        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
          <td className="w-4 p-4">
            <div className="flex items-center">
              <input
                id="checkbox-{{ .id }}"
                aria-describedby="checkbox-1"
                type="checkbox"
                className="focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800" />
              <label htmlFor="checkbox-{{ .id }}" className="sr-only">
                checkbox
              </label>
            </div>
          </td>
          <td className="px-4 py-4 text-sm font-normal">
            <p className="text-gray-500 dark:text-gray-400 truncate w-40 flex justify-center">{indication.name}</p>
          </td>
          <td className="py-4 text-sm font-normal">
            <p className="text-gray-500 dark:text-gray-400 truncate w-56 flex justify-center">{indication.category}</p>
          </td>
          <td className=" text-base font-medium text-gray-900 dark:text-white">
            <p className="text-gray-500 dark:text-gray-400 truncate w-56 flex justify-center">{indication.apartmentBlock}</p>
          </td>
          <td className="max-w-sm  truncate py-4 text-base font-normal xl:max-w-xs">
            <p className="text-gray-500 dark:text-gray-400 truncate w-56 flex justify-center">{indication.apartment}</p>
          </td>
          <td className="text-base font-medium text-gray-900 dark:text-white">
            <p className="text-gray-500 dark:text-gray-400 truncate w-48 flex justify-center">{indication.cep}</p>
          </td>
          <td className="space-x-2 whitespace-nowrap py-4">
            <button
              type="button"
              id="updateProductButton"
              data-drawer-target="drawer-update-product-default"
              data-drawer-show="drawer-update-product-default"
              aria-controls="drawer-update-product-default"
              data-drawer-placement="right"
              className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 inline-flex items-center rounded-lg py-2 px-2 text-center text-sm font-medium text-white focus:ring-4"
            >
              <svg
                className="mr-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                <path
                  fillRule="evenodd"
                  d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                  clipRule="evenodd" />
              </svg>
              Update
            </button>

            <button
              type="button"
              data-drawer-target="drawer-example"
              data-drawer-show="drawer-example"
              aria-controls="drawer-example"
              data-drawer-placement="right"
              className="inline-flex items-center rounded-lg bg-red-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
            >
              <svg
                className="mr-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd" />
              </svg>
              Delete item
            </button>
          </td>
        </tr>
      </tbody>
  )
};

export default IndicationListRow;
