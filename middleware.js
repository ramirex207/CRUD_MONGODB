import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const next_url = process.env.NEXTAUTH_URL;
  if (!session) {
    const url = new URL(`${next_url}/login`);
    return NextResponse.redirect(url);
  }
  
  // Acceso solo a las páginas de administrador
  if (req.nextUrl.pathname.startsWith("/dashboard-Admin") && session?.user?.role !== 'admin') {
    const url = new URL(`${next_url}/dashboard`);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/dashboard-Admin/:path*"]
};
