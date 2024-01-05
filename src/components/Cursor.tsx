'use client'

import { useEffect, useRef } from "react";
import { YonduArrow } from '../assets'

const Cursor = () => {
    const cursorRef = useRef<any>(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (cursor) {
            document.addEventListener("mousemove", (e) => {
                cursor.style.left = e.clientX - 25 + "px";
                cursor.style.top = e.clientY - 25 + "px";
            });
        }

        const gradientColors = [
            'rgba(0, 255, 0, 1)', // Green
            'rgba(0, 255, 255, 1)', // Cyan
            'rgba(0, 0, 255, 1)', // Blue
            'rgba(255, 0, 0, 1)', // Red
          ];
      
          // Set gradient background
          if(cursorRef && cursorRef.current){
              cursorRef.current.style.backgroundImage = `linear-gradient(to right, ${gradientColors.join(', ')})`;
          }
    }, []);

    return (
        <div
            ref={cursorRef}
            className="yondu-arrow w-10 h-10 rounded-full bg-black fixed pointer-events-none z-50"
        />
    );
};

export default Cursor;
