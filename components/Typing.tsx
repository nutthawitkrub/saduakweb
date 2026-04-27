"use client";

import React, { useState, useEffect } from 'react';


interface TypingProps {
    text: string,
    speed?: number,
    pause?: number,
    deleteSpeed? : number
}

const Typing: React.FC<TypingProps> = ({ text, speed = 50, pause = 1500, deleteSpeed = 30 }) => {
    const [displayText, setdisplayText] = useState('')
    const [index, setIndex] = useState(0)
    const [isDeleting, setisDeleting] = useState(false)

    useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && index < text.length) {
      // Typing forward
      timeout = setTimeout(() => {
        setdisplayText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, speed);
    } else if (!isDeleting && index === text.length) {
      // Finished typing → wait, then start deleting
      timeout = setTimeout(() => setisDeleting(true), pause);
    } else if (isDeleting && index > 0) {
      // Deleting characters
      timeout = setTimeout(() => {
        setdisplayText((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      }, deleteSpeed);
    } else if (isDeleting && index === 0) {
      // Finished deleting → start typing again
      setisDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text, speed, deleteSpeed, pause]);

    return (
        <p className='leading-tight  max-w-5xl mx-auto text-3xl tracking-tight'>
            {displayText}
            <span className='animate-pulse'>|</span>
        </p>
    )
}
export default Typing