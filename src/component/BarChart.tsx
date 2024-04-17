"use client";
import React, { useEffect } from "react";
import * as d3 from "d3";
const data = [
  {
    name: "A",
    value: 38,
  },
  {
    name: "B",
    value: 90,
  },
  {
    name: "C",
    value: 60,
  },
  {
    name: "D",
    value: 20,
  },
  {
    name: "E",
    value: 43,
  },
  {
    name: "F",
    value: 67,
  },
];
export const BarChart = () => {
  console.log("Data", data);
  const refrence = React.useRef<SVGSVGElement>(null);
  useEffect(() => {
    const margin: { top: number; right: number; left: number; bottom: number } =
      {
        top: 40,
        right: 40,
        left: 60,
        bottom: 35,
      };
    const width = 600 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;
    const svg = d3
      .select(refrence.current)
      .attr("width", 600)
      .attr("height", 500);
    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);
    g.append("text")
      .attr("transform", `translate(${width / 2},10)`)
      .text("Bar Chart");
    // const xScale = d3
    //   .scaleTime()
    //   .domain(
    //     data,
    //     d3.extent(data, (d) => d.timestamp)
    //   )
    //   .range([0, width]);
    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.name))
      .range([0, width])
      .padding(0.1);

    const maxValue = d3.max(data, (d) => d.value);
    const domainMax = maxValue !== undefined ? maxValue : 0;

    const yScale = d3.scaleLinear().domain([0, domainMax]).range([height, 0]);

    g.append("g")
      .call(d3.axisBottom(xScale))
      .attr("transform", `translate(0,${height})`);
    g.append("g").call(d3.axisLeft(yScale));
    g.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", function (d) {
        return xScale(d.name)!;
      })
      .attr("width", xScale.bandwidth())
      .attr("y", function (d) {
        return yScale(d.value);
      })
      .attr("height", function (d) {
        return height - yScale(d.value);
      })
      .attr("fill", "grey");
  }, []);

  return (
    <div>
      <svg ref={refrence}></svg>
    </div>
  );
};
