import { NextApiRequest, NextApiResponse } from "next";
import Indication from "../../../models/IndicationModel";
import { connectToDatabase } from "../../../db/connectDatabase";


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

const indicationHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {

  const { method } = req;

  try {
    switch (method) {
      case "DELETE":
      await handleIndicationDelete(req, res)
      break;

      case "PUT":
      await handleIndicationUpdate(req, res)
      break;
      default:
        res.setHeader("Allow", ["PUT", "DELETE"]);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch(error){
    console.error("Error handling service request:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default indicationHandler;

