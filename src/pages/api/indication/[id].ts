import { NextApiRequest, NextApiResponse } from "next";
import Indication, { IIndication } from "../../../modules/IndicationModel";
import { connectToDatabase } from "../../../db/connectDatabase";

const handleIndicationGet = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  await connectToDatabase();

  const { id } = req.query;

  if (!id) {
    res.status(404).json({ message: `Missing indication id` });
  }

  const indication = await Indication.findOne({
    _id: id,
  });

  res.status(200).json(indication);
};

const indicationHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<IIndication>
) => {
  await handleIndicationGet(req, res);
};

export default indicationHandler;
