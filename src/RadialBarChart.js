import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const RadialBarChart = () => {
  const chartRef = useRef();

  useEffect(() => {
    // Sample data
    const data = [10, 25, 35, 50, 20];

       // Chart dimensions
       const width = 800;
       const height = 600;
   
    const radius = Math.min(width, height) / 2;

    // Create color scale
    const color = d3.scaleOrdinal(d3.schemeCategory10);

    // Create arc
    const arc = d3.arc()
      .innerRadius(0)
      .outerRadius(radius);

    // Create pie chart
    const pie = d3.pie();

    // Create SVG element
    const svg = d3.select(chartRef.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    // Add slices to the radial bar chart
    svg.selectAll('path')
      .data(pie(data))
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', (d, i) => color(i));

    // Clean up function
    return () => {
      d3.select(chartRef.current).selectAll('*').remove();
    };
  }, []); // Run effect only once on mount

  return <div ref={chartRef}></div>;
};

export default RadialBarChart;
