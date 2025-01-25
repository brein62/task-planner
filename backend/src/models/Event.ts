import mongoose, { Document, Model, Types } from "mongoose";
import { IUser } from "./User";

export interface IEvent extends Document {
  title: string;
  startDate: Date;
  endDate: Date;
  categories: string[]; // Array of strings
  location?: string; // Optional
  notes?: string; // Optional description (Markdown)
  url?: string; // Optional, validated URL
  isOnline: boolean; // Required field
  isAllDay: boolean; // Required field
  isActiveEvent: boolean; // Required field
  user: Types.ObjectId | IUser; // Reference to the user, populated or not
  createdAt: Date; // Automatically added by Mongoose timestamps
  updatedAt: Date; // Automatically added by Mongoose timestamps
}

const eventSchema = new mongoose.Schema<IEvent>(
  {
    title: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    categories: { type: [String], default: [] }, // Array of strings for categories
    location: { type: String }, // location for task to be submitted
    notes: { type: String }, // description styled as a Markdown string
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
    isAllDay: { type: Boolean, required: true, default: false },
    isActiveEvent: { type: Boolean, required: true, default: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to the user
  },
  { timestamps: true }
);

const Event: Model<IEvent> = mongoose.model<IEvent>("Event", eventSchema);

export default Event;
