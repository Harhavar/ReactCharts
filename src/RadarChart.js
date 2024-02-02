import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const RadarChart = () => {
  const chartRef = useRef();

  useEffect(() => {
    // Sample data
    const data = [
      { subject: 'Math', value: 80 },
      { subject: 'English', value: 50 },
      { subject: 'Science', value: 60 },
      { subject: 'History', value: 70 },
      { subject: 'Art', value: 90 },
    ];

    // Chart dimensions
    const width = 800;
    const height = 600;

    // Create scales
    const maxValue = 100;
    const angleSlice = (Math.PI * 2) / data.length;

    // Create SVG element
    const svg = d3.select(chartRef.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    // Create radial scales
    const rScale = d3.scaleLinear()
      .range([0, 100])
      .domain([0, maxValue]);

    // Create axes
    const axes = svg.selectAll('.axis')
      .data(data)
      .enter()
      .append('g')
      .attr('class', 'axis');

    // Add lines to the radar chart
    axes.append('line')
      .attr('x1', 0)
      .attr('y1', 0)
      .attr('x2', (d, i) => rScale(d.value) * Math.cos(angleSlice * i - Math.PI / 2))
      .attr('y2', (d, i) => rScale(d.value) * Math.sin(angleSlice * i - Math.PI / 2))
      .attr('stroke', 'black');

    // Add labels to the radar chart
    axes.append('text')
      .attr('x', (d, i) => rScale(maxValue * 1.1) * Math.cos(angleSlice * i - Math.PI / 2))
      .attr('y', (d, i) => rScale(maxValue * 1.1) * Math.sin(angleSlice * i - Math.PI / 2))
      .text(d => d.subject);

    // Add data points to the radar chart
    svg.selectAll('.dot')
      .data(data)
      .enter()
      .append('circle')
      .attr('class', 'dot')
      .attr('cx', (d, i) => rScale(d.value) * Math.cos(angleSlice * i - Math.PI / 2))
      .attr('cy', (d, i) => rScale(d.value) * Math.sin(angleSlice * i - Math.PI / 2))
      .attr('r', 5)
      .attr('fill', 'steelblue');

    // Clean up function
    return () => {
      d3.select(chartRef.current).selectAll('*').remove();
    };
  }, []); // Run effect only once on mount

  return <div ref={chartRef}></div>;
};

export default RadarChart;
