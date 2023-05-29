import mongoose from "mongoose";

export const connectToDatabase = async () => {
  if (mongoose.connections[0].readyState) {
    // Reuse existing database connection
    return;
  }

  const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost/service-guru';

  console.log(MONGO_URI.slice(0, 15))

  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};

// import mongoose from "mongoose";
// import type { ConnectOptions } from "mongoose";
//
// export const connectMongo = (options: ConnectOptions) =>
//   new Promise((resolve, reject) => {
//     mongoose.connection
//       // Reject if an error ocurred when trying to connect to MongoDB
//       .on("error", (error) => {
//         // eslint-disable-next-line
//         console.log("ERROR: Connection to MongoDB failed");
//         reject(error);
//       })
//       // Exit Process if there is no longer a Database Connection
//       .on("close", () => {
//         // eslint-disable-next-line
//         console.log("ERROR: Connection to MongoDB lost");
//         process.exit(1);
//       })
//       // Connected to DB
//       .once("open", () => {
//         // Display connection information
//         const infos = mongoose.connections;
//         // eslint-disable-next-line
//         infos.map((info) =>
//           // eslint-disable-next-line
//           console.log(`Connected to ${info.host}:${info.port}/${info.name}`)
//         );
//         // Return sucessfull promisse
//         resolve();
//       });
//
//     mongoose.connect("mongodb://localhost/service-guru", options);
//   });
