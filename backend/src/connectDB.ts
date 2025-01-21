// External libaries
import mongoose, { Mongoose } from "mongoose";

// Internal project modules
import { MONGODB_URI } from "./config";

/**
 * Connects to MongoDB using the provided connection URI.
 * 
 * This function establishes a connection to the MongoDB database using Mongoose. It logs a success message
 * upon a successful connection or an error message if the connection fails. It uses the URI specified 
 * in the `MONGODB_URI` environment variable.
 * 
 * @returns {Promise<void>} - Does not return a value but logs the connection status.
 */
const connectMongoDB = async (): Promise<void> => {
  try {
    // Attempt to connect to MongoDB with the provided URI
    const user_conn: Mongoose = await mongoose.connect(MONGODB_URI);
    console.log(`MongoDB connected: ${user_conn.connection.host}`);
  } catch (error) {
    if (error instanceof Error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
    } else {
        console.error('Unknown error connecting to MongoDB');
    }
  }
};

export default connectMongoDB;