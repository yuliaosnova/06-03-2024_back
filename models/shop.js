import { Schema, model } from "mongoose";

const shopSchema = new Schema({
  name: {
    type: String,
  },
  position: {
    lat: {
      type: String,
    },
    lng: {
      type: String,
    },
  },
});

export default model("Shop", shopSchema);
