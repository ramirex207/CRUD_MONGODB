import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from '@/models/user'
import connectMongoDB from "@/libs/mongodb";
import bcrypt from "bcrypt";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
                
            },
            async authorize(credentials,req) {
                await connectMongoDB();
                const userFound = await User.findOne({ email: credentials?.email });
                if(!userFound) throw new Error("User not found");
                const isMatch = await bcrypt.compare(credentials.password,userFound.password);
                //console.log(isMatch)
                if(!isMatch) throw new Error("Password incorrect");
                return userFound;
            }
        })
    ],
    callbacks: {
        jwt({account,token,user,session,profile}){
            if(user) token.user = user;
            //console.log(token)
            return token;
        },
        session({session,token}){
            session.user = token.user;
            //console.log(session,token)
            return session;
        }
    
    },
    pages: {
        signIn: '/login',
    },
    
});
export { handler as GET, handler as POST }