import { Endpoint } from "@/data/projects";

const methodColors: Record<string, string> = {
    GET: "bg-emerald-500/20 text-emerald-400",
    POST: "bg-blue-500/20 text-blue-400",
    PUT: "bg-amber-500/20 text-amber-400",
    DELETE: "bg-red-500/20 text-red-400",
    PATCH: "bg-violet-500/20 text-violet-400",
};

type EndpointsTableProps = {
    endpoints: Endpoint[];
    baseUrl?: string;
};

export default function EndpointsTable({ endpoints, baseUrl }: EndpointsTableProps) {
    return (
        <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-950">
            {/* Header */}
            <div className="px-4 py-3 bg-slate-900/50 border-b border-white/5 flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-300">Endpoints</span>
                {baseUrl && (
                    <span className="text-xs text-slate-500 font-mono">{baseUrl}</span>
                )}
            </div>

            {/* Table */}
            <div className="divide-y divide-white/5">
                {endpoints.map((endpoint, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-4 px-4 py-3 hover:bg-white/[0.02] transition-colors"
                    >
                        <span
                            className={`px-2 py-1 text-xs font-bold rounded min-w-[60px] text-center ${methodColors[endpoint.method]}`}
                        >
                            {endpoint.method}
                        </span>
                        <span className="font-mono text-sm text-slate-300 flex-1">
                            {endpoint.path}
                        </span>
                        {endpoint.label && (
                            <span className="text-xs text-slate-500 hidden sm:block">
                                {endpoint.label}
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
