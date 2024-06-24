import React, { useState, useEffect } from 'react';

const Template1 = ({
  data = {},
  boxBgColor,
  font,
  textSize,
  sectionSpacing,
  paragraphSpacing,
  lineSpacing,
  isPreviewScreen,
  isTemplate1Previewing,
  predefinedText = {},
}) => {


  
  // Define classes based on props
  const textSizeClass = textSize === 'small' ? 'text-sm' : textSize === 'medium' ? 'text-base' : 'text-lg';
  const sectionSpacingClass = sectionSpacing === 'small' ? 'space-y-2' : sectionSpacing === 'medium' ? 'space-y-4' : 'space-y-6';
  const paragraphSpacingClass = paragraphSpacing === 'small' ? 'mb-2' : paragraphSpacing === 'medium' ? 'mb-4' : 'mb-6';
  const lineHeightClass = lineSpacing === '1' ? 'leading-tight' : lineSpacing === '1.5' ? 'leading-snug' : 'leading-relaxed';

  // Provide default values for data properties
  const { details = [], experiences = [], educations = [], skills = [], sectionadd = [], summary = [] } = data;

  // Debug logs to trace the data flow
  useEffect(() => {
    console.log("data: ", data);
    console.log("details: ", details);
    console.log("experiences: ", experiences);
    console.log("educations: ", educations);
    console.log("skills: ", skills);
    console.log("sectionadd: ", sectionadd);
    console.log("summary: ", summary);
  }, [data]);

  // State variables to track user input
  const [userDetails, setUserDetails] = useState('');
  const [userExperiences, setUserExperiences] = useState('');
  const [userEducations, setUserEducations] = useState('');
  const [userSkills, setUserSkills] = useState('');
  const [userAdditionalSections, setUserAdditionalSections] = useState('');
  const [userSummary, setUserSummary] = useState('');

  // Generic function to check if all required fields are filled
  const areAllFieldsFilled = (item, fields) => {
    return fields.every(field => item[field] && item[field].trim() !== '');
  };

  // Check if all details are filled
  const allDetailsFilled = details.every(detail =>
    areAllFieldsFilled(detail, ['Profession', 'phoneNumber', 'email', 'link', 'address', 'name'])
  );

  const allDetailsFilled2 = experiences.every(experience =>
    areAllFieldsFilled(experience, ['Company', 'month1', 'role', 'companydescription'])
  );

  const allDetailsFilled3 = educations.every(education =>
    areAllFieldsFilled(education, ['schoolname', 'edmonth1', 'edmonth2', 'coursename'])
  );

  const allDetailsFilled4 = skills.every(skill =>
    areAllFieldsFilled(skill, ['skillname', 'skilldetails'])
  );

  const allDetailsFilled5 = sectionadd.some(section => areAllFieldsFilled(section, ['sectiontitle', 'sectiondescription']));

  const allDetailsFilled6 = summary.some(summar => summar.summarydescription.trim() !== '');

  return (
    <div
      className={`border-2 border-gray-300 p-7 ${textSizeClass} ${sectionSpacingClass} ${lineHeightClass}`}
      style={{ fontFamily: font }}
    >
      {/* Red circle indicating all fields are filled */}
      {!isPreviewScreen && !isTemplate1Previewing && (
        <div className="">
          {allDetailsFilled && (
            <div className="w-7 h-7 ps-2.5 mt-3 bg-white rounded-2xl absolute top-48 left-10 font-bold">1</div>
          )}
          {allDetailsFilled2 && (
            <div className="w-7 h-8 ps-2.5 pt-0.5 mt-2 bg-white rounded-2xl absolute top-60 left-10 font-bold">2</div>
          )}
          {allDetailsFilled3 && (
            <div className="w-7 h-8 ps-2.5 pt-0.5 mt-2 bg-white rounded-2xl absolute top-72 left-10 font-bold">3</div>
          )}
          {allDetailsFilled4 && (
            <div className="w-7 h-8 ps-2.5 mt-6 bg-white rounded-2xl absolute top-80 left-10 font-bold">4</div>
          )}
          {allDetailsFilled5 && (
            <div className="w-7 h-7 ps-2.5 mt-14 bg-white rounded-2xl absolute top-96 left-10 font-bold">6</div>
          )}
          {allDetailsFilled6 && (
            <div className="w-7 h-7 ps-2.5 mt-2 bg-white rounded-2xl absolute top-96 left-10 font-bold">5</div>
          )}
        </div>
      )}

      <div>
        {/* User details */}
{details.map((del, index) => (
  <div key={index}>
    <h3 className="text-xs sm:text-sm md:text-2xl lg:text-3xl text-cyan-600 font-bold ms-2 ">
      {del.name || predefinedText.details.name}
    </h3>
    <p className="text-xs sm:text-sm md:text-xl lg:text-lg ms-2">
      {del.Profession || predefinedText.details.profession}
    </p>

    <ul className="flex text-xs sm:text-sm md:text-xs lg:text-xs m-2 gap-2">
      <li>{del.address || predefinedText.details.address}</li>
      <li className={`${del.phoneNumber ? 'before:content-["●"] before:m-2 font' : ''}  break-all`}>
        {del.phoneNumber || predefinedText.details.phoneNumber}
      </li>
      <li className={`${del.email ? 'before:content-["●"] before:m-2' : ''} w-2/2 break-all`}>
        {del.email || predefinedText.details.email}
      </li>
      <li className={`${del.link ? 'before:content-["●"] before:m-2' : ''} w-2/2 break-all`}>
        <a href={del.link || '#'}>{del.link || predefinedText.details.link}</a>
      </li>
      <li className={`${del.github ? 'before:content-["●"] before:m-2' : ''} w-2/2 break-all`}>
        <a href={del.github || '#'}>{del.github || predefinedText.details.github}</a>
      </li>
      <li className={`${del.projects ? 'before:content-["●"] before:m-2' : ''} w-2/2 break-all`}>
        <a href={del.projects || '#'}>{del.projects || predefinedText.details.projects}</a>
      </li>
    </ul>
    {summary.map((sum, index) => (
      <div key={index}>
        <p className={`${paragraphSpacingClass} text-xs sm:text-sm md:text-sm lg:text-sm m-2 w-2/2 break-all`}>
          {sum.summarydescription || predefinedText.summary.summarydescription}
        </p>
        <br />
      </div>
    ))}
    
  </div>
))}



        {/* Rendering work experience */}
<div>
  <h5 className="text-cyan-600 font-bold">WORK EXPERIENCE</h5>
  {experiences.map((exp, index) => (
    <div key={index}>
      <div className="flex justify-between">
        <h6 className="font-bold break-all">{exp.Company || predefinedText.experiences.company}</h6>
        <p>{exp.month1} - {exp.month2}</p>
      </div>
      <div className="flex justify-between">
        <h6>{exp.role ||  predefinedText.experiences.role }</h6>
        <p>{exp.companyplace ||  predefinedText.experiences.companyplace}</p>
      </div>
      <ul className="m-2">
        {exp.companydescription && exp.companydescription || predefinedText.experiences.companydescription.split(/\r?\n/).map((line, i) => (
          <li
            key={i}
            className={`${paragraphSpacingClass} ${
              line.trim() ? 'before:content-["•"] before:mr-1' : ''
            } text-xs sm:text-sm md:text-sm lg:text-sm m-2 w-2/2 break-all`}
          >
            {line}
          </li>
        ))}
      </ul>
      <br />
    </div>
  ))}
</div>


        {/* Rendering education */}
        <div className="page-break"></div>
        <div className="flex items-center">
          <h5 className="text-cyan-600 font-bold">EDUCATION</h5>
          <div className="flex-grow border-t border-gray-300 align-super"></div>
        </div>
        {educations.map((edu, index) => (
          <div key={index}>
            <div className="flex justify-between">
              <h6 className="font-bold break-all">{edu.schoolname || predefinedText.educations.schoolname}</h6>
              <p>{edu.edmonth1} - {edu.edmonth2}</p>
            </div>
            <div className="flex justify-between">
              <h6>{edu.schoolplace || predefinedText.educations.schoolplace}</h6>
            </div>
            <p>{edu.coursename  || predefinedText.educations.coursename}</p>
          </div>
        ))}

        {/* Rendering skills */}
        <div className="page-break"></div>
        <div className="flex items-center mt-5">
          <h5 className="text-cyan-600 font-bold">SKILLS</h5>
          <div className="flex-grow border-t border-gray-300 align-super"></div>
        </div>
        {skills.map((skill, index) => (
          <div key={index} className="flex mt-3">
            <span className="font-bold text-xs sm:text-sm w-32">{skill.skillname  || predefinedText.skills.skillname}</span>
            <h6 className="text-xs sm:text-sm">{skill.skilldetails || predefinedText.skills.skilldetails}</h6>
          </div>
        ))}

        {/* Rendering additional sections */}
        <div className="page-break"></div>
        {sectionadd.map((section, index) => (
          <div key={index} className="mt-5">
            <div className="page-break"></div>
            <div className="flex items-center">
              <h5 className="text-cyan-600 font-bold">{section.sectiontitle || userAdditionalSections || predefinedText.additionalSections}</h5>
              <div className="flex-grow border-t border-gray-300 align-super"></div>
            </div>
            <span className="font-bold text-xs sm:text-sm w-32">{section.sectionname || userAdditionalSections || predefinedText.additionalSections}</span>
            <h6 className="text-xs sm:text-sm">{section.sectiondescription || userAdditionalSections || predefinedText.additionalSections}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Template1;
