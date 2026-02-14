import React from "react";
import "../index.css";

const Dock = ({windowstate, setWindowState}) => {
  return (
    <footer className="flex gap-3 backdrop-blur-[10px] px-4 py-3 rounded-xl absolute bottom-4 left-[50%] translate-x-[-45%]">

      <div 
      onClick={()=>{setWindowState(state=>({...state, github:true}))}}
      className="icon flex items-center hover:scale-[1.25] hover:translate-y-[-20%] justify-center px-2 aspect-square rounded-sm bg-black cursor-pointer w-11">
        <img src="/icons/github.svg" alt="" />
      </div>

      <div
      onClick={()=>{window.open('https://calendar.google.com/calendar/u/0/r', '_blank')}}
       className="icon flex items-center hover:scale-[1.25] hover:translate-y-[-20%] justify-center p-2 aspect-square rounded-sm bg-linear-to-b from-purple-600 to-purple-500 cursor-pointer w-11">
        <img src="/icons/calender.svg" alt="" />
      </div>

      <div 
      onClick={()=>{setWindowState(state=>({...state, cli:true}))}}
      className="icon flex items-center hover:scale-[1.25] hover:translate-y-[-20%] justify-center p-2 aspect-square rounded-sm bg-black cursor-pointer w-11">
        <img src="/icons/cli.svg" alt="" />
      </div>

      <div
      onClick={()=>{setWindowState(state=>({...state, note:true}))}}
       className="icon flex items-center hover:scale-[1.25] hover:translate-y-[-20%] justify-center p-2 aspect-square rounded-sm bg-linear-to-b from-orange-600 to-orange-500 cursor-pointer w-11">
        <img src="/icons/note.svg" alt="" />
      </div>

      <div
      onClick={()=>{window.open('mailto:sohamghadai28@gmail.com', '_blank')}}
       className="icon flex items-center hover:scale-[1.25] hover:translate-y-[-20%] justify-center p-2 aspect-square rounded-sm bg-linear-to-b from-yellow-500 to-yellow-400 cursor-pointer w-11">
        <img src="/icons/mail.svg" alt="" />
      </div>

      <div
      onClick={()=>{setWindowState(state=>({...state, spotify:true}))}}
       className="icon flex items-center hover:scale-[1.25] hover:translate-y-[-20%] justify-center p-2 aspect-square rounded-sm bg-linear-to-b from-green-600 to-green-500 cursor-pointer w-11">
        <img src="/icons/spotify.svg" alt="" />
      </div>

      <div 
      onClick={()=>{setWindowState(state=>({...state, resume:true}))}}
      className="icon flex items-center hover:scale-[1.25] hover:translate-y-[-20%] justify-center p-2 aspect-square rounded-sm bg-linear-to-b from-red-600 to-red-500 cursor-pointer w-11">
        <img src="/icons/pdf.svg" alt="" />
      </div>

      <div
      onClick={()=>{window.open('https://www.linkedin.com/in/soham-ghadai-55642035a/', '_blank')}}
       className="icon flex items-center hover:scale-[1.25] hover:translate-y-[-20%] justify-center p-2 aspect-square rounded-sm bg-linear-to-b from-purple-600 to-purple-500 cursor-pointer w-11">
        <img src="/icons/link.svg" alt="" />
      </div>
      
    </footer>
  );
};

export default Dock;
