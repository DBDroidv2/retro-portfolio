"use client"; // Mark as a Client Component

import React, { useState } from 'react'; // Import useState
import { resumeData } from '../lib/resumeData'; // Adjusted path

const Header = () => {
  const { name, title, contact } = resumeData;
  const [isEmailDropdownVisible, setIsEmailDropdownVisible] = useState(false);

  const toggleEmailDropdown = () => {
    setIsEmailDropdownVisible(!isEmailDropdownVisible);
  };

  return (
    <header className="bg-space-bg text-nineties-bg-alt p-6 text-center border-b-2 border-vivid-cyan shadow-lg relative"> {/* Changed bg, text, border */}
      <h1 className="text-4xl md:text-5xl font-my-name font-bold mb-2 text-vivid-blue drop-shadow-sm">{name}</h1> {/* Increased size, custom font */}
      <h2 className="text-xl md:text-3xl font-dot mb-4 text-vivid-cyan drop-shadow-sm">{title}</h2> {/* Increased size, custom font */}
      <div className="text-sm md:text-base font-dot space-y-1 md:space-y-0 md:space-x-4 text-nineties-bg-alt/80"> {/* Increased size, custom font */}
        <span>{contact.address}</span>
        <span className="hidden md:inline text-vivid-lime/50">|</span>
        <a href={`tel:${contact.phone}`}>{contact.phone}</a>
        <span className="hidden md:inline text-vivid-lime/50">|</span>
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </div>
      <div className="mt-4 space-x-2 md:space-x-4 flex flex-wrap justify-center gap-2"> {/* Added flex wrap for responsiveness */}
        <a href={contact.github} target="_blank" rel="noopener noreferrer" 
           className="inline-block bg-vivid-lime text-nineties-text px-4 py-2 md:px-5 md:py-2.5 rounded-lg border-2 border-nineties-border-light border-r-nineties-border-dark border-b-nineties-border-dark active:border-t-nineties-border-dark active:border-l-nineties-border-dark active:border-r-nineties-border-light active:border-b-nineties-border-light font-semibold hover:brightness-110 active:brightness-90 transition text-sm md:text-base"> {/* Adjusted padding, font size */}
          GitHub
        </a>
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer"
           className="inline-block bg-vivid-pink text-white px-4 py-2 md:px-5 md:py-2.5 rounded-lg border-2 border-nineties-border-light border-r-nineties-border-dark border-b-nineties-border-dark active:border-t-nineties-border-dark active:border-l-nineties-border-dark active:border-r-nineties-border-light active:border-b-nineties-border-light font-semibold hover:brightness-110 active:brightness-90 transition text-sm md:text-base"> {/* Adjusted padding, font size */}
          LinkedIn
        </a>
        <div className="inline-block relative">
          <button 
            onClick={toggleEmailDropdown}
            className="inline-block bg-vivid-blue text-white px-4 py-2 md:px-5 md:py-2.5 rounded-lg border-2 border-nineties-border-light border-r-nineties-border-dark border-b-nineties-border-dark active:border-t-nineties-border-dark active:border-l-nineties-border-dark active:border-r-nineties-border-light active:border-b-nineties-border-light font-semibold hover:brightness-110 active:brightness-90 transition text-sm md:text-base"> {/* Adjusted padding, font size */}
            Hire Me
          </button>
          {isEmailDropdownVisible && (
            <div className="absolute top-full right-0 mt-2 w-56 md:w-64 bg-nineties-bg-alt p-3 md:p-4 border-2 border-t-nineties-border-dark border-l-nineties-border-dark border-r-nineties-border-light border-b-nineties-border-light shadow-nineties-inset z-10 text-nineties-text text-left text-sm md:text-base"> {/* Adjusted width, padding, font size */}
              <p className="mb-2">Get in touch via email:</p>
              <a 
                href={`mailto:${contact.email}?subject=Job Opportunity / Inquiry`} 
                className="block w-full text-center bg-vivid-blue text-white px-3 py-2 rounded-md text-sm md:text-base hover:brightness-110 active:brightness-90 transition"> {/* Adjusted padding, font size */}
                Send Email to {contact.email}
              </a>
              <button 
                onClick={toggleEmailDropdown} 
                className="mt-3 text-xs md:text-sm text-gray-700 hover:underline"> {/* Adjusted font size */}
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
