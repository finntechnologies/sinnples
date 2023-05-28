import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../db/connectDatabase";

const indicationsMock = [
  {
    id: 1,
    personalName: "John Doe",
    block: "A",
    ap: 101,
    indicationCategory: "Plumbing",
    value: 50,
  },
  {
    id: 2,
    personalName: "Jane Smith",
    block: "B",
    ap: 202,
    indicationCategory: "Electrician",
    value: 75,
  },
];

const handleIndicationGetAll = async () => {
  const { db, error } = await connectToDatabase();

  if (error) {
    console.log({ error });

    return { indications: indicationsMock };
  }

  const serviceCollection = db.collection("services");

  const indications = await serviceCollection.find().toArray();
  return { indications };
};

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { indications } = await handleIndicationGetAll();
    res.status(200).json(indications);
  } catch (error) {
    console.error("Error fetching indications:", error);
    res.status(500).json({ message: "Error fetching indications" });
  }
};

export default handler;
