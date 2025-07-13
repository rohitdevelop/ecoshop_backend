import  mongoose from "mongoose";


const OrderItemsSchema = new mongoose.Schema({
    productId:{
        type: mongoose.Schema.Type.ObjectID,
        ref: "Product"
    },
    qauntity:{
        type: Number,
        required: true,
    },
})

const OrderSchema = new mongoose.Schema({
    TotalAmount:{
        type: Number,
        required:true
    },
    cuntomer:{
        type: mongoose.Schema.Type.ObjectID,
        ref: "User"
    },
    Useraddress:{
        type: mongoose.Schema.Type.ObjectID,
        ref: "User"
    },
    OrderItems:{
        type: [OrderItemsSchema]
    }

}, {timestamps: true});

export const Order = mongoose.models("Order", OrderSchema);