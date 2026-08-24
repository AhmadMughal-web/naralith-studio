import React, { useState, useEffect } from "react";

export default function RobotIcon({ className = "w-10 h-10", animated = false, ...props }) {
    const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 });
    const [isBlinking, setIsBlinking] = useState(false);

    useEffect(() => {
        if (!animated) return;

        const eyeMovementInterval = setInterval(() => {
            const positions = [
                { x: 0, y: 0 },    // Center
                { x: -2.5, y: 0 }, // Left
                { x: 2.5, y: 0 },  // Right
                { x: 0, y: -2 },   // Up
                { x: 0, y: 2 },    // Down
            ];
            const randomPos = positions[Math.floor(Math.random() * positions.length)];
            setEyeOffset(randomPos);
        }, 2500);

        const blinkInterval = setInterval(() => {
            setIsBlinking(true);
            setTimeout(() => setIsBlinking(false), 180);
        }, 3500);

        return () => {
            clearInterval(eyeMovementInterval);
            clearInterval(blinkInterval);
        };
    }, [animated]);

    return (
        <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`shrink-0 ${className}`}
            {...props}
        >
            <defs>
                <linearGradient id="robotHeadGrad" x1="50" y1="12" x2="50" y2="78" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="100%" stopColor="#E2E8F0" />
                </linearGradient>

                <linearGradient id="robotEarGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#334155" />
                    <stop offset="100%" stopColor="#0F172A" />
                </linearGradient>
            </defs>

            {/* Outer White Head Shell */}
            <ellipse cx="50" cy="45" rx="32" ry="26" fill="url(#robotHeadGrad)" stroke="#0F172A" strokeWidth="2.5" />

            {/* Ears */}
            <rect x="14" y="37" width="5" height="16" rx="2.5" fill="url(#robotEarGrad)" stroke="#0F172A" strokeWidth="1" />
            <rect x="81" y="37" width="5" height="16" rx="2.5" fill="url(#robotEarGrad)" stroke="#0F172A" strokeWidth="1" />

            {/* Headset Arc & Mic */}
            <path d="M 16 45 C 10 60, 22 75, 45 78" stroke="#0F172A" strokeWidth="4" strokeLinecap="round" fill="none" />
            <rect x="44" y="74" width="12" height="7" rx="3.5" fill="#EA580C" stroke="#0F172A" strokeWidth="1.5" />

            {/* Visor */}
            <ellipse cx="50" cy="45" rx="22" ry="16" fill="#0F172A" />

            {/* Dynamic Facial Features Group (Eyes + Lips synced together) */}
            <g
                className="transition-transform duration-300 ease-out"
                style={{ transform: `translate(${eyeOffset.x}px, ${eyeOffset.y}px)` }}
            >
                {/* Left Eye */}
                <ellipse
                    cx="40"
                    cy="44"
                    rx="3.5"
                    ry={isBlinking ? "0.5" : "5.5"}
                    fill="#38BDF8"
                    className="transition-all duration-150"
                />

                {/* Right Eye */}
                <ellipse
                    cx="60"
                    cy="44"
                    rx="3.5"
                    ry={isBlinking ? "0.5" : "5.5"}
                    fill="#38BDF8"
                    className="transition-all duration-150"
                />

                {/* Eye Highlights */}
                {!isBlinking && (
                    <>
                        <circle cx={38.5 + eyeOffset.x * 0.1} cy={41.5 + eyeOffset.y * 0.1} r="1.2" fill="#FFFFFF" />
                        <circle cx={58.5 + eyeOffset.x * 0.1} cy={41.5 + eyeOffset.y * 0.1} r="1.2" fill="#FFFFFF" />
                    </>
                )}

                {/* Synced Lips / Smile (Moves along with eyes) */}
                <path
                    d="M 45 51 Q 50 55 55 51"
                    stroke="#38BDF8"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                />
            </g>
        </svg>
    );
}