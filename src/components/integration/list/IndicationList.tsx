import { IndicationType } from "../IndicationTypes";
import IndicationListRow from "./IndicationListRow";

type IntegrationListProps = {
  indications: IndicationType[] | null;
};

const IndicationList = ({ indications = [] }: IntegrationListProps) => {
  const renderRows = () => {
    if (!indications || !indications.length) {
      return "Comece agora e indique algo!";
    }

    return indications.map((indication) => {
      if (!indication) {
        return null;
      }
      return <IndicationListRow key={indication.id} indication={indication} />;
    });
  };

  return (
    <div className="flex flex-col container max-w-md mt-10 mx-auto w-full items-center justify-center bg-white dark:bg-white-800 rounded-lg shadow">
      <ul className="flex flex-col divide-y w-full">{renderRows()}</ul>
    </div>
  );
};

export default IndicationList;
