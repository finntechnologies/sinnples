import { MongoClient } from "mongodb";

let cachedClient: MongoClient;

export const connectToDatabase = async () => {
  if (cachedClient && cachedClient.isConnected()) {
    return cachedClient;
  }

  console.log({ "process.env.MONGODB_URI": process.env.MONGODB_URI });
  const client = await MongoClient.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log({ client });

  cachedClient = client;
  return client;
};
