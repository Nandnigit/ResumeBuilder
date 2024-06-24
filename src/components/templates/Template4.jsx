import React from 'react';

const Template4 = ({
  data,
  boxBgColor,
  font,
  textSize,
  sectionSpacing,
  paragraphSpacing,
  lineSpacing,
  isPreviewScreen 
}) => {
  // Define classes based on props
  const textSizeClass = textSize === 'small' ? 'text-sm' : textSize === 'medium' ? 'text-base' : 'text-lg';
  const sectionSpacingClass = sectionSpacing === 'small' ? 'space-y-2' : sectionSpacing === 'medium' ? 'space-y-4' : 'space-y-6';
  const paragraphSpacingClass = paragraphSpacing === 'small' ? 'mb-2' : paragraphSpacing === 'medium' ? 'mb-4' : 'mb-6';
  const lineHeightClass = lineSpacing === '1' ? 'leading-tight' : lineSpacing === '1.5' ? 'leading-snug' : 'leading-relaxed';

  // Provide default values for data properties
  const { details = [], experiences = [], educations = [], skills = [], sectionadd = [] , summary=[] } = data || {};

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

  const allDetailsFilled5 = sectionadd.every(section =>
    areAllFieldsFilled(section, ['sectiontitle', 'sectiondescription'])
  );
  const allDetailsFilled6 = summary.every(summar =>
    areAllFieldsFilled(summar, [ 'summarydescription'])
  );

  return (
    <div
      className={`border-2 border-gray-300 p-10 ${textSizeClass} ${sectionSpacingClass} ${lineHeightClass}`}
      style={{ fontFamily: font, }}
    >
        {/* Red circle indicating all fields are filled */}
        {!isPreviewScreen &&(
        <div className="">
          {allDetailsFilled && (
            <div className="w-7 h-7 ps-2.5  mt-3 bg-white rounded-2xl absolute top-48 left-10 font-bold">1</div>
          )}
          {allDetailsFilled2 && (
            <div className="w-7 h-8 ps-2.5 pt-0.5 mt-2 bg-white rounded-2xl absolute top-60 left-10 font-bold">2</div>
          )}
          {allDetailsFilled3 && (
            <div className="w-7 h-8 ps-2.5 pt-0.5 mt-2 bg-white rounded-2xl absolute top-72 left-10 font-bold">3</div>
          )}
          {allDetailsFilled4 && (
            <div className="w-7 h-8 ps-2.5  mt-6 bg-white rounded-2xl absolute top-80 left-10 font-bold">4</div>
          )}
          {allDetailsFilled5 && (
            <div className="w-7 h-7 ps-2.5  mt-14 bg-white rounded-2xl absolute top-96 left-10 font-bold">6</div>
          )}
          {allDetailsFilled6 && (
            <div className="w-7 h-7 ps-2.5  mt-2  bg-white rounded-2xl absolute top-96 left-10 font-bold">5</div>
          )}
        </div>
      )}


      <div>
      {details.map((del, index) => (
  <div key={index}>
    <h3 className="text-xs sm:text-sm md:text-2xl lg:text-3xl text-cyan-600 font-bold ms-2">{del.name}</h3>
    <p className="text-xs sm:text-sm md:text-xl lg:text-lg ms-2">{del.Profession}</p>
    <ul className="flex text-xs sm:text-sm md:text-xs lg:text-xs m-2">
      <li>{del.address}</li>
      <li className={`${del.phoneNumber ? 'before:content-["•"] before:mr-1' : ''} w-2/2 break-all`}>{del.phoneNumber}</li>
      <li className={`${del.email ? 'before:content-["•"] before:mr-1' : ''} w-2/2 break-all`}>{del.email}</li>
      <li className={`${del.link ? 'before:content-["•"] before:mr-1' : ''} w-2/2 break-all`}>
        <a href={del.link}>{del.link}</a>
      </li>
    </ul>
    {summary.map((sum, index) => (
      <div key={index}>
        <p className={`${paragraphSpacingClass} text-xs sm:text-sm md:text-sm lg:text-sm m-2 w-2/2 break-all`}>{sum.summarydescription}</p>
        <br />
      </div>
    ))}
    <br />
  </div>
))}
         

        {/* Rendering work experience */}
        <div>
          <h5 className="text-cyan-600 font-bold">WORK EXPERIENCE</h5>
          {experiences.map((exp, index) => (
            <div key={index}>
              <div className="flex justify-between">
                <h6 className="font-bold break-all">{exp.Company}</h6>
                <p>{exp.month1} - {exp.month2}</p>
              </div>
              <h6>{exp.role}</h6>
              <ul className="m-2">
                <li className={`${paragraphSpacingClass} ${exp.companydescription.trim() ? 'before:content-["•"] before:mr-1' : ''} text-xs sm:text-sm md:text-sm lg:text-sm m-2 w-2/2 break-all`}>
                  {exp.companydescription}
                </li>
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
              <div className="flex">
                <h4 className="font-bold">{edu.schoolname}</h4>
                <h6>{edu.schoolplace}</h6>
              </div>
              <p>{edu.edmonth1} - {edu.edmonth2}</p>
            </div>
            <p>{edu.coursename}</p>
          </div>
        ))}

        {/* Rendering skills */}
        <div className="page-break"></div>
        <div className="flex items-center">
          <h5 className="text-cyan-600 font-bold">SKILLS</h5>
          <div className="flex-grow border-t border-gray-300 align-super"></div>
        </div>
        {skills.map((skill, index) => (
          <div key={index} className="flex">
            <span className="font-bold text-xs sm:text-sm w-32">{skill.skillname}</span>
            <h6 className="text-xs sm:text-sm">{skill.skilldetails}</h6>
          </div>
        ))}

        {/* Rendering additional sections */}
        <div className="page-break"></div>
        {sectionadd.map((section, index) => (
          <div key={index} className="mt-5">
            <div className="page-break"></div>
            <div className="flex items-center">
              <h5 className="text-cyan-600 font-bold">{section.sectiontitle}</h5>
              <div className="flex-grow border-t border-gray-300 align-super"></div>
            </div>
            <span className="font-bold text-xs sm:text-sm w-32">{section.sectionname}</span>
            <h6 className="text-xs sm:text-sm">{section.sectiondescription}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Template4;
