import { connectionSrt } from "@/app/db/db";
import { Product } from "@/app/db/model/product";
import { NextResponse } from "next/server";
import { mongoose } from "mongoose";

export async function PUT(request,content){
    const productId = content.params.productid;
    const filter = {_id:productId};
    const payload = await request.json();
    console.log(payload);
    await mongoose.connect(connectionSrt);
    const result = await Product.findOneAndUpdate(filter,payload)
    return NextResponse.json({result,success:true});
}

export async function GET(request,content){
    const productId = content.params.productid;
    const filter = {_id:productId};
    await mongoose.connect(connectionSrt);
    const result = await Product.findById(filter);
    return NextResponse.json({result,success:true});
}

