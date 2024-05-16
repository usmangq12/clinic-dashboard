"use client";
import React, { useState } from "react";
import { Stack } from "./Stack";
import { clinicData } from "@/constants/data";
import { Header } from "./Header";
import { PieChart } from "./PieChart";
import { Patient, PieChartData } from "@/constants/dataTypes";

const details = [
  {
    heading: "Hospital ID",
    description: "#12121",
  },
  {
    heading: "Number of Patients Recovered",
    description: "229",
  },
  {
    heading: "Number of Patients Admitted",
    description: "186",
  },
  {
    heading: "Number of Doctors",
    description: "14",
  },
];
export const Clinic = () => {
  return (
    <div className=" bg-black flex flex-col gap-4   ">
      <h4 className="text-center text-xl text-white p-4 flex justify-center items-center bg-[#2B2B30] mt-4">
        Clinic Dashboard
      </h4>
      <div className="flex flex-col gap-4 ">
        <div className=" max-h-[350px] h-[400px] flex gap-4 max-h-full">
          <div className="flex flex-1 flex-wrap">
            <div className=" w-1/2 h-1/2 flex  bg-black pb-4 pr-4   ">
              <div className="flex flex-col justify-center items-center gap-4 border-black border  rounded py-8 flex-1 bg-[#2B2B30]">
                <p className=" font-black text-2xl"> #12121</p>
                <h4 className="text-lg text-blue-400 font-semibold  ">
                  Clinic ID
                </h4>
              </div>
            </div>

            <div className=" w-1/2 h-1/2 flex  bg-black  pb-4   ">
              <div className="flex flex-col justify-center items-center gap-4 border-black border rounded py-8 flex-1 bg-[#2B2B30] ">
                <p className=" font-black text-2xl"> 321</p>
                <h4 className="text-lg text-blue-400 font-semibold  ">
                  Number of Patients Admitted
                </h4>
              </div>
            </div>
            <div className=" w-1/2 h-1/2 flex   bg-black pr-4   ">
              <div className="flex flex-col justify-center items-center gap-4 border-black border py-8  rounded flex-1 bg-[#2B2B30]">
                <p className=" font-black text-2xl">322</p>
                <h4 className="text-lg text-blue-400 font-semibold  ">
                  Number of Patients Recovered
                </h4>
              </div>
            </div>
            <div className="w-1/2 h-1/2  flex   bg-black   ">
              <div className="flex flex-col justify-center items-center gap-4 border-black border py-8  rounded flex-1 bg-[#2B2B30]">
                <p className=" font-black text-2xl"> 14</p>
                <h4 className="text-lg text-blue-400 font-semibold  ">
                  Number of Doctors
                </h4>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-[#2B2B30]">
            <PieChart pieChartData={clinicData[1] as PieChartData[]} />
          </div>
        </div>
        <div className=" min-h-[450px] flex-1 max-h-full bg-[#2B2B30]">
          <Stack patientsData={clinicData[0] as Patient[]} />
        </div>
      </div>
    </div>
  );
};
