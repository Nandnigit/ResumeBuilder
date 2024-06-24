function Formheader() {
    return (<div>  
    <div className="px-5">
    <button className="bg-black  text-white font-bold py-2 px-4 border rounded-lg">
  Return to the Dashboard
</button>
</div> 
<div className="flex justify-center mb-2"><input type="text" placeholder="Untitled" className="block text-lg border-white"/></div>
<h1 className="font-bold text-2xl ">Personal Information</h1>
    </div> );
}

export default Formheader;