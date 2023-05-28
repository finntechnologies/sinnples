import { NextApiRequest, NextApiResponse } from "next";
import Indication from "../../../modules/IndicationModel";

const indicationAddHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  // @todo validate body with yup or zod
  const body = JSON.parse(req.body);
  const indication = await new Indication(body).save();

  // User with id exists
  return res.status(200).json(indication);
};

export default indicationAddHandler;
