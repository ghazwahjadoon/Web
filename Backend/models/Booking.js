import mongoose from "mongoose" ;

const bookingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,  
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: false, // optional (because your zod made phone optional)
    },
    contactMethod: {
      type: String,
      enum: ["Email", "Phone", "Either"],
      required: true,
    },
    service: {
      type: String,
      required: true,
    },
    datetime: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);