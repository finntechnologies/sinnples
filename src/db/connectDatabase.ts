import { MongoClient } from "mongodb";

let cachedClient: MongoClient;

export const connectToDatabase = async () => {
  if (cachedClient && cachedClient.isConnected()) {
    return cachedClient;
  }

  if (!process.env.MONGODB_URI) {
    return {
      error: "mongodb uri not configured",
      client: null,
    };
  }

  const client = await MongoClient.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  cachedClient = client;
  return { client, error: null };
};
