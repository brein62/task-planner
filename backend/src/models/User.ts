import mongoose, { Document, Schema, Types } from "mongoose";
import { ITask } from "./Task";
import { IEvent } from "./Event";

/**
 * Interface for the User model, extending Mongoose's Document.
 * This interface defines the shape of a User document in the MongoDB collection
 * and helps TypeScript with type-checking and autocompletion.
 */
export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  passwordResetToken?: string;
  passwordResetTokenExpiration?: Date;
  isAdmin: boolean;
  tasks: Types.ObjectId[] | ITask[]; // Array of ObjectIds or populated Task objects
  events: Types.ObjectId[] | IEvent[]; // Array of ObjectIds or populated Task objects
}
/**
 * Mongoose schema for the User model.
 * Defines the structure, data types, and validation for each field.
 */
const userSchema = new mongoose.Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    passwordResetToken: {
      type: String,
      required: false,
    },
    passwordResetTokenExpiration: {
      type: Date,
      required: false,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }], // Reference to tasks
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

/**
 * User Model
 * This is the model that interacts with the MongoDB 'User' collection.
 */
const User = mongoose.model<IUser>("User", userSchema);

export default User;
