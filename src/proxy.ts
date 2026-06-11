import { readUIMessageStream } from "ai";
import { NextRequest, NextResponse, ProxyConfig } from "next/server";

export async function proxy(request: NextRequest) {
  //   const cookie = request.cookies.get("token");
  //   if (request.nextUrl.pathname.startsWith("/home") && !cookie) {
  //     console.log("去login");
  //     return NextResponse.redirect(new URL("/login", request.url));
  //   }
  //   if (cookie && cookie.value) {
  //     return NextResponse.next();
  //   }
  //   return NextResponse.redirect(new URL("/", request.url));
  //添加解决跨域的

  console.log("444444444444proxy start");
  const response = NextResponse.next();
  Object.entries(corsHeaders).forEach(([Key, value]) => {
    response.headers.set(Key, value);
  });
  return response;
}

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};
export const config: ProxyConfig = {
  matcher: ["/api/:path*"],
};
