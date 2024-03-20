"use client";
import { AreaChart } from "./AreaChart";
import { Header } from "./Header";
import { LineChart } from "./LineChart";
import { PieChart } from "./PieChart";
import { Stack } from "./Stack";
import { useState } from "react";
import { hospitalData } from "./data";

export const Dashboard = () => {
  const [patientData, setPatientData] = useState(hospitalData[0]);

  const handlePatientData = (value: string) => {
    const updatedData = hospitalData.find((item) => item.value === value);
    if (updatedData) {
      setPatientData(updatedData);
    }
  };

  return (
    <div className="flex flex-col border-2 border-black gap-4 h-[1450px]">
      <div className="bg-[#2B2B30] p-3">
        <Header handlePatientData={handlePatientData} />
      </div>
      <div className="flex-1 gap-4 max-h-full flex flex-col ml-2 mr-2">
        <div className="flex-1 max-h-full bg-[#2B2B30] ">
          <LineChart data={patientData.data} />
        </div>
        <div className="flex-1 max-h-full flex gap-2">
          <div className="flex-1 bg-[#2B2B30] p-2 pl-1">
            <AreaChart
              bodyTemperatureMockData={patientData.bodyTemperatureMockData}
            />
          </div>
          <div className="flex-1 flex justify-center items-center bg-[#2B2B30] p-2">
            <PieChart pieChartData={patientData.pieChartData} />
          </div>
        </div>
        <div className="flex-1 max-h-full bg-[#2B2B30]">
          <Stack patientsData={patientData.patientsData} />
        </div>
      </div>
    </div>
  );
};
