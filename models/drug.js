import { Schema, model } from "mongoose";

const drugSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
    },
  },
  { versionKey: false }
);

export default model("Drug", drugSchema);
