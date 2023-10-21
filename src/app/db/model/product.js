import mongoose from "mongoose"

const productlist = new mongoose.Schema({
    name:String,
    category:String,
    storage:String,
    color:String
});

export const Product = mongoose.models.products ||  mongoose.model("products",productlist)