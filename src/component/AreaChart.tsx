"use client";
import React, { useEffect } from "react";
import "./Chart.css";
import * as d3 from "d3";
import { AreaChartDate } from "@/constants/dataTypes";

type Props = {
  bodyTemperatureMockData: AreaChartDate[];
};

export const AreaChart: React.FC<Props> = ({ bodyTemperatureMockData }) => {
  const reference = React.useRef<SVGSVGElement>(null);
  const margin: { top: number; right: number; left: number; bottom: number } = {
    top: 40,
    right: 40,
    left: 40,
    bottom: 35,
  };

  const chart = () => {
    const width = 770;
    const height = 650;
    const innerWidth: number = width - margin.left - margin.right;
    const innerHeight: number = height - margin.bottom - margin.top;
    d3.select(reference.current).selectAll("*").remove();
    const svg = d3.select(reference.current);

    svg.attr("width", "100%").attr("height", "650px");

    svg
      .append("text")
      .text("Patient Body Temperature")
      .attr("transform", `translate(${innerWidth / 2 - 100}, 20)`)
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

    const scaleY = d3.scaleLinear().domain([0, 100]).range([innerHeight, 0]);

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
      .attr("d", area(bodyTemperatureMockData))
      .attr("class", "area");

    const tooltip = d3.select(".tooltip");

    const verticalLine = g
      .append("line")
      .attr("class", "vertical-line")
      .style("stroke", "white")
      .style("stroke-width", 1)
      .style("opacity", 0);

    g.selectAll(".dot")
      .data(bodyTemperatureMockData)
      .enter()
      .append("circle")
      .attr("class", "dot")
      .attr("cx", (d: AreaChartDate) => scaleX(X(d)))
      .attr("cy", (d: AreaChartDate) => scaleY(Y(d)))
      .attr("r", 2)
      .style("fill", "lightblue")
      .on("mouseover", (event, d) => {
        const html = `<h4 >Temperature: ${
          d.temperature
        }</h4><p>Date: ${`${d.timestamp.getHours()}:${d.timestamp.getMinutes()}:${d.timestamp.getSeconds()}`}</p>`;
        const [x, y] = d3.pointer(event);
        const svgContainer = reference.current;
        const containerRect = svgContainer?.getBoundingClientRect();
        const positionSetting = x + (containerRect?.left || 0) + 65;
        if (!containerRect?.top) {
          return;
        }
        tooltip
          .html(html)
          .style("display", "block")
          .style("left", `${positionSetting - 20}px`)
          .style("top", `${y + containerRect?.top + 400}px`);
          verticalLine
          .attr("x1", positionSetting - 85)
          .attr("x2", positionSetting  - 85)
          .attr("y1", 0)
          .attr("y2", innerHeight)
          .style("opacity", 1);
      })

      .on("mouseout", () => {
        tooltip.style("display", "none");
        verticalLine.style("opacity", 0);
      });
  };

  useEffect(() => {
    chart();
  }, [bodyTemperatureMockData]);

  return (
    <>
      <svg ref={reference}></svg>
      <div
        className="tooltip"
        id="tooltip"
        style={{
          maxWidth: "333px",
          backgroundColor: "black",
          color: "white",
          padding: "5px",
          position: "absolute",
          display: "none",
        }}
      ></div>
    </>
  );
};
