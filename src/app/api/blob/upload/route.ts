import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const body = (await request.json()) as HandleUploadBody;

    try {
        const jsonResponse = await handleUpload({
            body,
            request,

            onBeforeGenerateToken: async () => {
                // Aquí luego puedes meter auth (si quieres evitar uploads anónimos)
                return {
                    allowedContentTypes: ["image/jpeg", "image/png", "image/webp"],
                    addRandomSuffix: true,
                    tokenPayload: JSON.stringify({}),
                };
            },

            onUploadCompleted: async ({ blob }) => {
                // Aquí podrías guardar blob.url en DB si algún día lo ocupas
                console.log("Upload completed:", blob.url);
            },
        });

        return NextResponse.json(jsonResponse);
    } catch (error) {
        return NextResponse.json(
            { error: (error as Error).message },
            { status: 400 }
        );
    }
}
