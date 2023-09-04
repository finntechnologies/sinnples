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
          <td  className="px-16 py-3.5 text-sm font-normal">
            <p className="text-gray-500 dark:text-gray-400 truncate w-24">{indication.name}</p>
          </td>
          <td  className="px-16 py-3.5 text-sm font-normal">
            <p className="text-gray-500 dark:text-gray-400 truncate w-24 ">{indication.category}</p>
          </td>
          <td  className="px-16 py-3.5 text-base font-medium text-gray-900 dark:text-white">
            <p className="text-gray-500 dark:text-gray-400 truncate w-24 ">{indication.apartmentBlock}</p>
          </td>
          <td  className="px-16 py-3.5 max-w-sm truncate text-base font-normal xl:max-w-xs">
            <p className="text-gray-500 dark:text-gray-400 truncate w-24 ">{indication.apartment}</p>
          </td>
          <td className="px-16 py-3.5 text-base font-medium text-gray-900 dark:text-white">
            <p className="text-gray-500 dark:text-gray-400 truncate w-24 ">{indication.cep}</p>
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
