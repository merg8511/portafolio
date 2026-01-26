import { SampleRequest } from "@/data/projects";

type CodeBlockProps = {
    sample: SampleRequest;
};

export default function CodeBlock({ sample }: CodeBlockProps) {
    return (
        <div className="grid gap-4 md:grid-cols-2">
            {/* Request */}
            <div className="bg-slate-950 border border-white/10 rounded-xl overflow-hidden">
                <div className="px-4 py-2 bg-slate-900/50 border-b border-white/5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="text-xs font-semibold text-slate-400">REQUEST</span>
                </div>
                <div className="p-4 font-mono text-sm space-y-3">
                    {/* Method + Endpoint */}
                    <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 text-xs font-bold rounded bg-blue-500/20 text-blue-400">
                            {sample.method}
                        </span>
                        <span className="text-slate-300">{sample.endpoint}</span>
                    </div>

                    {/* Headers */}
                    {sample.headers && (
                        <div className="text-slate-500 text-xs">
                            {sample.headers.split('\n').map((header, i) => (
                                <div key={i}>{header}</div>
                            ))}
                        </div>
                    )}

                    {/* Body */}
                    {sample.body && (
                        <pre className="text-cyan-400 text-xs overflow-x-auto bg-slate-900/50 rounded-lg p-3">
                            {sample.body}
                        </pre>
                    )}
                </div>
            </div>

            {/* Response */}
            {sample.response && (
                <div className="bg-slate-950 border border-white/10 rounded-xl overflow-hidden">
                    <div className="px-4 py-2 bg-slate-900/50 border-b border-white/5 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span className="text-xs font-semibold text-slate-400">RESPONSE</span>
                    </div>
                    <div className="p-4">
                        <pre className="font-mono text-emerald-400 text-xs overflow-x-auto bg-slate-900/50 rounded-lg p-3">
                            {sample.response}
                        </pre>
                    </div>
                </div>
            )}
        </div>
    );
}
