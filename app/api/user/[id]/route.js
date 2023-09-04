import { NextResponse } from "next/server";
import User from '@/models/user'
import connectMongoDB from "@/libs/mongodb";

export async function PUT(request, { params }) {
    try {
        const { id } = params;
        const {name,email,password,patient,role} = await request.json();
        if (!name || !email || !password || !patient) {
            return NextResponse.json({ message: "Todos los campos son requeridos" }, { status: 400 });
        }

        await connectMongoDB();
        const userfound = await User.findByIdAndUpdate(id, { name,email,password,patient,role });
        
        return NextResponse.json({ message: "usuario actualizado" }, { status: 200 });    
    } catch (error) {
        return NextResponse.error(error);
    }
}


export async function GET(request, { params }) {
    try {

    const { id } = params;
    await connectMongoDB();
    const evalId = id.includes('@');
    if (evalId) {
        let query = { email: id };
        const user = await User.findOne(query);
        return NextResponse.json({ user }, { status: 200 });
    }
    const user = await User.findOne({ _id: id });
    return NextResponse.json({ user }, { status: 200 });
    } catch (error) {
        console.log(error)
    }
}