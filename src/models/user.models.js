import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: String,
  name: String,
  role: {
    type: String,
    enum: ["customer", "admin"],
    default: "customer",
  },
  shippingAddress: {
    street: String,
    city: String,
    pincode: String,
    country: String,
  },
}, { timestamps: true });

export const User = mongoose.models.User || mongoose.model("User", userSchema);
