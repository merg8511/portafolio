import Image from "next/image";
import type { ProjectImage } from "@/data/projects";

type PhoneFrameProps = {
    image: ProjectImage;
};

export default function PhoneFrame({ image }: PhoneFrameProps) {
    return (
        <div className="relative w-full max-w-[240px] h-full max-h-[500px] mx-auto">
            {/* Phone Frame */}
            <div className="relative bg-[#1a1a1a] rounded-[3rem] p-2 shadow-2xl shadow-black/50 border border-white/10">
                {/* Screen */}
                <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.5rem] bg-[#0a0f18] mt-2">
                    <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="240px"
                        className="object-contain object-top"
                    />
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full" />
            </div>

            {/* Reflection/Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-b from-emerald-500/10 to-transparent rounded-[4rem] blur-2xl -z-10 opacity-50" />
        </div>
    );
}
