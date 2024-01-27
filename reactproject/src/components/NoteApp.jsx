import React, { useState } from "react";
import Navbar from "./Navbar";

const NoteApp = () => {
const[inputText,setInputText]=useState("")

  return (
    <>
      <Navbar />

      {/* --createnode-- */}
      <div className="my-4 mx-10">
        <h1 className="my-2 text-2xl font-bold">Notes</h1>
        <div className="bg-red-100 rounded-lg w-[30%]">
          <textarea value={inputText} onChange={(e)=>setInputText(e.target.value)}  name="" id="" cols="10" rows="5" placeholder="Type..." className="bg-transparent p-2 w-[100%] resize-none outline-none"></textarea>
        <div>
        <button className="m-2">Delete</button>
        <button>Edit</button>
        </div>
        </div>

      </div>
    </>
  );
};

export default NoteApp;
