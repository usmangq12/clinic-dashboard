import React, { ChangeEvent } from "react";
import Image from "next/image";
import hospital from "@/assets/hospitalIcon.png";
import Link from "next/link";

type HeaderProps = {
  handlePatientData: (value: string) => void;
};
export const Header = ({ handlePatientData }: HeaderProps) => {
  const handleSelection = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log("e.target.value", e.target.value);
    handlePatientData(e.target.value);
  };

  return (
    <div className="flex  p-3 ">
      <div className="flex-1 flex gap-x-2  items-center ">
        <Image src={hospital} alt="Girl in a jacket" width="28" height="28" />
        <p className="text-white text-center text-xl ">
          Patient Detial Reports
        </p>
       
      </div>
     <div  className="mr-4 flex gap-x-2">
     <div className="p-2 border-white border-solid  border-[1px] rounded-xl hover:bg-white hover:text-black ">
       <Link href ="/report">Report</Link>
       </div>
       <div className="p-2 border-white border-solid  border-[1px] rounded-xl hover:bg-white hover:text-black ">
       <Link href ="/">Home</Link>
       </div>
     </div>
      <select
        className="border-1  text-white bg-[#2B2B30] border border-white border-solid p-0.5  rounded-xl"
        name="Person 1"
        id="1"
        onChange={handleSelection}
      >
        <option value="0">William </option>
        <option value="1">Emily </option>
        <option value="2">James</option>
        <option value="3">Charlotte </option>
      </select>
     
    </div>
  );
};
