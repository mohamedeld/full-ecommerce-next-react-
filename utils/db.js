import mongoose from "mongoose";

const connection = {};

export async function connectDB(){
  if(connection.isConnected){
    console.log("Database connected successfully");
    return;
  }
  if(mongoose.connections.length > 0){
    connection.isConnected = mongoose.connections[0].readyState;
    if(connection.isConnected === 1){
      console.log("use previous connection to database");
      return;
    }
    await mongoose.disconnect();
  }
  const db = await mongoose.connect(process.env.mongodbURL);
  console.log("New connection to the database");  
  connection.isConnected = db.connections[0].readyState;
}