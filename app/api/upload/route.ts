import { NextResponse } from "next/server";
import { createUploadUrl } from "../../../lib/storage";

export async function POST(request: Request) {
  const payload = (await request.json()) as {
    name: string;
    type: string;
    size: number;
  };

  const upload = await createUploadUrl(payload);

  return NextResponse.json({
    upload,
    message: "Use signedUrl to upload to cloud storage, then store metadata in notes collection."
  });
}
