// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import logo from '../components/images/logo3.png';
// import upload from '../components/images/upload.png';
// import UploadScreen from "../components/loadingscreens/uploadscreen";
// import Footer from "./Footer";

// function Uploadresume() {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);

//   const handleClick2 = () => {
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       navigate('/');
//     }, 5000);
//   };

//   return (
//     <>
//       {loading ? (
//         <UploadScreen />
//       ) : (
//         <>
//          <div className="h-screen">
//          <div className="flex justify-between p-2 " style={{ backgroundColor: '#333456', color: '#F2931C' }}>
//             <img src={logo} alt="" style={{width:'130px'}}  />
//           </div>
//           <div className="text-center my-10">
//             <h1 className="font-bold text-3xl mb-3">How do you want to build your resume?</h1>
//           </div>
//           <div className="flex text-center justify-center gap-10">
//             <div className="my-10 p-16 border-dashed border-2 rounded-md border-blue-400">
//               <img src={upload} alt="" style={{ height: '50px' }} className="ms-24" />
//               <h1 className="font-bold text-xl mt-2 mb-3 text-slate-700">Drag, and drop a file here</h1>
//               <button className="text-white px-4 rounded-full py-1 text-xs" style={{ backgroundColor: '#022B5F' }}>Browse</button>
//             </div>
//             <div className="mt-36">
//               OR
//             </div>
//             <div className="my-10 py-20">
//               <button className="px-14 mb-3 rounded-full py-2 text-xs font-bold border border-blue-700">Google Drive</button> <br />
//               <button className="px-16 rounded-full py-2 text-xs font-bold border border-blue-700">Dropbox</button>
//             </div>
//           </div>
//           <div className="text-center">
//             <h3 className="text-xs"><strong>Files we can read:</strong> DOC, DOCX, PDF, HTML, RTF, TXT</h3>
//           </div>
//           <div className="ms-20 mt-10">
//             <button className="px-10 rounded-full py-2 text-lg text-violet-950 font-bold border border-violet-950" onClick={handleClick2}>Back</button>
//           </div>
//          </div>
//          <Footer/>
//         </>
//       )}
      
//     </>
//   );
// }

// export default Uploadresume;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../components/images/logo3.png';
import upload from '../components/images/upload.png';
import UploadScreen from "../components/loadingscreens/uploadscreen";
import Footer from "./Footer";

function Uploadresume() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleClick2 = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/uploadresume');
    }, 5000);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    const token = localStorage.getItem("token"); 

    try {
      const response = await fetch("https://api.abroadium.com/api/jobseeker/resume-upload", {
        method: "POST",
        body: formData,
        headers: {
          "Authorization": `Bearer ${token}` 
        }
      });

      if (!response.ok) {
        throw new Error("File upload failed");
      }

      const result = await response.json();
      console.log(result);

      setLoading(false);
      navigate('/');
    } catch (error) {
      console.error("Error uploading file:", error);
      setLoading(false);
      alert("Error uploading file. Please try again.");
    }
  };

  return (
    <>
      {loading ? (
        <UploadScreen />
      ) : (
        <>
         <div className="h-screen">
         <div className="flex justify-between p-2 " style={{ backgroundColor: '#333456', color: '#F2931C' }}>
            <img src={logo} alt="Logo" style={{width:'130px'}}  />
          </div>
          <div className="text-center my-10">
            <h1 className="font-bold text-3xl mb-3">How do you want to build your resume?</h1>
          </div>
          <div className="flex text-center justify-center gap-10">
            <div className="my-10 p-16 border-dashed border-2 rounded-md border-blue-400">
              <img src={upload} alt="Upload" style={{ height: '50px' }} className="mx-auto mb-3" />
              <h1 className="font-bold text-xl mt-2 mb-3 text-slate-700">Drag, and drop a file here</h1>
              <input 
                type="file" 
                onChange={handleFileChange}
                className="mb-2"
              />
              <button 
                onClick={handleUpload}
                className="text-white px-4 py-1 text-xs rounded-full bg-[#022B5F]"
              >
                {/* browse changed to upload */}
                Upload
              </button>
            </div>
            <div className="mt-36">
              OR
            </div>
            <div className="my-10 py-20">
              <button className="px-14 mb-3 rounded-full py-2 text-xs font-bold border border-blue-700">Google Drive</button> <br />
              <button className="px-16 rounded-full py-2 text-xs font-bold border border-blue-700">Dropbox</button>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-xs"><strong>Files we can read:</strong> DOC, DOCX, PDF, HTML, RTF, TXT</h3>
          </div>
          <div className="mt-10 text-center">
            <button className="px-10 py-2 text-lg font-bold text-violet-950 border border-violet-950 rounded-full" onClick={handleClick2}>Back</button>
          </div>
         </div>
         <Footer/>
        </>
      )}
    </>
  );
}

export default Uploadresume;

