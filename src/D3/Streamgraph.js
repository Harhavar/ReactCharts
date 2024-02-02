import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Streamgraph = () => {
  const chartRef = useRef();

  useEffect(() => {
    // Sample data
    const data = [
      { date: new Date('2022-01-01'), value: 10 },
      { date: new Date('2022-01-02'), value: 20 },
      { date: new Date('2022-01-03'), value: 15 },
      // Add more data points as needed
    ];

        // Chart dimensions
        const width = 800;
        const height = 600;
    

    // Create SVG element
    const svg = d3.select(chartRef.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    // Create scales
    const xScale = d3.scaleTime()
      .domain(d3.extent(data, d => d.date))
      .range([0, width]);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value)])
      .range([height, 0]);

    // Create streamgraph area
    const area = d3.area()
      .x(d => xScale(d.date))
      .y0(height)
      .y1(d => yScale(d.value));

    svg.append('path')
      .datum(data)
      .attr('d', area)
      .attr('fill', 'steelblue');

    // Clean up function
    return () => {
      d3.select(chartRef.current).selectAll('*').remove();
    };
  }, []); // Run effect only once on mount

  return <div ref={chartRef}></div>;
};

export default Streamgraph;
