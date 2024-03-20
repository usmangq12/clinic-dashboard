"use client";
import React, { useState, useEffect } from "react";


export const Detail = () => {
  return (
  <>
    {/* <div className="flex bg-[#484644]  p-4 ">
      <div className="bg-red-400 flex-1 flex gap-x-8">
      <Image src= {hospital} alt="Girl in a jacket" width="24" height="24"/>
      <p className="text-white text-center ">Patient Detial Reports</p>
      </div>
     <select className="bg-[#484644] border-2 border-white text-white p-2">
      <option value="1">Person 1 </option>
      <option value="2">Person 2 </option>
      <option value="3">Person 3 </option>
      <option value="4">Person 4 </option>
     </select>
    </div> */}
   <div className=" mt-3.5 p-4  flex justify-between bg-black  ">
   <div className=" bg-[#484644] p-4">
   <h4 className="text-white text-2xl text-center">Number of Patients</h4>
     <p className="text-white text-lg text-center mt-2">30</p>
   </div>
   <div className=" bg-[#484644] p-4" >
   <h4 className="text-white text-2xl text-center">Number of Patients</h4>
     <p className="text-white text-lg text-center mt-2">20</p>
   </div>
   <div className=" bg-[#484644] p-4">
   <h4 className="text-white text-2xl text-center">Number of Patients</h4>
     <p className="text-white text-lg text-center mt-2">20</p>
   </div>
   </div>
  </>
  );
};
