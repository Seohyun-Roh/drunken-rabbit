import { Schema, model } from "mongoose";

const WineSchema = new Schema({
  country: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  variety: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});
const WineModel = model("Wine", WineSchema);
export { WineModel };
