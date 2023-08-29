import { NextResponse } from "next/server"; 
import User from '@/models/user'
import connectMongoDB from "@/libs/mongodb";

export async function POST(request) {
    try {
        //pide los datos que se registran en el formulario
        const { name,email,password, patient, role } = await request.json();
        //conecta a la base de datos
        await connectMongoDB();
        //crea un nuevo usuario con los datos del formulario    
        const user =  new User({ name,email,password,role,patient });
        //busca si el usuario ya existe
        const userfound = await User.findOne({ email: email });
        //si el usuario ya existe, retorna un mensaje de error
        if (userfound) {
            return NextResponse.json({ message: "El usuario ya existe" }, { status: 400 });
        }
        //si el usuario no existe, lo crea
        await User.create(user);
        //retorna un mensaje de usuario creado
        return NextResponse.json({ message: "Usuario creado" }, { status: 201 });
        
    } catch (error) {
        return NextResponse.json(error);
    }

}
export async function GET() {
    try { 
        //conecta a la base de datos
        await connectMongoDB();
        //busca todos los usuarios
        const Users = await User.find();
        //retorna los usuarios
        return NextResponse.json({ Users });   
    } catch (error) {
        return NextResponse.json(error);
    }
}

export async function DELETE(request) {
    try {
        const id = request.nextUrl.searchParams.get("id");
        await connectMongoDB();
        await User.findByIdAndDelete(id);
    return NextResponse.json({ message: "Usuario borrado" }, { status: 200 });
        
    } catch (error) {
        return NextResponse.json(error);
    }
}
