import { NextResponse } from "next/server";
import User from '@/models/user'
import connectMongoDB from "@/libs/mongodb";

export async function PUT(request, { params }) {
    try {
        const { id } = params;
        const {name,email,password} = await request.json();
        
        await connectMongoDB();
        const userfound = await User.findByIdAndUpdate(id, { name,email,password });
        
        return NextResponse.json({ message: "user updated" }, { status: 200 });    
         
    } catch (error) {
        return NextResponse.error(error);
    }
}


export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const user = await User.findOne({ _id: id });
    return NextResponse.json({ user }, { status: 200 });
}
