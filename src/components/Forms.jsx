// Import useState and useEffect hooks
import React, { useState, useEffect, useRef } from 'react';

// Import other components and dependencies
import { useNavigate } from "react-router-dom";
import Details from './inputFields/details';
import Experience from './inputFields/Experince';
import Education from './inputFields/Education';
import Skills from './inputFields/Skills';
import Language from './inputFields/Language';
import SectionAdd from './inputFields/SectionAdd';
import Slider from './Slider';
import PreviewSection from './forms/PreviewSection';
import SimpleCVGenerator from './forms/SimpleCVGenerator';
import { useReactToPrint } from 'react-to-print';
import 'react-quill/dist/quill.snow.css';
import Summary from './inputFields/Summary';
import Experiencescreen from './loadingscreens/experiencescreen';
import Educationscreen from './loadingscreens/educationscreen';
import SkillScreen from './loadingscreens/skillScreen';
import Summaryscreen from './loadingscreens/summaryscreen';
import Tooltip from './Tooltip';
import TemplateSelector from './cvFunctionality/TemplateSelector';
import Footer from './Footer';
import FontSelector from './cvFunctionality/FontSelector';
import ColorButtons from './cvFunctionality/ColorButtons';
import TemplateComponent from './forms/templateComponent';

const predefinedColors = {
  Template1: '#F5F5F5',
  
  Template3: '#F0FFF0',
  Template4: '#FFDAB9',
  Template5: 'lightgray',
  Template6: '#FFEBEF',
  Template7: '#FFEDCC',
  Template8: '#27384C',
  Template9: '#27384C',
  Template10: '#323B4C',
};

const predefinedText = {
  details: {
    name: 'First Last (Name)',
    profession: 'Health and Safety Officer',
    address: 'Atlanta, Georgia',
    phoneNumber: ' +1-234-456-789',
    email: ' resume@.com',
    link: ' linkedin.com',
   
  },
  summary:{
    summarydescription:'Health and safety officer with 8 years of experience developing safety policies and procedures that protect employees and encourage compliance with government regulations. Key achievement: conducted 53+ inspections to ensure 100% compliance with OSHA regulations and developed corrective action plans for non-compliance. '
  },
  experiences: {
    company: 'Resume Worded, New York, NY  ',
     role: 'Health and Safety Officer', 
     companydescription: 'Executed internal environmental health and safety (EHS) audits of several work locations to identify potential hazards; recommended corrective actions that increased compliance by 91%. ',
     companyplace: 'Delhi, India'
  },
  educations: { 
    coursename: 'Word University', 
    schoolplace: 'New York, NY ', 
    schoolname: 'Master of Science - Public Health ',
    },

  skills: { 
    skillname: 'Technical Skills', 
    skilldetails: 'Industry Knowledge'
   },
  
};


function Form() {
  // State variables
  const [showComponent, setShowComponent] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('Template1');
   const [selectedFont, setSelectedFont] = useState('Arial');
  const [boxBgColor, setBoxBgColor] = useState(predefinedColors[selectedTemplate]);
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem('formData');
    return savedData
      ? JSON.parse(savedData)
      : {
          details: [{ name: '', profession: '', address: '', phoneNumber: '', email: '', link: '', github:'', projects:'', Achievement:'',language :'', image: '' }],
          language: [{ Languagename1: '', Languagename2: '' }],
          experiences: [{ company: '', role: '', companydescription: '', month1: '', month2: '', companyplace: '' }],
          educations: [{ coursename: '', schoolplace: '', schoolname: '', edmonth1: '', edmonth2: '' }],
          skills: [{ skillname: '', skilldetails: '' }],
          summary: [{ summarydescription: '' }],
          sectionadd: [],
          sectionadd2: [],
          image: null
        };
  });
  const [isSaving, setIsSaving] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPreviewing, setIsPreviewing] = useState(false);
  const [currentStepColor, setCurrentStepColor] = useState('bg-blue-950');
  const cvRef = useRef(null);
  const [sections, setSections] = useState([]);
  const [nextButtonText, setNextButtonText] = useState('Next');
  const [image, setImage] = useState(null);

  const [screenNames, setScreenNames] = useState({
    Details: 'Details',
    Experience: 'Next: Work Experience',
    Education: 'Next: Education',
    Skills: 'Next: Skills',
    summary: 'Next: Summary',
    SectionAdd: 'Finalize',
    
  });

  // Define the screen components mapping
  const screenComponents = {
    Details: <Experiencescreen />,
    Experience: <Educationscreen />, // Example for a different screen
    Education: <SkillScreen />,
    Skills: <Summaryscreen />,
    
    
  };

  // Handle the next button click
  const handleNext = () => {
    const nextScreen = sectionsList[currentStep + 1]; // Get the name of the next screen
    if (currentStep < sectionsList.length - 1) {
      setShowComponent(true);
      setTimeout(() => {
        setShowComponent(false);
        setCurrentStep(currentStep + 1);
      }, 2000);
    } else {
      setIsPreviewing(true);
    }
  };
  


