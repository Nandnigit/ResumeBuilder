// components/FormSection.js
import React from 'react';
import Details from '../inputFields/details'
import Experience from '../inputFields/Experince';
import Education from '../inputFields/Education';
import Skills from '../inputFields/Skills';

const FormSection = ({ activeSection, formData, handleInputChange, addField, deleteField }) => {
  switch (activeSection) {
    case 'Details':
      return <Details formData={formData} handleInputChange={handleInputChange} />;
    case 'Experience':
      return (
        <Experience
          experiences={formData.experiences || []}
          handleInputChange={handleInputChange}
          addExperience={() => addField('experiences')}
          deleteExperience={(index) => deleteField(index, 'experiences')}
        />
      );
    case 'Education':
      return (
        <Education
          educations={formData.educations || []}
          handleInputChange={handleInputChange}
          addEducation={() => addField('educations')}
          deleteEducation={(index) => deleteField(index, 'educations')}
        />
      );
    case 'Skills':
      return (
        <Skills
          skills={formData.skills || []}
          handleInputChange={handleInputChange}
          addSkill={() => addField('skills')}
          deleteSkill={(index) => deleteField(index, 'skills')}
        />
      );
    default:
      return null;
  }
};

export default FormSection;
