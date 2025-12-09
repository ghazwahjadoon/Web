import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
    },

    price: {
      type: Number,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    stock: {
      type: Number,
      required: true,
      default: 0,
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
    image:{
      type: String,
      required:false
    }
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
