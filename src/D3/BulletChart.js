import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BulletChart = () => {
  const chartRef = useRef();

  useEffect(() => {
    // Sample data
    const data = [
      { title: 'Revenue', subtitle: 'US$, in thousands', ranges: [150, 225, 300], measures: [220], markers: [250] },
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
    const x = d3.scaleLinear()
      .domain([0, 300])
      .range([0, width]);

    // Add ranges to the bullet chart
    svg.selectAll('rect.range')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'range')
      .attr('width', d => x(d.ranges[2]) - x(d.ranges[0]))
      .attr('height', height)
      .attr('x', d => x(d.ranges[0]))
      .attr('fill', '#ccc');

    // Add measures to the bullet chart
    svg.selectAll('rect.measure')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'measure')
      .attr('width', d => x(d.measures[0]) - x(0))
      .attr('height', height / 3)
      .attr('x', 0)
      .attr('fill', 'steelblue');

    // Add markers to the bullet chart
    svg.selectAll('line.marker')
      .data(data)
      .enter()
      .append('line')
      .attr('class', 'marker')
      .attr('x1', d => x(d.markers[0]))
      .attr('x2', d => x(d.markers[0]))
      .attr('y1', height / 6)
      .attr('y2', height * 5 / 6)
      .attr('stroke', 'red')
      .attr('stroke-width', 2);

    // Add title and subtitle
    svg.selectAll('text.title')
      .data(data)
      .enter()
      .append('text')
      .attr('class', 'title')
      .attr('x', width / 2)
      .attr('y', height / 2)
      .attr('text-anchor', 'middle')
      .attr('dy', '.35em')
      .text(d => d.title);

    svg.selectAll('text.subtitle')
      .data(data)
      .enter()
      .append('text')
      .attr('class', 'subtitle')
      .attr('x', width / 2)
      .attr('y', height / 2)
      .attr('text-anchor', 'middle')
      .attr('dy', '1.5em')
      .text(d => d.subtitle);

    // Clean up function
    return () => {
      d3.select(chartRef.current).selectAll('*').remove();
    };
  }, []); // Run effect only once on mount

  return <div ref={chartRef}></div>;
};

export default BulletChart;
