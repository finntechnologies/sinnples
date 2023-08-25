import { IndicationType } from "../IndicationTypes";
import IndicationAdd from "../add/IndicationAdd";
import IndicationDelete from "../delete/IndicationDelete";

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
            <p className="text-gray-500 dark:text-gray-400 truncate w-64 flex justify-center">{indication.apartmentBlock}</p>
          </td>
          <td className="max-w-sm  truncate py-4 text-base font-normal xl:max-w-xs">
            <p className="text-gray-500 dark:text-gray-400 truncate w-56 flex justify-center">{indication.apartment}</p>
          </td>
          <td className="text-base font-medium text-gray-900 dark:text-white">
            <p className="text-gray-500 dark:text-gray-400 truncate w-48 flex justify-center">{indication.cep}</p>
          </td>
          <td className="space-x-2 whitespace-nowrap py-4">
            <IndicationAdd isEdit indicationId={indication._id}/>
            <IndicationDelete indicationId={indication._id} />
          </td>
        </tr>
      </tbody>
  )
};

export default IndicationListRow;
