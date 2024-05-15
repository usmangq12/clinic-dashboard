//@ts-nocheck
"use client";
import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { Patient } from "@/constants/dataTypes";

type Props = {
  patientsData: Patient[];
};

export const Stack: React.FC<Props> = ({ patientsData }) => {
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
    svgline
      .append("text")
      .text("Records of Patients")
      .attr("transform", `translate(${755},30)`)
      .attr("class", "label")
      .style("font-size", "22px");
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
    type stackOuterArray = { 0: number; 1: number; data: Patient };
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
      .domain(patientsData.map((item) => item.date) as [])

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
          .tickFormat((date: Date | string, i: number) =>
            i % 2 === 0 ? "" : d3.timeFormat("%d %b")(date as Date)
          )
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

    const handleToolTip = (event: PointerEvent, d: stackOuterArray) => {
      const html = `<table   ><thead   ><tr><th >Clinic ID</th><th>Health Status</th><th>Count</th><th>Date</th></thead><tbody ><tr >
      <td>#12121</td>
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
      const svgContainer = refrence.current;

      const containerRect = svgContainer?.getBoundingClientRect();
      let positionSetting;

      positionSetting = x + containerRect?.left + 65;

      // if (
      //   !containerRect?.top ||
      //   !containerRect?.left ||
      //   !containerRect?.right
      // ) {
      //   return;
      // }
      let tooltipElement = document.getElementById("tooltip");

      const windowWidth = window.innerWidth;
      const tooltipWidth = tooltipElement?.offsetWidth;

      const rightPosition = windowWidth - x - 120;

      if (positionSetting) {
        if (positionSetting >= 1196) {
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
              ? `${rightPosition + 65}px`
              : `${positionSetting}px`
          )
          .style("top", `${y + containerRect?.top + 72}px`);
      }
    };

    const colorArrays: string[] = ["#EA6E92", "#141543", "#7A78F7"];
    colorArrays.map((item, index) => {
      const circle = gLine
        .append("g")
        .attr(
          "transform",
          `translate(${30 * (index === 0 ? index + 0.8 : index + 0.7) * 4},-15)`
        );

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
      .style("fill", (d) => color(d.key));
    sel
      .selectAll("rect")
      .data((d) => {
        return d;
      })
      .join("rect")
      .attr("width", xScaleLine.bandwidth())
      .attr("y", (d) => yScaleLine(d[1]))
      .attr("x", (d) => xScaleLine(d?.data?.date))
      .attr("height", (d) => yScaleLine(d[0]) - yScaleLine(d[1]!))
      .attr("class", "bar");
    const tooltip = d3.select(".tooltip");
    d3.selectAll(".bar")
      .on("mouseover", (event: PointerEvent, d) => {
        handleToolTip(event, d as stackOuterArray);
      })

      .on("mouseout", () => {
        tooltip.style("display", "none");
      });
  }, [patientsData]);

  return (
    <>
      <svg ref={refrence}></svg>
      <div
        className="tooltip"
        id="tooltip"
        style={{ maxWidth: "333px", backgroundColor: "black" }}
      ></div>
    </>
  );
};
