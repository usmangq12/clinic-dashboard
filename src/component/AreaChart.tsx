"use client";
import React, { useEffect } from "react";
import "./Chart.css";
import * as d3 from "d3";
import { DataItem } from "@/constants/dataTypes";

type Props = {
  bodyTemperatureMockData: DataItem[];
};

export const AreaChart: React.FC<Props> = ({ bodyTemperatureMockData }) => {
  const refrence = React.useRef<SVGSVGElement>(null);
  const margin: { top: number; right: number; left: number; bottom: number } = {
    top: 40,
    right: 40,
    left: 40,
    bottom: 35,
  };

  const chart = () => {
    const width = 770;
    const height = 480;
    console.log("Area height", height, "Area Widht", width);
    const innerWidth: number = width || 0 - margin.left - margin.right;
    const innerHeight: number = height || 0 - margin.bottom - margin.top;
    d3.select(refrence.current).selectAll("*").remove();
    const svg = d3
      .select(refrence.current)
      .attr("width", "100%")
      .attr("height", "550px");

    svg
      .append("text")
      .text("Body Temperature of Patient")
      .attr("transform", `translate(${innerWidth / 2 - 100} ,20)`)
      .attr("class", "label");

    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const X = (d: DataItem) => d.timestamp;
    const Y = (d: DataItem) => d.temperature;
    const scaleX = d3
      .scaleTime()
      .domain(
        d3.extent(bodyTemperatureMockData, (d: DataItem) => d.timestamp) as [
          DataItem[],
          Date
        ]
      )
      .range([0, innerWidth]);

    const scaleY = d3
      .scaleLinear()
      .domain([0, 100] as [number, number])
      .range([innerHeight, 0]);

    const area = d3
      .area<DataItem>()
      .x((d: DataItem) => scaleX(X(d)) || 0)
      .y0(innerHeight)
      .y1((d: DataItem) => scaleY(Y(d)) || 0);

    g.append("g")
      .call(d3.axisBottom(scaleX).tickSizeOuter(0).tickPadding(10))

      .attr("transform", `translate(0,${innerHeight})`);
    g.append("g")
      .call(d3.axisLeft(scaleY).tickSizeOuter(0).tickPadding(10))

      .select(".domain")
      .classed("lineAxis", true);

    g.append("g")
      .append("path")
      .attr("fill", "#ff6666")
      .attr("d", area(bodyTemperatureMockData));
  };
  useEffect(() => {
    chart();
  }, [bodyTemperatureMockData]);

  return <svg ref={refrence}></svg>;
};
