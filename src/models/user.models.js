import  mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        unique: true,
        lowercase:true,
        required:true
    },
    email:{
        type: String,
        unique: true,
        lowercase:true,
        required:true
    },
    useraddress:{
        type: String,
        type: Number,
        required:true
    },
    PhoneNumber:{
        type: Number,
        required:true
    },
}, {timestamps: true});

export const User = mongoose.models("User", UserSchema);