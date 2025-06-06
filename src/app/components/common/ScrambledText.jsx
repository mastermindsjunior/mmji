// components/ScrambleText.jsx
import React, { useState, useEffect, useRef } from 'react';

/**
 * ScrambleText
 *
 * Props:
 *   - text (string):   the final text to reveal
 *   - duration (number, in ms): how long the scramble animation runs before fully revealing
 *   - delay (number, in ms):    how long to wait before starting the scramble
 *   - speed (number, in ms):    how often to refresh random characters while scrambling
 *   - className (string, optional): any additional CSS classNames to apply to the outer wrapper
 *
 * Example:
 *   <ScrambleText
 *     text="HELLO WORLD"
 *     duration={2000}
 *     delay={500}
 *     speed={50}
 *     className="my-scramble"
 *   />
 */
export default function ScrambleText({
  text,
  duration = 2000,
  delay = 0,
  speed = 50,
  className = '',
}) {
  const [displayed, setDisplayed] = useState('');
  const startTimeRef = useRef(null);
  const timeoutRef = useRef(null);
  const intervalRef = useRef(null);

  // Pool of symbols used for scrambling:
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz<>\\/[]{}________'.split(
    ''
  );
  const randomChar = () => letters[Math.floor(Math.random() * letters.length)];

  useEffect(() => {
    // If props change or unmount, clear any pending timers/intervals:
    clearTimeout(timeoutRef.current);
    clearInterval(intervalRef.current);
    setDisplayed(''); // start blank each time props change

    // After `delay`, begin the interval-based scramble:
    timeoutRef.current = setTimeout(() => {
      startTimeRef.current = Date.now();

      intervalRef.current = setInterval(() => {
        const now = Date.now();
        const elapsed = now - startTimeRef.current;
        const progress = Math.min(elapsed / duration, 1);
        const totalChars = text.length;
        const numRevealed = Math.floor(progress * totalChars);

        let output = '';
        for (let i = 0; i < totalChars; i++) {
          if (i < numRevealed) {
            output += text[i];
          } else {
            output += randomChar();
          }
        }

        setDisplayed(output);

        if (progress >= 1) {
          // Once fully revealed, show exact text and clear interval:
          setDisplayed(text);
          clearInterval(intervalRef.current);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeoutRef.current);
      clearInterval(intervalRef.current);
    };
  }, [text, duration, delay, speed]);

  return (
    <span
      className={className}
      style={{
        display: 'inline-block',
        position: 'relative',
        whiteSpace: 'pre',
      }}
    >
      {/* 
        Invisible final text reserves the exact width.
        Using visibility:hidden → it occupies space but isn't seen.
      */}
      <span style={{ visibility: 'hidden', whiteSpace: 'pre' }}>{text}</span>

      {/*
        Absolutely positioned scramble text on top.
        Because parent is position:relative, top/left:0 aligns it exactly.
      */}
      <span
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          whiteSpace: 'pre',
        }}
      >
        {displayed}
      </span>
    </span>
  );
}
