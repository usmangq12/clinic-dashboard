"use client";
import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import hospital from "@/assets/hospitalIcon.png";
import Link from "next/link";
import { useRouter } from "next/navigation";

type HeaderProps = {
  handlePatientData?: (value: string) => void;
};
export const Header = ({ handlePatientData }: HeaderProps) => {
  const router = useRouter();
  const [navigation, setNavigation] = useState("home");
  const [showDropdown, setShowDropdown] = useState(false);
  const [DropdownValue, setDropdownValue] = useState("0");

  const handleNavigation = (name: string) => {
    if (name === "patient") {
      setNavigation(name);
      return setShowDropdown(true);
    }
    setNavigation(name);
    setShowDropdown(false);
  };

  const handleSelection = (e: ChangeEvent<HTMLSelectElement>) => {
    setDropdownValue(e.target.value);
    router.push(`/patient/${e.target.value}`);
  };

  return (
    <div className="flex   justify-center items-center ">
      <div className="flex-1 flex gap-x-2  items-center ">
        <Image src={hospital} alt="Girl in a jacket" width="32" height="32" />
        <p className="text-white text-center text-xl ">
          Clinic and Patient Management System
        </p>
      </div>
      <div className="mr-4 flex gap-x-4">
        <Link href="/" onClick={() => handleNavigation("home")}>
          <div
            className={` px-2 py-1 border-solid text-sm rounded-xl ${
              navigation === "home"
                ? " bg-white text-black hover:text-black "
                : "hover:bg-neutral-700  hover:text-white"
            }     `}
          >
            Home
          </div>
        </Link>
        <Link href="/report" onClick={() => handleNavigation("report")}>
          <div
            className={`px-2 py-1  border-solid text-sm  rounded-xl   ${
              navigation === "report"
                ? "bg-white text-black hover:text-black"
                : "hover:bg-neutral-700 hover:text-white"
            } `}
          >
            Report
          </div>
        </Link>
        <Link href="/patient/0" onClick={() => handleNavigation("patient")}>
          <div
            className={`px-2 py-1  border-solid text-sm rounded-xl   ${
              navigation === "patient"
                ? "bg-white text-black hover:text-black "
                : "hover:bg-neutral-700 hover:text-white"
            }`}
          >
            Patient
          </div>
        </Link>
      </div>
      {showDropdown && (
        <select
          className="border-b-2 text-sm  text-white bg-[#2B2B30]  border-white border-solid p-0.5  focus-visible:outline-0"
          name="Person 1"
          id="1"
          onChange={handleSelection}
        >
          <option value="0">William</option>
          <option value="1">Emily</option>
          <option value="2">James</option>
          <option value="3">Charlotte</option>
        </select>
      )}
    </div>
  );
};
