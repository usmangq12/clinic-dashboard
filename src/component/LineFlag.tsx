"use client";
import React, { useEffect, useRef,useState} from "react";
import "./Chart.css";
import * as d3 from "d3";

interface DataItem {
  timestamp: Date;
  temperature: number;
  pressure: number;
  humidity: number;
};
export const data: DataItem[] = [
  {
    humidity: 0,
    temperature: 0,
    pressure: 0,
    timestamp: new Date("2023-01-01T08:00:00.000Z"),
  },
  {
    humidity: 0,
    temperature: 60,
    pressure: 0,
    timestamp: new Date("2023-01-01T09:00:00.000Z"),
  },
  {
    humidity: 0,
    temperature: 0,
    pressure: 0,
    timestamp: new Date("2023-01-01T10:00:00.000Z"),
  },
  {
    humidity: 0,
    temperature: 0,
    pressure: 0,
    timestamp: new Date("2023-01-01T11:00:00.000Z"),
  },
  {
    humidity: 0,
    temperature: 80,
    pressure: 0,
    timestamp: new Date("2023-01-01T12:00:00.000Z"),
  },
  {
    humidity: 20,
    temperature: 0,
    pressure: 55,
    timestamp: new Date("2023-01-01T13:00:00.000Z"),
  },
  {
    humidity: 0,
    temperature: 0,
    pressure: 0,
    timestamp: new Date("2023-01-01T14:00:00.000Z"),
  },
  {
    humidity: 0,
    temperature: 0,
    pressure: 0,
    timestamp: new Date("2023-01-01T15:00:00.000Z"),
  },
  {
    humidity: 54,
    temperature: 0,
    pressure: 0,
    timestamp: new Date("2023-01-01T16:00:00.000Z"),
  },
  {
    humidity: 0,
    temperature: 0,
    pressure: 15,
    timestamp: new Date("2023-01-01T17:00:00.000Z"),
  },
];
export const LineFlag = () => {
  const refrence = useRef<SVGSVGElement>(null);

  const  humidityData  : {humidity:number, timestamp:Date}[] =data.map((item)=>({humidity:item.humidity,timestamp:item.timestamp}));
  const  pressureData : {pressure:number, timestamp:Date}[] = data.map((item)=>({pressure:item.pressure,timestamp:item.timestamp}));
  const  temperatureData  : {temperature:number, timestamp:Date}[] =data.map((item)=>({temperature:item.temperature,timestamp:item.timestamp}));
  const [result,setResult] = useState<any>(temperatureData)
  
 

  const margin: { top: number; right: number; left: number; bottom: number } = {
    top: 40,
    right: 40,
    left: 60,
    bottom: 35,
  };
  const width : number = 500 - margin.left - margin.right;
  const height : number = 600 - margin.top - margin.bottom;

  const chart = (result:{[key:number]:number,timestamp:Date}) => {
    const svg = d3
      .select(refrence.current)
      .attr("width", 500)
      .attr("height", 600);
    const X = (d : DataItem) => d.timestamp;
    const Y = (d : DataItem) => Object.values(d)[0];
    const xScale = d3
      .scaleTime()
      .domain(d3.extent(data, (d : DataItem) => d.timestamp))
      .range([0, width]);
    const yScale = d3
      .scaleLinear()
      .domain([0, 100] as [number, number])
      .range([height, 0]);
  
      const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);    
      g.append("g").call((d3.axisLeft(yScale)))
      g.append("g").call((d3.axisBottom(xScale))).attr("transform",`translate(0,${height})`)

   g.append("g")
      .selectAll("text")
      .data(result)
      .enter()
      .append("text")
      .attr("x", (d : DataItem) => xScale(X(d)))
      .attr("y", (d : DataItem) => yScale(Y(d)))
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "middle")
      .text(function(d : DataItem) {
       if(Object.values(d)[0]  > 0 ) {
        if(Object.values(d)[0] > 50) {
          return  "\uD83D\uDC4D"
        }
      return   "\uD83D\uDC4E"
       } 

       
      
     });

      g.append("g")
      .selectAll("line")
      .data(result)
      .enter()
      .append("line")
      .attr("x1", (d : DataItem) => xScale(X(d)))
      .attr("y1", (d : DataItem) => yScale(Y(d)))
      .attr("x2", (d : DataItem) => xScale(X(d)))
      .attr("y2", (d : DataItem) =>  height )
      .attr("stroke", "lightgrey")
      .attr("stroke-width","2")
    
  };
  useEffect(() => {
    d3.select(refrence.current).selectAll("*").remove();
    chart(result);
  }, [result]);

  return  <div>

<svg ref={refrence}></svg>
<button onClick={()=>setResult(temperatureData)} style={{backgroundColor:"red",padding:"14px",color:"white"}}>Temperature</button>
<button onClick={()=>setResult(humidityData)} style={{backgroundColor:"blue",padding:"14px",color:"white"}}>Humadity</button>
<button onClick={()=>setResult(pressureData)} style={{backgroundColor:"grey",padding:"14px",color:"white"}}>Pressure</button>
  </div>;
};
