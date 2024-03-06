import { Schema, model } from "mongoose";

const orderItemSchema = new Schema(
  {
    drug: {
      type: Schema.Types.ObjectId,
      ref: "drug",
      required: [true, "Drug ID is required"],
    },
    amount: {
      type: Number,
    },
  },
  { versionKey: false }
);

const orderSchema = new Schema(
  {
    customer: {
      username: {
        type: String,
        required: [true, "Add customer name"],
      },
      email: {
        type: String,
        required: [true, "Add customer email"],
      },
      phone: {
        type: String,
        required: [true, "Add customer phone"],
      },
      adress: {
        type: String,
      },
    },
    items: [orderItemSchema],
    shop: {
      type: String,
    },
    total: {
      type: Number,
    },
  },
  { versionKey: false, timestamps: true }
);

export default model("Order", orderSchema);