// Define the isDetailsComplete function
const isDetailsComplete = () => {
  const detailsFields = formData.details[0];
  return (
    detailsFields.name.trim() !== '' &&
    detailsFields.profession.trim() !== '' &&
    detailsFields.phoneNumber.trim() !== '' &&
    detailsFields.email.trim() !== '' &&
    
    detailsFields.address.trim() !== '' &&
    detailsFields.description.trim() !== ''
  );
};
const isDetailsComplete2 = () => {
  // Check if experiences array exists and is not empty
  if (formData.experiences && formData.experiences.length > 0) {
    // Check if the first experience object has all required fields filled
    const experienceFields = formData.experiences[0];
    return (
      experienceFields.company.trim() !== '' &&
      experienceFields.month1.trim() !== '' &&
      experienceFields.role.trim() !== '' &&
      experienceFields.companydescription.trim() !== '' 
    );
  }
  return false; // Return false if experiences array is empty or undefined
};

const isDetailsComplete3 = () => {
  // Check if experiences array exists and is not empty
  if (formData.education && formData.education.length > 0) {
    // Check if the first experience object has all required fields filled
    const education = formData.education[0];
    return (
      education.schoolname.trim() !== '' &&
      education.edmonth1.trim() !== '' &&
      education.edmonth2.trim() !== '' &&
      education.coursename.trim() !== '' 
    );
  }
  return false; // Return false if experiences array is empty or undefined
};

const isDetailsComplete4 = () => {
  // Check if experiences array exists and is not empty
  if (formData.skill && formData.skill.length > 0) {
    // Check if the first experience object has all required fields filled
    const skill = formData.skill[0];
    return (
      skill.skillname.trim() !== '' &&
      skill.skilldetails.trim() !== '' 
    );
  }
  return false; // Return false if experiences array is empty or undefined
};
const isDetailsComplete5 = () => {
  // Check if experiences array exists and is not empty
  if (formData.section && formData.section.length > 0) {
    // Check if the first experience object has all required fields filled
    const section = formData.section[0];
    return (
      section.sectiontitle.trim() !== '' &&
      section.sectiondescription.trim() !== ''  
    );
  }
  return false; // Return false if experiences array is empty or undefined
};

const isDetailsComplete6 = () => {
  // Check if experiences array exists and is not empty
  if (formData.summary && formData.summary.length > 0) {
    // Check if the first experience object has all required fields filled
    const summary = formData.summary[0];
    return (
      
      summary.summarydescription.trim() !== ''  
    );
  }
  return false; // Return false if experiences array is empty or undefined
};



useEffect(() => {
  // Check if all required details fields are filled whenever the current step changes
  if (currentStep === 0 && isDetailsComplete()) {
    setCurrentStepColor('bg-blue-950');
  } else if (currentStep === 1 && isDetailsComplete2()) {
    setCurrentStepColor('bg-blue-950');
  } else if (currentStep === 1 && isDetailsComplete3()) {
    setCurrentStepColor('bg-blue-950');
  } else if (currentStep === 1 && isDetailsComplete4()) {
    setCurrentStepColor('bg-blue-950');
  } else if (currentStep === 1 && isDetailsComplete5()) {
    setCurrentStepColor('bg-blue-950');
  } else if (currentStep === 1 && isDetailsComplete6()) {
    setCurrentStepColor('bg-blue-950');
  } else {
    setCurrentStepColor('bg-blue-950');
  }
}, [currentStep, formData.details, formData.experiences]);

const handleInputChange = (e, index, section) => {
  const { name, value } = e.target;

  // If the input field is companydescription and a double newline is entered,
  // replace it with a single newline character
  const updatedValue = name === 'companydescription' ? value.replace(/\n\n/g, '\n') : value;

  const updatedSection = formData[section].map((item, i) =>
    i === index ? { ...item, [name]: updatedValue } : item
  );
  setFormData({ ...formData, [section]: updatedSection });
  setIsSaving(true);
};

useEffect(() => {
  if (currentStep < sectionsList.length - 1) {
    setNextButtonText(`Next: ${sectionsList[currentStep + 1]}`);
  } else {
    setNextButtonText('Preview');
  }
}, [currentStep]);

useEffect(() => {
  setBoxBgColor(predefinedColors[selectedTemplate]);
}, [selectedTemplate, setBoxBgColor]);

