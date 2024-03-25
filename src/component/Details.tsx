"use client";
import React, { useState, useEffect } from "react";


export const Detail = () => {
  return (
  <>
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
