import React from 'react';
import { resumeData } from '../lib/resumeData';

const Skills = () => {
  const { skills } = resumeData;

  return (
    <section className="my-6 p-4 md:p-6 bg-space-bg/30 backdrop-blur-md border border-vivid-cyan/50 rounded-lg shadow-xl text-nineties-bg-alt"> {/* Adjusted padding */}
      <h3 className="text-xl md:text-2xl font-semibold mb-3 text-vivid-cyan font-serif drop-shadow-sm">Skills</h3> {/* Adjusted size */}
      <ul className="flex flex-wrap gap-2 md:gap-3"> {/* Adjusted gap */}
        {skills.map((skill, index) => (
          <li key={index} className="bg-vivid-lime text-nineties-text font-dot px-3 py-1 md:px-4 md:py-1.5 rounded text-sm md:text-base shadow-sm hover:brightness-110 active:brightness-90 transition"> {/* Custom font, adjusted size/padding */}
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
