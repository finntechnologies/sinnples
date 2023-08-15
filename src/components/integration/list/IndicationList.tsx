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
      <ul className="flex flex-col divide-y w-full">{renderRows()}</ul>
  );
};

export default IndicationList;
