import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse, NextRequest } from "next/server";

type ResponseData = {
  message: string;
};

export async function POST(
  req: NextRequest,
  res: NextApiResponse<ResponseData>
) {
  const body = await req.json();
  const { name } = body;
  console.log(name);
  return NextResponse.json({ message: name });
}
