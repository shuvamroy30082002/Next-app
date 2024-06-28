import mongoose from "mongoose";

type ConnetionObject = {
  isConnected?: number;
};

const connection: ConnetionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("using existing connection");
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGO_URI || "", {});
    connection.isConnected = db.connections[0].readyState;
    console.log("DB Connected successfully");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

export default dbConnect; 
