import  mongoose from "mongoose";

const ProductsSchema = new mongoose.Schema({
    tittle:{
        type: String,
        required:true
    },
    discription:{
        type: String,
        required:true
    },
    price:{
        type: Number,
        default:0,
        required:true
    },
    stock:{
        type: Number,
        default:0,
        required:true
    },
    category:{
        type: mongoose.Schema.Type.ObjectID,
        ref: "Category" ,
        required:true
    },
    productImage:{
        type: String,
        required:true
    },
    rating:{
        type: Number,
        default:true
    },
    owner:{
        type: mongoose.Schema.Type.ObjectID,
        ref: User
    },
}, {timestamps: true});

export const Product = mongoose.models("Product", ProductsSchema);