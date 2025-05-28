import React from 'react';

const ExperienceItem = ({ experience }) => {
  const { company, role, duration, responsibilities } = experience;

  return (
    <div className="mb-4 p-3 md:p-4 bg-space-bg/20 backdrop-blur-sm border border-vivid-lime/30 rounded shadow-lg text-nineties-bg-alt"> {/* Adjusted padding */}
      <h4 className="text-base md:text-lg font-bold text-vivid-blue">{company}</h4> {/* Adjusted size */}
      <p className="font-dot text-sm md:text-base font-semibold text-vivid-lime">{role}</p> {/* Custom font, adjusted size */}
      <p className="font-dot text-xs md:text-sm text-nineties-bg-alt/70 mb-1">{duration}</p> {/* Custom font, adjusted size */}
      {responsibilities && responsibilities.length > 0 && (
        <ul className="font-dot list-disc list-inside space-y-0.5 pl-4 text-sm md:text-base"> {/* Custom font, adjusted size */}
          {responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExperienceItem;
