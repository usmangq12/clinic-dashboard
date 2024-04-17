import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { PieChartData } from "@/constants/dataTypes";

type Props = {
  pieChartData: PieChartData[];
};

export const PieChart: React.FC<Props> = ({ pieChartData }) => {
  const refrence = useRef<SVGSVGElement>(null);

  useEffect(() => {
    d3.select(refrence.current).selectAll("*").remove();
    const width = 804 || 0;
    const height = 566 || 0;
    console.log("Pie Width", width, "Pie Height", height);
    const svg = d3
      .select(refrence.current)
      .attr("width", width)
      .attr("height", height);
    const margin = {
      top: 160,
      bottom: 30,
      left: 400,
      right: 30,
    };
    const radius = Math.min(width, height) / 2;
    const colorScale: d3.ScaleOrdinal<string, string> = d3
      .scaleOrdinal<string>()
      .domain(pieChartData.map((d) => d.category))
      .range(["#4C84D4", "#224cb3"]);

    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top + 123})`);
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
      .attr("fill", (d) => colorScale(d.data.category));
    pieChart
      .append("text")
      .attr("text-anchor", "middle")
      .attr("transform", (d) => `translate(${arc.centroid(d)} )`)
      .text((d: { data: PieChartData }) => d.data.category)
      .style("font-size", "18px")
      .style("fill", "white");
  }, [pieChartData]);

  return <svg ref={refrence} className="pieChart"></svg>;
};
