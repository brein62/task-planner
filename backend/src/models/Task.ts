import mongoose, { Document, Model, Types } from "mongoose";
import { IUser } from "./User";

export interface ITask extends Document {
  title: string;
  dueDate?: Date; // Optional
  categories: string[]; // Array of strings
  location?: string; // Optional
  notes?: string; // Optional description (Markdown)
  status: "pending" | "completed" | "inactive"; // Enum with specific allowed values
  url?: string; // Optional, validated URL
  isOnline: boolean; // Required field
  user: Types.ObjectId | IUser; // Reference to the user, populated or not
  createdAt: Date; // Automatically added by Mongoose timestamps
  updatedAt: Date; // Automatically added by Mongoose timestamps
}

const taskSchema = new mongoose.Schema<ITask>(
  {
    title: { type: String, required: true },
    dueDate: { type: Date },
    categories: { type: [String], default: [] }, // Array of strings for categories
    location: { type: String }, // location for task to be submitted
    notes: { type: String }, // description styled as a Markdown string
    status: {
      type: String,
      enum: ["pending", "completed", "inactive"],
      default: "pending",
    },
    url: {
      type: String,
      validate: {
        validator: function (v: string) {
          return (
            !v ||
            /^(https?:\/\/)?([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})(\/\S*)?$/.test(v)
          ); // Allow empty or valid URLs
        },
        message: (props: { value: any }) =>
          `${props.value} is not a valid URL!`,
      },
    },
    isOnline: { type: Boolean, required: true, default: false },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to the user
  },
  { timestamps: true }
);

// Task model
const Task: Model<ITask> = mongoose.model<ITask>("Task", taskSchema);

export default Task;
