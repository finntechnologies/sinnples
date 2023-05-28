import { NextApiRequest, NextApiResponse } from "next";

const indications = [
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

export default function handler(
    _req: NextApiRequest,
    res: NextApiResponse
) {
  // Get data from your database
  res.status(200).json(indications)
}
