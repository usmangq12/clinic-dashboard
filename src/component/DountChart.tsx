import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { PieChartData } from "@/constants/dataTypes";

type Props = {
  dountChartData: PieChartData[];
};

export const DountChart: React.FC<Props> = ({ dountChartData }) => {
  const reference = useRef<SVGSVGElement>(null);

  useEffect(() => {
    d3.select(reference.current).selectAll("*").remove();
    const width = 770;
    const height = 550;
    const svg = d3
      .select(reference.current)
      .attr("width", width)
      .attr("height", height);
    const margin = {
      top: 160,
      bottom: 30,
      left: 300,
      right: 30,
    };

    svg
      .append("text")
      .text("Nurses Feedback")
      .attr("transform", `translate(${350},20)`)
      .attr("class", "label");
   

    const radius = Math.min(width, height) / 2;
    const colorScale: d3.ScaleOrdinal<string, string> = d3
      .scaleOrdinal<string>()
      .domain(dountChartData.map((d) => d.category))
      .range(["#118DFF", "#12239E", "#E66C37"]);

    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left + 100},${margin.top + 170})`);
    const pie = d3.pie<PieChartData>().value((d: PieChartData) => d.value);
    const arc = d3
      .arc<d3.PieArcDatum<PieChartData>>()
      .innerRadius(180)
      .outerRadius(radius);
    const pieChart = g
      .selectAll<SVGPathElement, d3.PieArcDatum<PieChartData>>("path")
      .data(pie(dountChartData))
      .enter();
    pieChart
      .append("path")
      .attr("d", arc)
      .attr("fill", (d) => colorScale(d.data.category));
    pieChart
      .append("text")
      .attr("text-anchor", "middle")
      .attr("transform", (d) => `translate(${arc.centroid(d)} )`)
      .text((d: { data: PieChartData }) => d.data.category)
      .style("font-size", "18px")
      .style("fill", "white");

    const legend = svg.append("g")
      .attr("transform", `translate(${690},${60})`);
    
    const legendItems = legend.selectAll("g")
      .data(dountChartData)
      .enter()
      .append("g")
      .attr("transform", (d, i) => `translate(0, ${i * 20})`);

    legendItems.append("circle")
      .attr("cx", 0)
      .attr("cy", 0)
      .attr("r", 6)
      .attr("fill", (d) => colorScale(d.category));

    legendItems.append("text")
      .attr("x", 15)
      .attr("y", 5)
      .text((d) => d.category)
      .style("fill", "white")
      .style("font-size", "14px");
  }, [dountChartData]);

  return <svg ref={reference} style={{ height: "650px" }}></svg>;
};
