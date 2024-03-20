import { useEffect, useRef } from "react";
import * as d3 from "d3";

interface PieChartData {
  category: string;
  value: number;
}

export const PieChart = ({ pieChartData }) => {
  
  const refrence = useRef<SVGSVGElement>(null);

  useEffect(() => {
    d3.select(refrence.current).selectAll("*").remove();

    const width = refrence.current?.parentElement?.clientWidth || 300;
    const height = refrence.current?.parentElement?.clientHeight || 300;
    const svg = d3
      .select(refrence.current)
      .attr("width", width)
      .attr("height", height);
    const margin = {
      top: 150,
      bottom: 30,
      left: 400,
      right: 30,
    };
    const radius = Math.min(width, height) / 2;
    const colorScale = d3
      .scaleOrdinal()
      .domain(pieChartData.map((d) => d.category))
      .range(["#4C84D4", "#224cb3"]);
    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top + 70})`);
    const pie = d3.pie<PieChartData>().value((d: PieChartData) => d.value);
    const arc = d3
      .arc<d3.PieArcDatum<PieChartData>>()
      .innerRadius(0)
      .outerRadius(radius);
    const pieChart = g
      .selectAll<SVGPathElement, d3.PieArcDatum<PieChartData>>("path")
      .data(pie(pieChartData))
      .enter();
    pieChart
      .append("path")
      .attr("d", arc)
      .attr("fill", (d: { data: PieChartData }) => colorScale(d.data.category));
    pieChart
      .append("text")
      .attr("text-anchor", "middle")
      .attr(
        "transform",
        (d: { data: PieChartData }) => `translate(${arc.centroid(d)} )`
      )
      .text((d: { data: PieChartData }) => d.data.category)
      .style("font-size", "18px")
      .style("fill", "white");
  }, [pieChartData]);

  return <svg ref={refrence}></svg>;
};
