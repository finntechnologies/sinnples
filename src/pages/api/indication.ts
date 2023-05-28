import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from "../../db/connectDatabase";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method } = req;

    switch (method) {
      case "GET":
        await getIndications(req: NextApiRequest, res: NextApiResponse);
        break;
      case "POST":
        await createIndication(req: NextApiRequest, res: NextApiResponse);
        break;
      case "PUT":
        await updateIndication(req: NextApiRequest, res: NextApiResponse);
        break;
      case "DELETE":
        await deleteIndication(req: NextApiRequest, res: NextApiResponse);
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

const getIndications = async (req: NextApiRequest, res: NextApiResponse) => {
  const { db } = await connectToDatabase();
  const serviceCollection = db.collection("services");

  const indications = await serviceCollection.find().toArray();
  res.status(200).json(indications);
}

const createIndication = async (req: NextApiRequest, res: NextApiResponse) => {
  const { db } = await connectToDatabase();
  const serviceCollection = db.collection("services");

  const { personalName, block, apartment, serviceCategory, value } = req.body;

  const newIndication = {
    personalName,
    block,
    apartment,
    serviceCategory,
    value,
  };

  const result = await serviceCollection.insertOne(newIndication);
  res.status(201).json(result.ops[0]);
}

const updateIndication = async (req: NextApiRequest, res: NextApiResponse) => {
  const { db } = await connectToDatabase();
  const serviceCollection = db.collection("services");

  const { id } = req.query;
  const { personalName, block, apartment, serviceCategory, value } = req.body;

  const updatedIndication = {
    personalName,
    block,
    apartment,
    serviceCategory,
    value,
  };

  const result = await serviceCollection.updateOne(
    { _id: id },
    { $set: updatedIndication }
  );

  if (result.modifiedCount === 0) {
    res.status(404).json({ message: "Indication not found" });
  } else {
    res.status(200).json(updatedIndication);
  }
}

const deleteIndication = async (req: NextApiRequest, res: NextApiResponse) => {
  const { db } = await connectToDatabase();
  const serviceCollection = db.collection("services");

  const { id } = req.query;

  const result = await serviceCollection.deleteOne({ _id: id });

  if (result.deletedCount === 0) {
    res.status(404).json({ message: "Indication not found" });
  } else {
    res.status(200).json({ message: "Indication deleted successfully" });
  }
}

export default handler;
