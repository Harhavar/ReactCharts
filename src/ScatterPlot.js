import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const ScatterPlot = () => {
  const chartRef = useRef();

  useEffect(() => {
    // Sample data
    const data = [
      { x: 10, y: 30 },
      { x: 40, y: 90 },
      { x: 80, y: 10 },
    ];
    // Chart dimensions
    const width = 800;
    const height = 600;


    // Create scales for mapping data to the chart dimensions
    const xScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.x)])
      .range([0, width]);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.y)])
      .range([height, 0]);

    // Create SVG element
    const svg = d3.select(chartRef.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    // Add circles to the scatter plot
    svg.selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', d => xScale(d.x))
      .attr('cy', d => yScale(d.y))
      .attr('r', 5)
      .attr('fill', 'steelblue');

    // Clean up function
    return () => {
      d3.select(chartRef.current).selectAll('*').remove();
    };
  }, []); // Run effect only once on mount

  return <div ref={chartRef}></div>;
};

export default ScatterPlot;
