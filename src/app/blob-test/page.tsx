"use client";

import { upload } from "@vercel/blob/client";
import { useRef, useState } from "react";

export default function BlobTestPage() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [url, setUrl] = useState<string | null>(null);

    return (
        <main className="min-h-screen p-8">
            <div className="mx-auto max-w-xl space-y-4">
                <h1 className="text-2xl font-bold">BLOB UPLOAD TEST</h1>

                <form
                    className="space-y-3"
                    onSubmit={async (e) => {
                        e.preventDefault();
                        if (!inputRef.current?.files?.[0]) return;

                        const file = inputRef.current.files[0];

                        const result = await upload(file.name, file, {
                            access: "public",
                            handleUploadUrl: "/api/blob/upload",
                        });

                        setUrl(result.url);
                    }}
                >
                    <input
                        ref={inputRef}
                        type="file"
                        accept="image/jpeg,image/png,image/webp"
                        required
                    />
                    <button className="rounded-lg border px-4 py-2 hover:bg-black hover:text-white">
                        Upload
                    </button>
                </form>

                {url && (
                    <div className="space-y-2">
                        <p className="text-sm break-all">{url}</p>
                        {/* Para pruebas rápido usa <img>. Luego lo pasas a next/image */}
                        <img src={url} alt="Uploaded" className="rounded-xl border" />
                    </div>
                )}
            </div>
        </main>
    );
}
