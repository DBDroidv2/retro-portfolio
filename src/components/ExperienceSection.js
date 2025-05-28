import React from 'react';
import { resumeData } from '../lib/resumeData';
import ExperienceItem from './ExperienceItem';

const ExperienceSection = () => {
  const { experience } = resumeData;

  return (
    <section className="my-6 p-4 bg-space-bg/30 backdrop-blur-md border border-vivid-cyan/50 rounded-lg shadow-xl text-nineties-bg-alt">
      <h3 className="text-2xl font-semibold mb-3 text-vivid-blue font-serif drop-shadow-sm">Work Experience</h3>
      <div className="space-y-3">
        {experience.map((exp, index) => (
          <ExperienceItem key={index} experience={exp} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
