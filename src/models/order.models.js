import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema({
  totalAmount: {
    type: Number,
    required: true,
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  shippingAddress: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  orderItems: [orderItemSchema],
}, { timestamps: true });

export const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);
