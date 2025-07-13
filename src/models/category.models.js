import  mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
}, {timestamps: true});

export const Category = mongoose.models("Category", UserSchema);