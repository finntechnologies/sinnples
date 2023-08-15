import type { Document, Model, Types } from "mongoose";
import mongoose from "mongoose";

interface Indication {
  _id: Types.ObjectId;
  name: string;
  apartmentBlock: string;
  apartment: string;
  cep: string
}
export type IIndication = Document & Indication;

const Schema = new mongoose.Schema<IIndication>(
  {
    name: {
      type: String,
      required: true,
    },
    apartmentBlock: {
      type: String,
      required: true,
    },
    apartment: {
      type: String,
      required: true,
    },
    cep: {
      type: String,
      required: true,
    }
  },
  {
    collection: "Indication",
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

const IndicationModel: Model<IIndication> = mongoose.models.Indication || mongoose.model(
  "Indication",
  Schema
);

export default IndicationModel;
