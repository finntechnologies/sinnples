import { NextApiRequest, NextApiResponse } from "next";
import { IIndication } from "../../../modules/IndicationModel";
import { indicationsMock } from "./index";

export default function indicationHandler(
  req: NextApiRequest,
  res: NextApiResponse<IIndication>
) {
  const { query } = req;
  const { id } = query;
  const indication = indicationsMock.find((i) => i.id === id);

  return indication
    ? res.status(200).json(indication)
    : res.status(404).json({ message: `Indication with id: ${id} not found.` });
}
