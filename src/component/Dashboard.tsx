"use client";
import { AreaChart } from "./AreaChart";
import { LineChart } from "./LineChart";
import { useState } from "react";
import { hospitalData } from "../constants/data";
import { DountChart } from "./DountChart";
import { useParams } from "next/navigation";
export const Dashboard = () => {
  const pathname = useParams();
  const { id } = pathname;
  const [patientData, setPatientData] = useState(hospitalData[Number(id)]);

  return (
    <div className="flex flex-col  border-black gap-4 overflow-y-hidden bg-black my-4">
      <div className=" gap-4  flex flex-col  ">
        <div className="min-h-[450px]  bg-[#2B2B30] ">
          <LineChart data={patientData.data} />
        </div>

        <div className="  min-h-[450px] flex gap-4">
          <div className=" flex-1    bg-[#2B2B30] p-2 pl-1 ">
            <AreaChart
              bodyTemperatureMockData={patientData.bodyTemperatureMockData}
            />
          </div>
          <div className="  flex-1 flex   bg-[#2B2B30] p-2  ">
            <DountChart dountChartData={patientData.pieChartData} />
          </div>
        </div>
      </div>
    </div>
  );
};
