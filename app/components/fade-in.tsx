import React from "react";

export function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
    return (
        <div
            className={`animate-fade-in-up ${className}`}
            style={{ animationDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}
