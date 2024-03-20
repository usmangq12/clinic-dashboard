"use client";
import react, { useEffect, useState, useRef, useMemo } from "react";
import "./Chart.css";
import * as d3 from "d3";

interface patient {
  date: Date;
  admitted: number;
  treatment: number;
  recovered: number;
}


export const Stack = ({patientsData}:patient[]) => {
  
  const refrence = useRef<SVGSVGElement>(null);

  useEffect(() => {
    d3.select(refrence.current).selectAll("*").remove();
    const barWidth = refrence.current?.parentElement?.clientWidth;
    const barHeight = refrence.current?.parentElement?.clientHeight;
    if (!barWidth || !barHeight) {
      return;
    }
    const svgline = d3
      .select(refrence.current)
      .attr("width", barWidth)
      .attr("height", barHeight);
    const margin: { top: number; right: number; left: number; bottom: number } =
      {
        top: 40,
        right: 40,
        left: 60,
        bottom: 35,
      };
    const gLine = svgline
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const widthLine: number | undefined | null =
      barWidth - margin.left - margin.right;
    const heightLine: number | undefined | null =
      barHeight - margin.top - margin.bottom;
    const color = d3
      .scaleOrdinal()
      .domain(["admitted", "treatment", "recovered"])
      .range(["#EA6E92", "#141543", "#7A78F7"]);
    type stackOuterArray = { number: number; data: patient };
    interface MyDataType {
      0: number;
      1: number;
      2: {
        data: {
          admitted: number;
        };
      };
    }
    const xScaleLine = d3
      .scaleBand()
      .domain(patientsData.map((item) => item.date))

      .range([0, widthLine])
      .paddingInner(0.3);

    const yScaleLine = d3
      .scaleLinear()
      .domain([0, 100])
      .range([heightLine, 0])
      .nice();

    gLine
      .append("g")
      .call(
        d3
          .axisBottom(xScaleLine)
          .tickFormat((date: Date, i: number) =>
            i % 2 === 0 ? "" : d3.timeFormat("%d %b")(date)
          )
          .tickPadding(8)
      )
      .attr("transform", `translate(0,${heightLine})`)
      .select(".domain")
      .classed("lineAxis", true);
    gLine
      .append("g")
      .call(d3.axisLeft(yScaleLine).tickPadding(8))
      .select(".domain")
      .classed("lineAxis", true);

    const series = d3.stack().keys(["admitted", "treatment", "recovered"]);
    const stackData = series(patientsData);
    // area Chart
    // var areaGen = d3
    //   .area()
    //   .x((d) => xScaleBand(d.data.date))
    //   .y0((d) => yScale(d[0]))
    //   .y1((d) => yScale(d[1]));
    // g.selectAll(".areas")
    //   .data(stackData)
    //   .join("path")
    //   .attr("d", areaGen)
    //   .attr("fill", (d) => color(d.key));

    const handleToolTip = (event: PointerEvent, d: stackOuterArray) => {
      console.log("Event**", event);
      const html = `<table   ><thead   ><tr><th >Hospital ID</th><th>Health Status</th><th>Count</th><th>Date</th></thead><tbody ><tr >
      <td>H123</td>
      <td>Admitted</td>
      <td>${d.data.admitted}</td>
      <td>${d.data.date.getDate()} ${d.data.date.toLocaleString("default", {
        month: "short",
      })}</td>
    </tr>
    <tr >
      <td>H123</td>
      <td>Treatment</td>
      <td>${d.data.treatment}</td>
      <td>${d.data.date.getDate()} ${d.data.date.toLocaleString("default", {
        month: "short",
      })}</td>
    </tr>
    <tr >
      <td>H123</td>
      <td>Recovered</td>
      <td>${d.data.recovered}</td>
      <td>${d.data.date.getDate()} ${d.data.date.toLocaleString("default", {
        month: "short",
      })}</td>
    </tr>
    
    
    </tbody></table>`;

      const [x, y] = d3.pointer(event);
      console.log("X", x, "Y", y);
      const svgContainer = refrence.current;

      const containerRect = svgContainer?.getBoundingClientRect();
      const positionSetting = x + containerRect?.left + 65;

      if (
        !containerRect?.top ||
        !containerRect?.left ||
        !containerRect?.right
      ) {
        return;
      }
      let tooltipElement = document.getElementById("tooltip");
       
      const windowWidth = window.innerWidth;
    const tooltipWidth = tooltipElement?.offsetWidth;
   
    const rightPosition = windowWidth - x - 120;
    console.log("tooltipWidth",tooltipWidth,"rightPosition",rightPosition);

      // Check if the element exists before attempting to remove it
     
      if (positionSetting>=1196) {
        console.log("tooltipEelment?",tooltipElement);
       if(tooltipElement?.style.left) {
        tooltipElement.style.left = ''
       }
      }
      else {
        console.log("tooltipEelment?",tooltipElement);
        if(tooltipElement?.style.right) {
          tooltipElement.style.right = ''
         }
      }
      tooltip
        .html(html)
        .style("display", "block")

        .style(
          positionSetting >= 1196 ? "right" : "left",
          positionSetting >= 1196 ? `${rightPosition}px` : `${positionSetting}px`
        )
        .style(
          "top",
          `${
            positionSetting >= 1196
              ? y + containerRect?.top + 500
              : y + containerRect?.top + 500
          }px`
        );
    };
    const colorArrays: string[] = ["#EA6E92", "#141543", "#7A78F7"];
    colorArrays.map((item, index) => {
      const circle = gLine
        .append("g")
        .attr("transform", `translate(${30 * ( index === 0 ? index + 0.8 : index + 0.7 ) * 4},-15)`);


      circle
        .append("circle")
        .attr("x", "50%")
        .attr("y", "10")
        .attr("fill", `${item}`)
        .attr("r", 6);

      circle
        .append("text")
        .text(
          `${
            index === 0 ? "Admitted" : index === 1 ? "Treatment" : "Recovered"
          }`
        )
        .attr("x", 16)
        .attr("y", 6)
        .attr("fill", "white");
    });
    const sel = gLine
      .append("g")
      .selectAll("g.series")
      .data(stackData)
      .join("g")
      .classed("series", true)
      .style("fill", (d: { key: string }) => color(d.key));
    sel
      .selectAll("rect")
      .data((d: MyDataType) => {
        console.log("D", d);
        return d;
      })
      .join("rect")
      .attr("width", xScaleLine.bandwidth())
      .attr("y", (d: MyDataType) => yScaleLine(d[1]))
      .attr("x", (d: stackOuterArray) => xScaleLine(d.data.date))
      .attr("height", (d: MyDataType) => yScaleLine(d[0]) - yScaleLine(d[1]))
      .attr("class", "bar");
    const tooltip = d3.select(".tooltip");
    d3.selectAll(".bar")
      .on("mouseover", (event: PointerEvent, d: stackOuterArray) => {
        handleToolTip(event, d);
      })

      .on("mouseout", () => {
        tooltip.style("display", "none");
      });
  }, [patientsData]);

  return (
    <>
      <svg ref={refrence}></svg>
      <div className="tooltip" id = "tooltip" style={{ maxWidth: "333px",backgroundColor:"black" }}></div>
    </>
  );
};