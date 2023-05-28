import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../db/connectDatabase";
import Indication from "../../../modules/IndicationModel";

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
  const body = JSON.parse(req.body);
  const indication = await new Indication(body).save();

  return res.status(200).json(indication);
};

const handleIndicationUpdate = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  await connectToDatabase();

  const { id } = req.query;
  const { name, apartmentBlock, apartment } = req.body;

  const updatedIndication = {
    name,
    apartmentBlock,
    apartment,
  };

  const indication = await Indication.findOneAndUpdate(
    { _id: id },
    { $set: updatedIndication },
    { new: true }
  );

  if (!indication) {
    res.status(404).json({ message: `Indication with ${id} not found` });
  } else {
    res.status(200).json(indication);
  }
};

const handleIndicationDelete = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { query } = req;
  const { id } = query;

  const indication = await Indication.findOneAndDelete({
    _id: id,
  });

  if (!indication) {
    return res
      .status(404)
      .json({ message: `Indication with id: ${id} not found.` });
  }

  return res
    .status(200)
    .json({ message: `Indication with id deleted successfully` });
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
      case "PUT":
        await handleIndicationUpdate(req, res);
        break;
      case "DELETE":
        await handleIndicationDelete(req, res);
        break;
      default:
        res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    console.error("Error handling service request:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default handler;
