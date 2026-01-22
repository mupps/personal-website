import { FadeIn } from "../components/fade-in";
import React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <FadeIn>
            {children}
        </FadeIn>
    );
}
