import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest,{params}:{params:Promise<{id: string}>}){
  const {id} = await params;
  return NextResponse.json(`hi ${id}`)


}

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log(22222,body);
  return NextResponse.json({message:'success',body},{status:201})

}
