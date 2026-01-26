// src/components/ApiPreviewCard.tsx
import type { Endpoint } from "@/data/projects";

const methodColors: Record<string, string> = {
    GET: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    POST: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    PUT: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    DELETE: "bg-red-500/20 text-red-400 border-red-500/30",
    PATCH: "bg-violet-500/20 text-violet-400 border-violet-500/30",
};

type ApiPreviewCardProps = {
    endpoints: Endpoint[];
    baseUrl?: string;
    maxEndpoints?: number;
    className?: string; // ✅ allow sizing from parent (h-full)
};

export default function ApiPreviewCard({
    endpoints,
    baseUrl,
    maxEndpoints = 4,
    className = "",
}: ApiPreviewCardProps) {
    const displayEndpoints = endpoints.slice(0, maxEndpoints);
    const hasMore = endpoints.length > maxEndpoints;

    return (
        <div
            className={[
                "bg-slate-950 border border-white/10 rounded-xl overflow-hidden",
                "h-full flex flex-col", // ✅ full-height + proper internal layout
                className,
            ].join(" ")}
        >
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 border-b border-white/5 shrink-0">
                <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>

                <span className="text-xs font-medium text-slate-500 ml-2">
                    API PREVIEW
                </span>

                {baseUrl && (
                    <span className="text-xs text-slate-600 ml-auto font-mono">
                        {baseUrl}
                    </span>
                )}
            </div>

            {/* Endpoints List */}
            <div className="p-4 space-y-2 font-mono text-sm flex-1">
                {displayEndpoints.map((endpoint, index) => {
                    const badge =
                        methodColors[endpoint.method] ??
                        "bg-slate-500/15 text-slate-200 border-slate-500/25";

                    return (
                        <div key={index} className="flex items-center gap-3">
                            <span
                                className={`px-2 py-0.5 text-xs font-bold rounded border ${badge}`}
                            >
                                {endpoint.method}
                            </span>
                            <span className="text-slate-300">{endpoint.path}</span>
                        </div>
                    );
                })}

                {hasMore && (
                    <div className="text-slate-500 text-xs pt-1">
                        +{endpoints.length - maxEndpoints} more endpoints
                    </div>
                )}
            </div>
        </div>
    );
}
