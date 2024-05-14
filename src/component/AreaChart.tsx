"use client";
import React, { useEffect } from "react";
import "./Chart.css";
import * as d3 from "d3";
import { AreaChartDate } from "@/constants/dataTypes";

type Props = {
  bodyTemperatureMockData: AreaChartDate[];
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
    const height = 550;
    const innerWidth: number = width || 0 - margin.left - margin.right;
    const innerHeight: number = height || 0 - margin.bottom - margin.top;
    d3.select(refrence.current).selectAll("*").remove();
    const svg = d3
      .select(refrence.current)
      .attr("width", "100%")
      .attr("height", "650px");

    svg
      .append("text")
      .text("Body Temperature of Patient")
      .attr("transform", `translate(${innerWidth / 2 - 100} ,20)`)
      .attr("class", "label");

    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const X = (d: AreaChartDate) => d.timestamp;
    const Y = (d: AreaChartDate) => d.temperature;
    const scaleX = d3
      .scaleTime()
      .domain(
        d3.extent(
          bodyTemperatureMockData,
          (d: AreaChartDate) => d.timestamp
        ) as [Date, Date]
      )
      .range([0, innerWidth]);

    const scaleY = d3
      .scaleLinear()
      .domain([0, 100] as [number, number])
      .range([innerHeight, 0]);

    const area = d3
      .area<AreaChartDate>()
      .x((d: AreaChartDate) => scaleX(X(d)) || 0)
      .y0(innerHeight)
      .y1((d: AreaChartDate) => scaleY(Y(d)) || 0);

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
