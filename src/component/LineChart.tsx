"use client";
import React, { useEffect } from "react";
import "./Chart.css";
import * as d3 from "d3";
import { DataItem } from "@/constants/dataTypes";

type Props = {
  data: DataItem[];
};
export const LineChart: React.FC<Props> = ({ data }) => {

  const margin: { top: number; right: number; left: number; bottom: number } = {
    top: 40,
    right: 40,
    left: 60,
    bottom: 35,
  };
  const refrence = React.useRef<SVGSVGElement>(null);
  const temperatureData: { temperature: number; timestamp: Date }[] = data?.map(
    (item) => ({ temperature: item.temperature, timestamp: item.timestamp })
  );
  const pressureData: { pressure: number; timestamp: Date }[] = data?.map(
    (item) => ({ pressure: item.pressure, timestamp: item.timestamp })
  );
  const humidityData: { humidity: number; timestamp: Date }[] = data?.map(
    (item) => ({ humidity: item.humidity, timestamp: item.timestamp })
  );
  // const patientConditionData: { patientCondition: boolean; timestamp: Date }[] =
  //   data?.map((item) => ({
  //     patientCondition: item.patientCondition,
  //     timestamp: item.timestamp,
  //   }));
  const completeData: [
    { temperature: number; timestamp: Date }[],
    { pressure: number; timestamp: Date }[],
    { humidity: number; timestamp: Date }[]
  ] = [temperatureData, pressureData, humidityData];
  const colorArrays: string[] = ["#ff6666", "#66b366", "#9cc2cf"];

  const chart = () => {
    const svgContainer = refrence.current?.parentElement;
    const width = svgContainer ? svgContainer.clientWidth : 0;
    const height = svgContainer ? svgContainer.clientHeight : 0;
    const innerWidth: number = width - margin.left - margin.right;
    const innerHeight: number = height - margin.bottom - margin.top;
    const svg = d3
      .select(refrence.current)
      .attr("width", "100%")
     .attr("height", "450px");

    svg
      .append("text")
      .text("Patient Room Environment")
      .attr("transform", `translate(${innerWidth / 2},25)`)
      .attr("class", "label");

    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);
    completeData.forEach((item, index: number) => {
      console.log("Items", item, "g", g);
      const selectedColor = colorArrays.filter(
        (item, i) => i === index && item
      );

      const handleToolTip = (event: MouseEvent, d: DataItem) => {
        const html = ` <table   ><thead   ><tr><th >Date</th><th> ${
          Object.keys(d)[0]
        }</th></thead><tbody ><tr >
    <td> ${d.timestamp.getDate()} ${d.timestamp.toLocaleString("default", {
          month: "short",
        })}</td>
    <td> ${Object.values(d)[0]}</td>
    
    </tr>
    </tbody></table> `;
        const [x, y] = d3.pointer(event);
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
        let tooltipElement = document.getElementById("tooltips");

        const windowWidth = window.innerWidth;
        const tooltipWidth = tooltipElement?.offsetWidth;

        const rightPosition = windowWidth - x - 120;
        console.log(
          "tooltipWidth in Line Chart ",
          tooltipWidth,
          "Position Setting",
          positionSetting,
          "rightPosition in the Line chart ",
          rightPosition
        );

        if (positionSetting >= 1196) {
          console.log("tooltipEelment?", tooltipElement);
          if (tooltipElement?.style.left) {
            tooltipElement.style.left = "";
          }
        } else {
          if (tooltipElement?.style.right) {
            tooltipElement.style.right = "";
          }
        }
        tooltip
          .html(html)
          .style("display", "block")

          .style(
            positionSetting >= 1196 ? "right" : "left",
            positionSetting >= 1196
              ? `${rightPosition + 50}px`
              : `${positionSetting}px`
          )
          .style("top", `${y + containerRect?.top}px`);
      };

      const X = (d: DataItem) => d.timestamp;
      const Y = (d: DataItem) => Object.values(d)[0];
      const scaleX = d3
        .scaleTime()
        .domain(d3.extent(item, (d: DataItem) => d.timestamp) as [Date, Date])
        .range([0, innerWidth]);

      const scaleY = d3
        .scaleLinear()
        .domain([0, 100] as [number, number])
        .range([innerHeight, 0]);

      const line: d3.Line<DataItem> = d3
        .line<DataItem>()
        .x((d: DataItem) => scaleX(X(d)) || 0)
        .y((d: DataItem) => scaleY(Y(d)) || 0);

      g.append("g")
        .call(d3.axisBottom(scaleX).tickSizeOuter(0).tickPadding(10))

        .attr("transform", `translate(0,${innerHeight})`);
      g.append("g")
        .call(d3.axisLeft(scaleY).tickSizeOuter(0).tickPadding(10))

        .select(".domain")
        .classed("lineAxis", true);

      g.append("g")
        .selectAll("circle")
        .data(item)
        .enter()
        .append("circle")
        .attr("fill", `${selectedColor}`)
        .attr("cx", (d: DataItem) => scaleX(X(d)))
        .attr("cy", (d: DataItem) => scaleY(Y(d)))

        .attr("r", 6)
        .attr("stroke", "transparent")
        .attr("stroke-width", 2)
        .attr("class", "lineToolTip");
      const tooltip = d3.select(".tooltips");

      d3.selectAll(".lineToolTip")
        .on("mouseover", (event: MouseEvent, d: DataItem) => {
          handleToolTip(event, d);
        })
        .on("mouseout", () => {
          tooltip.style("display", "none");
        });
      //   g.append("g")
      //   .selectAll("text")
      //   .data(result.filter(item => Object.values(item)[0]))
      //   .enter()
      //   .append("text")
      //   .attr("x", (d : DataItem) => scaleX(X(d)))
      //   .attr("y", (d : DataItem) => 22)
      //   .attr("text-anchor", "middle")
      //   .attr("dominant-baseline", "middle")
      //   .text(function(d : DataItem,index:number) {
      //    if(Object.values(d)[0]   ) {
      //    if(index===1) {
      //     return Object.keys(d)[0]
      //    }
      //    else if (index===2)
      //    {
      //     return "\uD83D\uDC4E"
      //    }
      //       return  "\uD83D\uDC4D"

      //    }

      //    ""

      //  });

      //  g.append("g")
      //  .selectAll("line")
      //  .data(result.filter(item => Object.values(item)[0]))
      //  .enter()
      //  .append("line")
      //  .attr("x1", (d : DataItem) => scaleX(X(d)))
      //  .attr("y1",  30)
      //  .attr("x2", (d : DataItem) => scaleX(X(d)))
      //  .attr("y2",   height )
      //  .attr("stroke", "black")
      //  .attr("stroke-width","2")
      g.append("g")
        .append("path")
        .attr("fill", "none")
        .attr("stroke", `${selectedColor}`)
        .attr("stroke-width", 2)
        .attr("d", line(item));

      const circle = g
        .append("g")
        .attr(
          "transform",
          `translate(${30 * (index === 0 ? index + 0.5 : index + 0.7) * 4},-20)`
        );

      circle
        .append("circle")
        .attr("x", "50%")
        .attr("y", "10")
        .attr("fill", `${selectedColor}`)
        .attr("r", 6);

      circle
        .append("text")
        .text(`${Object.keys(item[0])[0]}`)
        .attr("x", 16)
        .attr("y", 6)
        .attr("fill", "white");
    });
  };
  useEffect(() => {
    d3.select(refrence.current).selectAll("*").remove();
    chart();
  }, [data]);

  return (
    <>
      <svg ref={refrence}></svg>
      <div className="tooltips" id="tooltips"></div>
    </>
  );
};
//   {
//     /* <button onClick={()=>setResult(patientConditionData)} style={{backgroundColor:"red",padding:"14px",color:"white"}}>Patient Condition</button>
// <button onClick={()=>setResult(urinationData)} style={{backgroundColor:"blue",padding:"14px",color:"white"}}>Urination</button> */
//   }
