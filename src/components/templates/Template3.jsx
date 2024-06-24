import React from 'react';

const Template3 = ({
  data,
  boxBgColor,
  font,
  textSize,
  sectionSpacing,
  paragraphSpacing,
  lineSpacing,
  predefinedText = {}
}) => {
  // Define classes based on props
  const textSizeClass = textSize === 'small' ? 'text-sm' : textSize === 'medium' ? 'text-base' : 'text-lg';
  const sectionSpacingClass = sectionSpacing === 'small' ? 'space-y-2' : sectionSpacing === 'medium' ? 'space-y-4' : 'space-y-6';
  const paragraphSpacingClass = paragraphSpacing === 'small' ? 'mb-2' : paragraphSpacing === 'medium' ? 'mb-4' : 'mb-6';
  const lineHeightClass = lineSpacing === '1' ? 'leading-tight' : lineSpacing === '1.5' ? 'leading-snug' : 'leading-relaxed';

  // Provide default values for data properties
  const { details = [], experiences = [], educations = [], skills = [] } = data || {};

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

  return (
    <div className={`p-10 font-serif border-2 ${textSizeClass} ${sectionSpacingClass} ${lineHeightClass}`}
         style={{ fontFamily: font }}>

      {/* Details */}
      {details.map((del, index) => (
        <div key={index}>
          <h3 className="text-lg md:text-xl lg:text-1xl text-center font-serif font-bold">{del.name || predefinedText.details.name}</h3>
          <div>
            <ul className="flex text-xs md:text-xs lg:text-xs text-center justify-evenly">
              <li>{del.address || predefinedText.details.address}</li>
              <li className={`${del.phoneNumber.trim() ? 'before:content-["•"] before:mr-1' : ''} w-2/2 break-all`}>{del.phoneNumber || predefinedText.details.phoneNumber}</li>
              <li className={`${del.email.trim() ? 'before:content-["•"] before:mr-1' : ''} w-2/2 break-all`}>{del.email || predefinedText.details.email}</li>
              <li className={`${del.link.trim() ? 'before:content-["•"] before:mr-1' : ''} w-2/2 break-all`}>
                <a href={del.link || '#'}>{del.link || predefinedText.details.link}</a>
              </li>
            </ul>
          </div>
          <br />
        </div>
      ))}

      {/* Experiences */}
      <div>
        {experiences.map((exp, index) => (
          <div key={index}>
            <h5 className=' font-bold'>PROFESSIONAL EXPERIENCE</h5>
            <div className="flex-grow border-t border-black align-super my-2"></div>
            <div className='flex justify-between mt-4'>
              <h6 className='font-bold text-xs'>{exp.Company || predefinedText.experiences.company}</h6><br />
              <p className='text-xs'>{exp.month1} - {exp.month2}</p>
            </div>
            <h6 className='text-xs'>{exp.role ||  predefinedText.experiences.role }</h6>
            <ul className='my-2'>
              <li className='text-xs md:text-xs lg:text-xs mx-2 w-2/2 break-all'>{exp.companydescription || predefinedText.experiences.companydescription}</li><br />
            </ul>
          </div>
        ))}
      </div>

      {/* Education */}
      <div>
        <h5 className=' font-bold mt-'>EDUCATION </h5>
        <div className="flex-grow border-t border-black align-super my-2"></div>
        {educations.map((edu, index) => (
          <div key={index}>
            <div className='flex justify-between'>
              <div className='flex'>
                <h4 className='font-bold text-xs'>{edu.coursename || predefinedText.educations.coursename},</h4>
                <h6 className='text-xs'>{edu.schoolplace || predefinedText.educations.schoolplace}</h6>
              </div>
              <p className='text-xs'>{edu.edmonth1} to {edu.edmonth2}</p>
            </div>
            <p className='text-xs'>{edu.schoolname || predefinedText.educations.schoolname}</p>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div>
        <h5 className=' font-bold mt-3'>Skills</h5>
        <div className="flex-grow border-t border-black align-super my-2"></div>
        {skills.map((skill, index) => (
          <div key={index}>
            <ol className="text-xs md:text-xs lg:text-xs mt-2 font-bold">
              <li><span className="m-2">&#8226;</span>{skill.skillname || predefinedText.skills.skillname}</li>
              <li className='text-xs md:text-xs lg:text-xs'><span className="m-2">&#8226;</span>{skill.skilldetails || predefinedText.skills.skilldetails}</li>
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Template3;
