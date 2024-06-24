import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../components/images/logo3.png';
import upload from '../components/images/upload.png';
import edit from '../components/images/edit.png';
import UploadScreen from "../components/loadingscreens/uploadscreen";
import Footer from "./Footer";

function Selectionresume() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
  
    const handleClick2 = () => {
        navigate('/uploadresume');
    };

    const handleClick = () => {
        navigate('/form');
    };

    return (
        <>
            <div className="flex justify-between p-2 h-14 bg-blue-300">
                <img src={logo} alt="Logo" style={{ width: '130px' }} />
            </div>
            <div className="min-h-screen flex flex-col ">
                <div className="text-center my-10">
                    <h1 className="font-bold text-3xl mb-3">Are you uploading an existing resume?</h1>
                    <h6 className="text-sm font-medium text-slate-500">Just review, edit, and update it with new information</h6>
                </div>

                <div className="flex flex-col md:flex-row justify-center gap-10 mx-5">
                    <button onClick={handleClick2} className="w-full md:w-auto">
                        <div className="my-10 p-10 px-16 border rounded-md border-gray-400 text-center">
                            <img src={upload} alt="Upload Icon" style={{ height: '50px' }} className="mx-auto mb-4" />
                            <h1 className="font-bold text-lg mb-2 text-slate-700">Yes, upload from my resume</h1>
                            <h6 className="text-xs">We'll give you expert guidance to fill out your info <br /> and enhance your resume, from start to finish</h6>
                        </div>
                    </button>
                    <button onClick={handleClick} className="w-full md:w-auto">
                        <div className="my-10 p-10 border rounded-md border-gray-400 text-center">
                            <img src={edit} alt="Edit Icon" style={{ height: '50px' }} className="mx-auto mb-4" />
                            <h1 className="font-bold text-lg mb-2 text-slate-700">No, start from scratch</h1>
                            <h6 className="text-xs">We'll guide you through the whole process so your <br /> skills can shine</h6>
                        </div>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Selectionresume;
