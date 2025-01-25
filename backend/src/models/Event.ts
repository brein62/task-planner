import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
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
    isActive: { type: Boolean, required: true, default: true },
    // user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to the user
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", eventSchema);