const handleKeyPress = (e, index, section) => {
  console.log('Event target name:', e.target.name);
  console.log('Pressed key:', e.key);

  if (e.key === 'Enter' && e.target.name === 'companydescription') {
    e.preventDefault(); // Prevent default form submission
    console.log('Enter key pressed in companydescription field');
    const updatedDescription = `${e.target.value}\n`; // Add newline character
    console.log('Updated description:', updatedDescription);
    handleInputChange(e, index, section, { companydescription: updatedDescription });
  }
};





const handlePrevious = () => {
  if (currentStep > 0) {
    setCurrentStep(currentStep - 1);
  }
};

const handlePrint = useReactToPrint({
  content: () => cvRef.current
});

const sectionsList = [
  'Details',
  'Experience',
  'Education',
  'Skills',
  'summary',
  'SectionAdd'
];

const handleTemplateChange = (template) => {
  setSelectedTemplate(template);
};

const addField = (section) => {
  const newField =
    section === 'experiences'
      ? { company: '', role: '', companydescription: '', month1: '', month2: '' }
      : section === 'educations'
      ? { coursename: '', schoolplace: '', schoolname: '', edmonth1: '', edmonth2: '' }
      : { skillname: '', skilldetails: '' };
  setFormData({ ...formData, [section]: [...formData[section], newField] });
};

const deleteField = (index, section) => {
  const updatedSection = formData[section].filter((_, i) => i !== index);
  setFormData({ ...formData, [section]: updatedSection });
};

const handleSectionInputChange = (e, index) => {
  const { name, value } = e.target;
  const updatedSectionAdd = formData.sectionadd.map((item, i) =>
    i === index ? { ...item, [name]: value } : item
  );
  setFormData({ ...formData, sectionadd: updatedSectionAdd });
  setIsSaving(true);
};

const handleSectionInputChange2 = (e, index) => {
  const { name, value } = e.target;
  const updatedSectionAdd = formData.sectionadd2.map((item, i) =>
    i === index ? { ...item, [name]: value } : item
  );
  setFormData({ ...formData, sectionadd2: updatedSectionAdd });
  setIsSaving(true);
};

const addSectionAdd = () => {
  setFormData({
    ...formData,
    sectionadd: [...formData.sectionadd, { sectionname: '', sectiondescription: '', sectiontitle: '' }]
  });
};

const addSectionAdd2 = () => {
  setFormData({
    ...formData,
    sectionadd2: [...formData.sectionadd2, { addlanguage1:'',addlanguage2:'' }]
  });
};

const addSectionAdd3 = () => {
  setFormData({
    ...formData,
    sectionadd2: [...formData.sectionadd2, { addaward1:'',addaward2:'' }]
  });
};

const addSectionAdd4 = () => {
  setFormData({
    ...formData,
    sectionadd2: [...formData.sectionadd2, { addrefernces1:'',addrefernces2:'' }]
  });
};

const deleteSectionAdd = (index) => {
  const updatedSectionAdd = formData.sectionadd.filter((_, i) => i !== index);
  setFormData({ ...formData, sectionadd: updatedSectionAdd });
};



console.log(formData)
useEffect(() => {
  // Clear the input value after image upload
  const imageInput = document.getElementById('profilePicture');
  if (imageInput) {
    imageInput.value = '';
  }
}, [image]);

useEffect(() => {
  localStorage.setItem('formData', JSON.stringify(formData));
}, [formData]);

