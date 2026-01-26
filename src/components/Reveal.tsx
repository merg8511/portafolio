"use client";

import { motion, useReducedMotion } from "motion/react";
import { ReactNode } from "react";

type RevealProps = {
    children: ReactNode;
    className?: string;
    delay?: number;
    aboveFold?: boolean;
};


export default function Reveal({
    children,
    className,
    delay = 0,
    aboveFold = false,
}: RevealProps) {
    const reduce = useReducedMotion();

    // Si es above-the-fold o el usuario reduce motion:
    // NO ocultamos contenido al inicio.
    if (aboveFold || reduce) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut", delay }}
            viewport={{ once: true, amount: 0.2 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}