import React from 'react';


const Addsection = ({ Addsection = [], handleInputChange, Addsectionclick, deletesection ,selectedTemplate,setSelectedTemplate}) => {
  return (
    <div className="mt-10">
      
      {Addsection.map((Addsection1, index) => (
        <div key={index} className=" relative mt-4">
         
         <div className="flex gap-6">
  <div className="w-3/4">

  <label htmlFor="sectionname" className="block text-sm font-medium text-gray-700 mb-2">
  Skill name: 
        </label>
        <input 
          type="text" 
          name="sectionname" 
         value={Addsection1.sectionname}
              onChange={(e) => handleInputChange(e, index, 'Addsection')}
          placeholder="skill name " 
          className="w-full p-3 mb-4 border border-black rounded-lg"
        />
  </div>

  <div className="w-3/4">

  <label htmlFor="sectiondescription" className="block text-sm font-medium text-gray-700 mb-2">
  Skill details: 
        </label>
        <input 
          type="text" 
          name="sectiondescription" 
          value={Addsection1.sectiondescription}
              onChange={(e) => handleInputChange(e, index, 'Addsection')}
          placeholder="skill details " 
          className="w-full p-3 mb-4 border border-black rounded-lg"
        />
       
        
  </div>


</div>
<div className=''>
   {(selectedTemplate === 'Template3' || selectedTemplate === 'Template6') && (
          <div className='flex gap-6'>
             <div className="w-3/4">

<label htmlFor="sectionname" className="block text-sm font-medium text-gray-700 mb-2">
Skill name: 
      </label>
      <input 
        type="text" 
        name="sectionname" 
       value={Addsection1.sectionname}
            onChange={(e) => handleInputChange(e, index, 'Addsection')}
        placeholder="skill name " 
        className="w-full p-3 mb-4 border border-black rounded-lg"
      />
</div>


<div className="w-3/4">

<label htmlFor="sectiondescription" className="block text-sm font-medium text-gray-700 mb-2">
Skill details: 
      </label>
      <input 
        type="text" 
        name="sectiondescription" 
        value={Addsection1.sectiondescription}
            onChange={(e) => handleInputChange(e, index, 'Addsection')}
        placeholder="skill details " 
        className="w-full p-3 mb-4 border border-black rounded-lg"
      />
     
      
</div>
            
          </div>
        )}

   </div>

            <button
              type="button"
              onClick={() => deletesection(index)}
              className="mt-2 text-red-500"
            >
              Delete Skill
            </button>
          
        </div>
      ))}
    <button className="font-bold text-lg flex items-center" onClick={Addsectionclick}>
  <h3>Add Items</h3>
  <svg className="h-5 w-5 text-white bg-black rounded-full m-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path fill="none" d="M0 0h24v24H0z"/>
    <line x1="9" y1="12" x2="15" y2="12" stroke="white" />
    <line x1="12" y1="9" x2="12" y2="15" stroke="white" />
  </svg>
</button>

    </div>
  );
};

export default Addsection;