return (
  <div className="h-screen">
    {!isPreviewing ? (
      <>
      <div className="flex flex-col sm:flex-row justify-between border-2 p-1 bg-slate-300">
  <button
    onClick={handlePrevious}
    className="bg-white text-blue-800 border-blue-800 border-2 px-6 sm:px-10 py-2 rounded-full font-bold mb-2 sm:mb-0 hidden sm:block"
    disabled={currentStep === 0}
  >
    Previous
  </button>
  <div className="flex flex-wrap sm:flex-nowrap gap-3 items-center">
    {/* Fonts selector (hidden on mobile) */}
    <div className="font-semibold hidden sm:block">Fonts:</div>
    <div className="flex gap-3 items-center hidden sm:flex">
      <FontSelector selectedFont={selectedFont} setSelectedFont={setSelectedFont} />
    </div>
    
    {/* Color selector (hidden on mobile) */}
    <div className="font-semibold hidden sm:block">Color:</div>
    <div className="flex gap-3 items-center hidden sm:flex">
      <ColorButtons setBoxBgColor={setBoxBgColor} />
    </div>
  </div>
  <button
    onClick={handleNext}
    className={`${currentStepColor} bg-yellow-500 px-6 sm:px-10 py-2 rounded-full font-bold`}
  >
    {screenNames[sectionsList[currentStep + 1]] || 'Preview'}
  </button>
</div>

        <div className="flex">
        <div className="w-1/6 bg-[#333456] hidden md:block">
            <Slider
              sectionsList={sectionsList}
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              isDetailsComplete={isDetailsComplete}
              Step={currentStep}
             
              isDetailsComplete2={isDetailsComplete2}
              isDetailsComplete3={isDetailsComplete3}
              isDetailsComplete4={isDetailsComplete4}
              isDetailsComplete5={isDetailsComplete5}
              isDetailsComplete6={isDetailsComplete6}
            />
          </div>
          <div className="flex w-full sm:w-4/5  justify-center">
            <div className="absolute h-screen">
              {/* Conditionally render the screen component based on the current section */}
              {showComponent && screenComponents[sectionsList[currentStep]]}
            </div>
            <div className="w-4/5 p-3 h-screen ">
              {/* Render Active Section */}
              {(() => {
                switch (sectionsList[currentStep]) {
                  case 'Details':
                    return <Details
                    image={image}
                    setImage={setImage}
                    details={formData.details}
                    handleInputChange={handleInputChange}
                 
                  />;
                  
                  case 'Experience':
                    return (
                      <>
                        <Experience
                          experiences={formData.experiences}
                          handleInputChange={handleInputChange}
                          handleKeyPress={handleKeyPress}
                          addExperience={() => addField('experiences')}
                          deleteExperience={(index) => deleteField(index, 'experiences')}
                        />
                        
                      </>
                    );
                  case 'Education':
                    return (
                      <Education
                        educations={formData.educations}
                        handleInputChange={handleInputChange}
                        addEducation={() => addField('educations')}
                        deleteEducation={(index) => deleteField(index, 'educations')}
                      />
                    );
                  case 'Skills':
                    return (
                      <Skills
                        skills={formData.skills}
                        handleInputChange={handleInputChange}
                        addSkill={() => addField('skills')}
                        deleteSkill={(index) => deleteField(index, 'skills')}
                        selectedTemplate={selectedTemplate}
                      />
                    );
                  case 'summary':
                    return <Summary summary={formData.summary} handleInputChange={handleInputChange} />;
                  case 'Language':
                    return (
                      <Language
                        formData={formData.language}
                        handleInputChange={handleInputChange}
                        selectedTemplate={selectedTemplate}
                      />
                    );
                  case 'SectionAdd':
                    return (
                      <SectionAdd
                        sectionadd={formData.sectionadd}
                        sectionadd2={formData.sectionadd2}
                        handleInputChange={handleSectionInputChange}
                        handleInputChange2={handleSectionInputChange2}
                        addSectionAdd={addSectionAdd}
                        addSectionAdd2={addSectionAdd2}
                        addSectionAdd3={addSectionAdd3}
                        addSectionAdd4={addSectionAdd4}
                        deleteSectionAdd={deleteSectionAdd}
                        selectedTemplate={selectedTemplate}
                      />
                    );
                  default:
                    return null;
                }
              })()}
            </div>
            <div className="w-3/5 overflow-y-auto overflow-x-auto h-full justify-center  py-10 mb-10 hidden md:block">
              <div className=' mb-5 ms-60 '><Tooltip/></div>
              
              <TemplateComponent
              image={image}
                ref={cvRef}
                data={formData}
                selectedTemplate={selectedTemplate}
                setSelectedTemplate={setSelectedTemplate}
                selectedFont={selectedFont}
                boxBgColor={boxBgColor}
                setBoxBgColor={setBoxBgColor}
                predefinedText={predefinedText}
              
              
              />
              <div className='my-2 px-10 '>
       <TemplateSelector selectedTemplate={selectedTemplate} setSelectedTemplate={setSelectedTemplate} />
       </div>
            </div>
          </div>
        </div>
      </>
    ) : (
      <>
      
      <PreviewSection
      image={image}
        handlePrint={handlePrint}
        setIsPreviewing={setIsPreviewing}
        isSaving={isSaving}
        selectedTemplate={selectedTemplate}
        cvRef={cvRef}
        formData={formData}
        handleSectionInputChange={handleSectionInputChange}
        addSectionAdd={addSectionAdd}
        deleteSectionAdd={deleteSectionAdd}
        setSelectedTemplate={setSelectedTemplate}
        hideIsDetailsComplete={true}
        selectedFont={selectedFont}
         setSelectedFont={setSelectedFont}
         setBoxBgColor={setBoxBgColor} boxBgColor={boxBgColor}
         predefinedText={predefinedText}
        
      />
      </>
    )}
  
  </div>
);
}

export default Form;