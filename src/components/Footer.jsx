import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-300 text-[#F2931C] font-ubuntu p sticky bottom-0">
      <div className="flex justify-center items-center gap-4 flex-wrap">
        <a href="/form" className="text-blue-950 no-underline hover:bg-blue-950 hover:text-[#F2931C] p-2">Home</a>
        <a href="/form" className="text-blue-950 no-underline hover:bg-blue-950 hover:text-[#F2931C] p-2">Terms</a>
        <a href="/form" className="text-blue-950 no-underline hover:bg-blue-950 hover:text-[#F2931C] p-2">Privacy Policy</a>
        <a href="/form" className="text-blue-950 no-underline hover:bg-blue-950 hover:text-[#F2931C] p-2">Contact</a>
        <span className="text-blue-950">© Copyright By <strong className='mx-2'> Hyper V Solutions</strong> | All Rights Reserved</span>
      </div>
    </footer>
  );
}

export default Footer;
