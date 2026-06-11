import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

//登录成功后设置cookie
export async function POST(request: NextRequest) {
  const body = await request.json();
  const { username, password } = body;
  if (username === "admin" && password === "123456") {
    const cookieStore = await cookies();
    cookieStore.set("token", "123456", {
      httpOnly: true, //只允许在服务端访问
      maxAge: 60 * 60 * 24 * 30,
    });
    return NextResponse.json({ code: 1 }, { status: 200 });
  } else {
    return NextResponse.json({ code: 0 }, { status: 401 });
  }
}

//检查登录的cookie
export async function GET(request: NextRequest){
    const cookieStore = await cookies();
    const token = cookieStore.get('token');
    console.log('token',token)
    if(token && token.value === '123456'){
        return NextResponse.json({code: 1},{status: 200});
    } else {
        return NextResponse.json({code: 0}, {status: 401})
    }
}
