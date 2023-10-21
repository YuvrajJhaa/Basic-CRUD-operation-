import { connectionSrt } from "@/app/db/db";
import { Product } from "@/app/db/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    await mongoose.connect(connectionSrt);

    try {
        const data = await Product.find();
        console.log(data);
        return NextResponse.json({result:data,success:true})    
    } catch (error) {
        return NextResponse.json({result:false,success:false})
    }
}
export async function POST(request){
    const payload = await request.json();
    await mongoose.connect(connectionSrt);
    // let product = new Product({
    //     name:"Apple iPhone 14 Pro",
    //     category:"Mobile",
    //     storage: "128GB",
    //     color: "black"
    // })
    const product = new Product(payload)

    const result = await product.save();
    return NextResponse.json({result,success:true})
}