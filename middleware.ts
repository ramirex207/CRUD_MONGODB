import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import {getToken} from "next-auth/jwt"

export async function middleware(req: NextRequest) {
    const session = await getToken({req,secret:process.env.NEXTAUTH_SECRET})
    //console.log(session)
    const next_url = process.env.NEXTAUTH_URL;
    //console.log(next_url)
    if(!session){
        const url= new URL(`${next_url}/login`)
        return NextResponse.redirect(url);
    }
    return NextResponse.next()
}
export const config = {
    matcher:['/dashboard/:path*']
}