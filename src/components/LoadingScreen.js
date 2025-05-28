"use client";

import React, { useState, useEffect } from 'react';

const loadingMessages = [
  "INITIATING NEURAL INTERFACE...",
  "ACCESSING DATA STREAMS...",
  "DECRYPTING ENCRYPTED PROTOCOLS...",
  "SYNCHRONIZING CYBERNETIC IMPLANTS...",
  "ESTABLISHING SECURE CONNECTION...",
  "LOADING REALITY SIMULATION...",
  "COMPILING DIGITAL ESSENCE...",
  "PATCHING OPTICAL SENSORS...",
  "PREPARING VIRTUAL ENVIRONMENT...",
  "SCANNING FOR ANOMALIES...",
  "UPLOADING CONSCIOUSNESS...",
  "DIALING UP THE MATRIX..."
];

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(loadingMessages[0]);

  useEffect(() => {
    const totalDuration = 3000; // Matches the duration in layout.js
    const intervalTime = 50; // Update every 50ms
    const steps = totalDuration / intervalTime;
    let currentStep = 0;

    const progressInterval = setInterval(() => {
      currentStep++;
      const newProgress = (currentStep / steps) * 100;
      setProgress(Math.min(newProgress, 100)); // Cap at 100%

      // Randomly change loading message
      if (Math.random() < 0.3) { // 30% chance to change message on each step
        const randomIndex = Math.floor(Math.random() * loadingMessages.length);
        setCurrentMessage(loadingMessages[randomIndex]);
      }

      if (newProgress >= 100) {
        clearInterval(progressInterval);
      }
    }, intervalTime);

    return () => clearInterval(progressInterval);
  }, []);

  return (
    <div className="fixed inset-0 bg-nineties-bg z-50 flex flex-col items-center justify-center text-nineties-text p-4 md:p-8 overflow-hidden loading-overlay"> {/* Removed 'relative' as 'fixed' is sufficient and 'absolute' children will position relative to viewport */}
      <h1 className="text-3xl md:text-5xl font-my-name text-vivid-blue mb-4 text-center">
        Welcome to the 90s Internet!
      </h1>
      <div className="w-full max-w-xs md:max-w-md bg-nineties-border p-1 border-2 border-t-nineties-border-dark border-l-nineties-border-dark border-r-nineties-border-light border-b-nineties-border-light mb-4">
        <div 
          className="h-6 bg-vivid-blue transition-all duration-100 ease-linear" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="font-dot text-base md:text-lg text-vivid-lime text-center mt-2">
        {currentMessage}
      </p>
    </div>
  );
};

export default LoadingScreen;
