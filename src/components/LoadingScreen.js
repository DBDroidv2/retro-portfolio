"use client"; // Needs to be a client component if we add animations or effects later

import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-nineties-bg z-50 flex flex-col items-center justify-center text-nineties-text p-4 md:p-8"> {/* Adjusted padding */}
      <h1 className="text-3xl md:text-5xl font-my-name text-vivid-blue mb-4 text-center"> {/* Custom font, adjusted size */}
        Welcome to the 90s Internet!
      </h1>
      <div className="w-full max-w-xs md:max-w-md bg-nineties-border p-1 border-2 border-t-nineties-border-dark border-l-nineties-border-dark border-r-nineties-border-light border-b-nineties-border-light mb-4"> {/* Adjusted max-width */}
        <div className="h-6 bg-vivid-blue animate-pulse"></div> {/* Simple pulse for "loading" bar */}
      </div>
      <p className="font-dot text-base md:text-lg text-nineties-primary"> {/* Custom font, adjusted size */}
        Please wait while we dial up the experience...
      </p>
      {/* You could add a pixelated modem sound icon or similar 90s graphic here later */}
    </div>
  );
};

export default LoadingScreen;
