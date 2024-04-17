import React, { ChangeEvent } from "react";
import Image from "next/image";
import hospital from "@/assets/hospitalIcon.png";

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
      <div className="flex-1 flex gap-x-2 ">
        <Image src={hospital} alt="Girl in a jacket" width="28" height="28" />
        <p className="text-white text-center text-xl ">
          Patient Detial Reports
        </p>
      </div>
      <select
        className="border-1 border-white text-white bg-[#2B2B30] border border-white border-solid p-0.5 "
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
