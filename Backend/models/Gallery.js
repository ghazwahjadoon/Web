import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema({
  title: String,
  image: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Gallery", gallerySchema);
