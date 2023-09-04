import { NextResponse } from "next/server"; 
import User from '@/models/user'
import connectMongoDB from "@/libs/mongodb";
import bcrypt from "bcrypt";

export async function POST(request) {
    try {
        //pide los datos que se registran en el formulario
        const { name,email,password, patient, role } = await request.json();
          //validacion de campos vacios
          if (!name || !email || !password) {
            return NextResponse.json({ message: "Todos los campos son requeridos" }, { status: 400 });
        }
        // Validación de longitud de nombre
        if (name.length < 3 || name.length > 50) {
            return NextResponse.json({ message: "el nombre debe contener al menos 3 caracteres" }, { status: 400 });
        }
         // Validación de formato de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json({ message: "el email ingresado no es valido" }, { status: 400 });
        }
         // Validación de longitud mínima del password (6 caracteres)
        // y presencia de al menos una letra y una mayúscula
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            return NextResponse.json({ message: "la contraseña debe contener al menos 6 caracteres y una mayuscula" }, { status: 400 });
        }
        //conecta a la base de datos
        await connectMongoDB();
        //crea un nuevo usuario con los datos del formulario    
        console.log(password)
        const user =  new User({ name,email,password: bcrypt.hashSync(password, 12),role,patient });
        //busca si el usuario ya existe
        console.log(user)
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
