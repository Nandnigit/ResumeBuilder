import React from 'react';
import { useState } from 'react';
import profilephoto from '../images/profilephoto.png';

const Template10 = ({
  image,
  data,
  boxBgColor,
  font,
  textSize,
  sectionSpacing,
  paragraphSpacing,
  lineSpacing,
  isTemplate1Previewing,
  isPreviewScreen,
  predefinedText = {},
}) => {
  console.log('imageee', image)
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

  const [images, setImages] = useState(() => {
    if (details && details.length > 0) {
      return details.map(() => null);
    }
    return [];
  });

  const handleFileChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        console.log("Uploaded image data:", reader.result);
        const updatedImages = [...images];
        updatedImages[index] = reader.result;
        setImages(updatedImages);
      };
      reader.readAsDataURL(file);
    }
  };

  

  return (
    <div className={`border break-all ${textSizeClass} ${sectionSpacingClass} ${lineHeightClass}`} style={{ fontFamily: font }}>
      {!isPreviewScreen && !isTemplate1Previewing && (
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
      <div className='flex break-all'>
        <div className="md:w-1/ ps-4 pt-5 bg-slate-100 text-white overflow-auto justify-center break-all" style={{ backgroundColor: boxBgColor }}>
          <div>
          
          <div className='flex'>
          <div className="w-32 h-40 b bg-white  border-8 text-center break-all">
              <img src={image || profilephoto} alt="" style={{height:'143px'}}/>
              </div>

              
          <div className='w-7  h-28 mt-7 bg-yellow-300'></div>
          </div>
            <h5 className=' text-sm pt-5'>CONTACT </h5>
            <div className="flex-grow  border-t border-white align-super mt-3"></div>
            <ul className=" text-xs md:text-xs lg:text-xs mt-2 break-all w-28">
              {details.map((del, index) => (
                <React.Fragment key={index} >
                  <li><span className="m-2">&#8226;</span>{del.address || predefinedText.details.address}</li>
                  <li className='text-xs md:text-xs lg:text-xs'>
                    <span className="m-2">&#8226;</span>{del.phoneNumber || predefinedText.details.phoneNumber}
                  </li>
                  <li className='text-xs md:text-xs lg:text-xs break-all'>
                    <span className="m-2">&#8226;</span>{del.email || predefinedText.details.email}
                  </li>
                  <li className='text-xs md:text-xs lg:text-xs break-all'>
                    <span className="m-2">&#8226;</span><a href={del.link || '#'}>{del.link || predefinedText.details.link}</a>
                  </li>
                  <img src={del.image} alt="" />
                </React.Fragment>
              ))}
            </ul>
          </div><br />
          <h5 className='text-sm'>EDUCATION </h5>
          <div className="flex-grow border-t border-white align-super break-all mt-3"></div>
          {educations.map((edu, index) => (
            <div key={index} className='ms-3'>
              <ul className=" text-xs md:text-xs lg:text-xs mt-2 break-all w-28">
                <li className='font-bold break-all '>{edu.coursename || predefinedText.educations.coursename}</li>
                <li className='text-xs md:text-xs lg:text-xs mt-2 break-all'>{edu.schoolname || predefinedText.educations.schoolname}</li>
                <li className='text-xs md:text-xs lg:text-xs mt-2 break-all'>{edu.schoolplace || predefinedText.educations.schoolplace}</li>
              </ul>
              </div>
          ))} <br />
          <h5 className='text-sm '>SKILLS  </h5>
          <div className="flex-grow border-t border-white align-super mt-2"></div>
          {skills.map((skill, index) => (
            <div key={index}>
              <ul className=" text-xs md:text-xs lg:text-xs mt-2">
                <li>
                  <span className="m-2">&#8226;</span>{skill.skillname || predefinedText.skills.skillname}
                </li>
                <li className='text-xs md:text-xs lg:text-xs'>
                  <span className="m-2">&#8226;</span>{skill.skilldetails || predefinedText.skills.skilldetails}
                </li>
              </ul>
            </div>
          ))}

          {details.map((del, index) => (
            <div key={index} className='text-xs mt-4'>
              <h5 className='text-sm '>Github  </h5>
              <ul>
                <li className={`${del.github ? 'before:content-["●"] before:m-2' : ''} w-2/2 break-all`}>
                  <a href={del.github}>{del.github}</a>
                </li>
              </ul>
            </div>
          ))}
          
          <div>
            {sectionadd.map((section, index) => (
              <div key={index} className="mt-5">
                <h5 className="text-blue-800  break-all">{section.sectiontitle}</h5>
                <div className="flex-grow border-t border-white align-super my-2 "></div>
                <span className="font-bold text-xs w-32">{section.sectionname}</span>
                <h6 className={`${paragraphSpacingClass} text-xs  break-all`}>{section.sectiondescription}</h6>
              </div>
            ))}
          </div>
        </div>

        <div className='md:w-2/3 md:p white'>
          {details.map((del, index) => (
            <div key={index} className='bg-yellow-300  h-28 mt-12'><br />
              <h3 className="text-lg md:text-xl lg:text-2xl text-gray-700 font-bold ms-10">{del.name || predefinedText.details.name}</h3>
              <p className='text-sm md:text-sm lg:text-sm mt-2 ms-10'> {del.Profession || predefinedText.details.profession}</p> <br /> <br />
            </div>
          ))} <br /><br />
          <h5 className='font-extrabold mb-2 ms-7'>Experience </h5>
          <div className="flex-grow border-t-2 border-yellow-300 align-super ms-7"></div>
          {experiences.map((exp, index) => (
            <div key={index} className='ms-10'>
              <div> </div>
              <div>
                <p className='text-xs mt-3 mb-2'>{exp.month1 || "2024/01"}- {exp.month2 || "2024/05"}</p>
                <div className='flex'>
                  <h6 className='font-semibold text-sm'>{exp.Company || "Resume World company Inc."} </h6>
                  <h6 className=' text-sm ps-1'>{exp.companyplace}</h6>
                </div>
                <h6 className='text-sm'>{exp.role || "Software Developer"}</h6>
                <ul className='m-2 text-xs'>
                  <li>{exp.companydescription || predefinedText.experiences.companydescription}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Template10;
