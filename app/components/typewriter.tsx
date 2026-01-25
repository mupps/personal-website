"use client";

import { useState, useEffect } from "react";

interface TypewriterProps {
    text: string;
    speed?: number;
    delay?: number;
}

export function Typewriter({ text, speed = 50, delay = 0 }: TypewriterProps) {
    const [displayText, setDisplayText] = useState("");
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            setStarted(true);
        }, delay);

        return () => clearTimeout(startTimeout);
    }, [delay]);

    useEffect(() => {
        if (!started) return;

        let i = 0;
        const intervalId = setInterval(() => {
            setDisplayText(text.slice(0, i + 1));
            i++;
            if (i > text.length) {
                clearInterval(intervalId);
            }
        }, speed);

        return () => clearInterval(intervalId);
    }, [text, speed, started]);

    return <span>{displayText}</span>;
}
