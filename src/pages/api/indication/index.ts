import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../db/connectDatabase";
import Indication from "../../../models/IndicationModel";

const handleIndicationGetAll = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  await connectToDatabase();

  const indications = await Indication.find({});

  res.status(200).json(indications);
};

const handleIndicationAdd = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  // @todo validate body with yup or zod
  const body = req.body;
  const indication = await new Indication(body).save();

  return res.status(200).json(indication);
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method } = req;
    switch (method) {
      case "GET":
        await handleIndicationGetAll(req, res);
        break;
      case "POST":
        await handleIndicationAdd(req, res);
        break;
      default:
        res.setHeader("Allow", ["GET", "POST"]);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    console.error("Error handling service request:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default handler;
