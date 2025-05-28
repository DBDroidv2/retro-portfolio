import React from 'react';
import { resumeData } from '../lib/resumeData';

const Summary = () => {
  const { summary } = resumeData;

  return (
    <section className="my-6 p-4 md:p-6 bg-space-bg/30 backdrop-blur-md border border-vivid-cyan/50 rounded-lg shadow-xl text-nineties-bg-alt"> {/* Adjusted padding */}
      <h3 className="text-xl md:text-2xl font-semibold mb-3 text-vivid-blue font-serif drop-shadow-sm">Summary</h3> {/* Adjusted size */}
      <p className="font-dot leading-normal text-sm md:text-base"> {/* Custom font, adjusted size */}
        {summary}
      </p>
    </section>
  );
};

export default Summary;
