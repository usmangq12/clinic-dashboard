import React from "react";
import Image from "next/image";
import hospital from "@/component/hospitalIcon.png";
export const Header = ({ handlePatientData }) => {
  const handleSelection = (e) => {
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
        style={{ backgroundColor: "#2B2B30" }}
        className=" bg-black border-1 border-white text-white "
        name="Person 1"
        id="1"
        onChange={handleSelection}
      >
        <option value="0">Person 1 </option>
        <option value="1">Person 2 </option>
        <option value="2">Person 3 </option>
        <option value="3">Person 4 </option>
      </select>
    </div>
  );
};
