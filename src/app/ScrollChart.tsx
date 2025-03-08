'use client';

import React, { useEffect, useRef } from 'react';
import './ScrollChart.css';

const ScrollAnimatedChart = () => {
    const pathRef = useRef<SVGPathElement>(null);

    useEffect(() => {
        const path = pathRef.current;

        if (!path) return;
        const pathLength = path.getTotalLength();

        // Set initial dash properties
        path.style.strokeDasharray = pathLength.toString();
        path.style.strokeDashoffset = pathLength.toString();

        // Handle scroll event
        const handleScroll = () => {
            const scrollPercentage =
                window.scrollY / (document.body.scrollHeight - window.innerHeight);
            const drawLength = pathLength * scrollPercentage;
            path.style.strokeDashoffset = (pathLength - drawLength).toString();
        };

        // Add scroll listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="chart-container">
            <svg
                version="1.1"
                style={{ fontFamily: 'Roboto', fontSize: '12px' }}
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 1200 800"
                preserveAspectRatio="xMidYMid slice"
                aria-hidden="true"
                className="chart"
            >
                <defs aria-hidden="true">
                    <clipPath id="chartClip">
                        <rect x="0" y="0" width="100%" height="100%" fill="none"></rect>
                    </clipPath>
                </defs>
                <g data-z-index="1" aria-hidden="true">
                    <path
                        fill="none"
                        stroke="#e6e6e6"
                        strokeWidth="1"
                        strokeDasharray="5,5"
                        d="M 0 200 L 1200 200"
                        opacity="0.2"
                    ></path>
                    <path
                        fill="none"
                        stroke="#e6e6e6"
                        strokeWidth="1"
                        strokeDasharray="5,5"
                        d="M 0 400 L 1200 400"
                        opacity="0.2"
                    ></path>
                    <path
                        fill="none"
                        stroke="#e6e6e6"
                        strokeWidth="1"
                        strokeDasharray="5,5"
                        d="M 0 600 L 1200 600"
                        opacity="0.2"
                    ></path>
                </g>
                <g data-z-index="3" aria-hidden="true">
                    <g
                        data-z-index="0.1"
                        opacity="1"
                        transform="translate(0,0) scale(2 2)"
                        clipPath="url(#chartClip)"
                    >
                        <path
                            ref={pathRef}
                            fill="none"
                            d="M 50 400 C 50 400 150 300 250 300 C 350 300 400 100 500 100 C 600 100 650 200 750 200 C 850 200 900 50 1000 50 C 1100 50 1150 150 1150 150"
                            stroke="#6f58e9"
                            strokeWidth="3"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            opacity="0.2"
                        ></path>
                    </g>
                </g>
            </svg>
        </div>
    );
};

export default ScrollAnimatedChart;