import React from 'react';

const Template6 = ({
  data,
  boxBgColor,
  font,
  textSize,
  sectionSpacing,
  paragraphSpacing,
  lineSpacing,
  isPreviewScreen,
  predefinedText = {}
}) => {
  // Define classes based on props
  const textSizeClass = textSize === 'small' ? 'text-sm' : textSize === 'medium' ? 'text-base' : 'text-lg';
  const sectionSpacingClass = sectionSpacing === 'small' ? 'space-y-2' : sectionSpacing === 'medium' ? 'space-y-4' : 'space-y-6';
  const paragraphSpacingClass = paragraphSpacing === 'small' ? 'mb-2' : paragraphSpacing === 'medium' ? 'mb-4' : 'mb-6';
  const lineHeightClass = lineSpacing === '1' ? 'leading-tight' : lineSpacing === '1.5' ? 'leading-snug' : 'leading-relaxed';

  // Provide default values for data properties
  const { details = [], experiences = [], educations = [], skills = [], sectionadd = [], summary = [] } = data || {};

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
    areAllFieldsFilled(summar, ['summarydescription'])
  );

  return (
    <>
      <div className={`p-8 text-violet-800 break-all bg-red-50 ${textSizeClass} ${sectionSpacingClass} ${lineHeightClass}`} style={{ fontFamily: font }}>
        {/* Red circle indicating all fields are filled */}
        {!isPreviewScreen && (
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

        <div className='text-center'>
          <h1 className='text-lg md:text-xl lg:text-3xl font-bold ms-2'>{details[0]?.name || predefinedText.details.name}</h1>
          <p className='text-lg md:text-xl lg:text-lg ms-2 w-5/6'>{details[0]?.Profession || predefinedText.details.Profession}</p><br />
          <ul className="flex text-xs md:text-xs lg:text-xs break-all justify-evenly">
            <li>{details[0]?.phoneNumber || predefinedText.details.phoneNumber}</li>
            <li className='text-xs md:text-xs lg:text-xs'>
              <a href={details[0]?.link || '#'}>{details[0]?.link || predefinedText.details.link}</a>
            </li>
            <li className='text-xs md:text-xs lg:text-xs'>
              {details[0]?.email || predefinedText.details.email}
            </li>
            <li className='text-xs md:text-xs lg:text-xs'>
              {details[0]?.address || predefinedText.details.address}
            </li>
          </ul>
        </div>

        {summary.map((sum, index) => (
          <div key={index}>
            <p className={`${paragraphSpacingClass} text-xs md:text-xs lg:text-xs m-5 w-2/2 break-all`}>{sum.summarydescription || predefinedText.summary.summarydescription}</p>
            
          </div>
        ))}

        <div className='flex'>
          <div className='w-2/6'>
            <div>
              <div className='flex items-center align-text-top relative'>
                <div className="border-l border-violet-300 h-full top-3 absolute"></div>
                <div className="border-t border-violet-300 w-3"></div>
                <h5 className='text-white bg-violet-900 px-4 font-bold pb-2 font-sans text-sm'>SKILLS</h5>
                <div className="flex-grow border-t border-violet-300">
                  <div className="flex border-r border-violet-300 h-full top-3 right-0 absolute"></div>
                </div>
              </div>
              <div className='flex relative'>
                <div className="flex border-r border-violet-300 h-full absolute"></div>
                <div className='m-2'>
                  {skills.map((skill, index) => (
                    <div key={index} className=' break-all '>
                      <ol className="text-xs md:text-xs lg:text-xs ">
                        <li><span className="m-2">&#8226;</span>{skill.skillname || predefinedText.skills.skillname}</li>
                        <li className='text-xs md:text-xs lg:text-xs'><span className="m-2">&#8226;</span>{skill.skilldetails || predefinedText.skills.skilldetails}</li>
                      </ol>
                    </div>
                  ))}
                </div>
                <div className="flex border-r border-violet-300 right-0 h-full absolute"></div>
              </div>
              <div className="flex-grow border-t border-violet-300 align-super">
                <div className="flex border-r border-violet-300 h">
                </div>
              </div>
            </div>

            <div className='mt-10'>
              <div className='flex items-center relative'>
                <div className="border-l border-violet-300 h-3 top-3 absolute"></div>
                <div className="border-t border-violet-300 w-3"></div>
                <h5 className='text-white font-bold bg-violet-900 px-2 font-sans text-sm'>LANGUAGE</h5>
                <div className="flex-grow border-t border-violet-300 align-super">
                  <div className="flex border-r border-violet-300 h-5 top-3 right-0 absolute"></div>
                </div>
              </div>
              <div className='flex relative'>
                <div className="flex border-r border-violet-300 h-full absolute"></div>
                <div className='m-3'>
                  {sectionadd.map((section2, index) => (
                    <div key={index} className="">
                      <ol className="text-xs md:text-xs lg:text-xs  font-bold">
                        <li><span className="m-2">&#8226;</span>{section2.addlanguage1}</li>
                        <li className='text-xs md:text-xs lg:text-xs'><span className="m-2">&#8226;</span>{section2.addlanguage2}</li>
                      </ol>
                    </div>
                  ))}
                </div>
                <div className="flex border-r border-violet-300 right-0 h-full absolute"></div>
              </div>
              <div className="flex-grow border-t border-violet-300 align-super">
                <div className="flex border-r border-violet-300 h-full top-3 right-0 absolute"></div>
              </div>
            </div>

            <div className='mt-10'>
              <div className='flex items-center relative'>
                <div className="border-l border-violet-300 h-full top-3 absolute"></div>
                <div className="border-t border-violet-300 w-3"></div>
                <h5 className='text-white font-bold bg-violet-900 px-2 font-sans text-sm'>AWARDS</h5>
                <div className="flex-grow border-t border-violet-300 align-super">
                  <div className="flex border-l border-violet-300 h-full top-3 right-0 absolute"></div>
                </div>
              </div>
              <div className='flex relative'>
                <div className="border-l border-violet-300 h-full absolute"></div>
                <div className='m-4'>
                  {sectionadd.map((section3, index) => (
                    <div key={index} className="">
                      <ol className="text-xs md:text-xs lg:text-xs mt-2 font-bold">
                        <li><span className="m-2">&#8226;</span>{section3.addaward1}</li>
                        <li className='text-xs md:text-xs lg:text-xs'><span className="m-2">&#8226;</span>{section3.addaward2}</li>
                      </ol>
                    </div>
                  ))}
                </div>
                <div className="border-l border-violet-300 right-0 h-full absolute"></div>
              </div>
              <div className="flex-grow border-t border-violet-300 align-super">
                <div className="flex border-l border-violet-300 h-full top-3 right-0 absolute"></div>
              </div>
            </div>
          </div>

          <div className='w-2/3 mx-4'>
            <div>
              <div className='flex items-center relative'>
                <div className="border-l border-violet-300 h-3 top-3 absolute"></div>
                <div className="border-t border-violet-300 w-3"></div>
                <h5 className='text-white font-bold bg-violet-900 px-2 font-sans text-sm'>EDUCATION</h5>
                <div className="flex-grow border-t border-violet-300 align-super ">
                  <div className="flex border-l border-violet-300 h-full top-3 right-0 absolute"></div>
                </div>
              </div>
              <div className='flex relative'>
                <div className="flex border-l border-violet-300 h-full absolute"></div>
                <div className='m-4'>
                  <p className='font-bold text-xs' style={{ fontSize: "10px" }}>{educations[0]?.coursename || predefinedText.educations.coursename}</p>
                  <div className='flex text-xs md:text-xs lg:text-xs' style={{ fontSize: "10px" }}>
                    <h4>{educations[0]?.schoolname || predefinedText.educations.schoolname}</h4>
                    <h6>{educations[0]?.schoolplace || predefinedText.educations.schoolplace}</h6>
                  </div>
                  <p className='text-xs md:text-xs lg:text-xs mt-1' style={{ fontSize: "10px" }}>{educations[0]?.edmonth1} - {educations[0]?.edmonth2}</p>
                </div>
                <div className="flex border-r border-violet-300 right-0 h-full absolute"></div>
              </div>
              <div className="flex-grow border-t border-violet-300 align-super"></div>
            </div>

            <div className='flex items-center relative mt-5'>
              <div className="flex border-l border-violet-300 h-full top-3 absolute"></div>
              <div className="border-t border-violet-300 w-3"></div>
              <h5 className='text-white font-bold bg-violet-900 px-2 font-sans text-sm'>EXPERIENCE</h5>
              <div className="flex-grow border-t border-violet-300 align-super">
                <div className="flex border-r border-violet-300 h-full top-3 right-0 absolute"></div>
              </div>
            </div>
            <div className='flex relative'>
              <div className="border-l border-violet-300 h-full absolute"></div>
              <div className='m-2'>
                {experiences.map((exp, index) => (
                  <div key={index} className=' w'>
                    <div className='m-2'>
                      <div className='flex justify-between'>
                        <h6 className='font-bold text-sm' style={{ fontSize: "10px" }}>{exp.Company || predefinedText.experiences.company}</h6>
                        <p style={{ fontSize: "8px" }}>{exp.month1} - {exp.month2}</p>
                      </div>
                      <h6 className='text-xs mb-1' style={{ fontSize: "10px" }}>{exp.role || predefinedText.experiences.role}</h6>
                      <ul className=''>
                        <li className='text-xs md:text-xs lg:text-xs w-2/2 break-all' style={{ fontSize: "10px" }}>{exp.companydescription || predefinedText.experiences.companydescription}</li>
                      </ul>
                    </div>
                  </div>
               
              ))}
              </div>
              <div className="flex border-r border-violet-300 right-0 h-full absolute"></div>
            </div>
            <div className="flex-grow border-b border-violet-300 align-super"></div>

            
            <div className='flex items-center relative mt-5'>
              <div className="flex border-l border-violet-300 h-full top-3 absolute"></div>
              <div className="border-t border-violet-300 w-3"></div>
              <h5 className='text-white font-bold bg-violet-900 px-2 font-sans text-sm'>Reference</h5>
              <div className="flex-grow border-t border-violet-300 align-super">
                <div className="flex border-r border-violet-300 h-full top-3 right-0 absolute"></div>
              </div>
            </div>
            <div className='flex items-center relative'>
              <div className="flex border-l border-violet-300 h-full top- absolute"></div>
              {sectionadd.map((section4, index) => (
                <div key={index} className="m-4 break-all">
                  <p className='font-bold text-xs'>{section4.addrefernces1}</p>
                  <div className='flex text-xs md:text-xs lg:text-xs' style={{ fontSize: "10px" }}>
                    <h4>{data.Referencesposition}</h4>
                  </div>
                  <p className='text-xs md:text-xs lg:text-xs mt-1' style={{ fontSize: "10px" }}>{section4.addrefernces2}</p>
                  <p className='text-xs md:text-xs lg:text-xs ' style={{ fontSize: "10px" }}>{section4.addrefernces3}</p>
                </div>
              ))}
              <div className="flex border-r border-violet-300 right-0 h-full absolute"></div>
            </div>
            <div className="flex-grow border-t border-violet-300 align-super"></div>
          </div>

          <br />
          <div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Template6;

