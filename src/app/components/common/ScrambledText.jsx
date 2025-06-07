// components/ScrambleText.jsx
import React, { useState, useEffect, useRef } from 'react';

/**
 * ScrambleText
 *
 * Props:
 *   - text (string):           the final text to reveal
 *   - duration (number, ms):   how long the scramble animation runs
 *   - delay (number, ms):      how long to wait before starting
 *   - speed (number, ms):      how often to refresh random chars
 *   - className (string):      additional CSS classes
 *   - active (boolean, opt.):  whether to run the scramble (default: true)
 *
 * Example:
 *   <ScrambleText
 *     text="HELLO"
 *     duration={2000}
 *     delay={500}
 *     speed={50}
 *     active={shouldAnimate}
 *     className="my-scramble"
 *   />
 */
export default function ScrambleText({
  text,
  duration = 2000,
  delay = 0,
  speed = 50,
  className = '',
  active = true,
}) {
  const [displayed, setDisplayed] = useState(text);
  const startTimeRef = useRef(null);
  const timeoutRef = useRef(null);
  const intervalRef = useRef(null);

  // Pool of symbols used for scrambling:
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz<>\\/[]{}________'.split(
    ''
  );
  const randomChar = () => letters[Math.floor(Math.random() * letters.length)];

  useEffect(() => {
    // Clear any existing timers/intervals:
    clearTimeout(timeoutRef.current);
    clearInterval(intervalRef.current);

    if (!active) {
      // If not active, immediately show the final text
      setDisplayed(text);
      return;
    }

    // Start with blank (or you could leave previous text if you prefer)
    setDisplayed('');

    // After `delay`, begin the scramble
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
          output += i < numRevealed ? text[i] : randomChar();
        }

        setDisplayed(output);

        if (progress >= 1) {
          // Once done, lock it in and clear
          setDisplayed(text);
          clearInterval(intervalRef.current);
        }
      }, speed);
    }, delay);

    return () => {
      // Cleanup on unmount or prop change
      clearTimeout(timeoutRef.current);
      clearInterval(intervalRef.current);
    };
  }, [text, duration, delay, speed, active]);

  return (
    <span
      className={className}
      style={{
        display: 'inline-block',
        position: 'relative',
        whiteSpace: 'pre',
      }}
    >
      {/* Reserve space */}
      <span style={{ visibility: 'hidden', whiteSpace: 'pre' }}>{text}</span>

      {/* Scrambled/visible text */}
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
