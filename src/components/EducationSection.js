import React from 'react';
import { resumeData } from '../lib/resumeData';

const EducationSection = () => {
  const { education } = resumeData;

  return (
    <section className="my-6 p-4 md:p-6 bg-space-bg/30 backdrop-blur-md border border-vivid-cyan/50 rounded-lg shadow-xl text-nineties-bg-alt"> {/* Adjusted padding */}
      <h3 className="text-xl md:text-2xl font-semibold mb-3 text-vivid-cyan font-serif drop-shadow-sm">Education</h3> {/* Adjusted size */}
      <div className="space-y-3">
        {education.map((edu, index) => (
          <div key={index} className="p-3 md:p-4 bg-space-bg/20 backdrop-blur-sm border border-vivid-lime/30 rounded shadow-lg text-nineties-bg-alt"> {/* Adjusted padding */}
            <h4 className="text-base md:text-lg font-bold text-vivid-blue">{edu.institution}</h4> {/* Adjusted size */}
            <p className="font-dot text-sm md:text-base font-semibold text-vivid-lime">{edu.degree}</p> {/* Custom font, adjusted size */}
            <p className="font-dot text-xs md:text-sm text-nineties-bg-alt/70">{edu.year}</p> {/* Custom font, adjusted size */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
