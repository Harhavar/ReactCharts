import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const GaugeChart = () => {
  const chartRef = useRef();
  var data = "";
  useEffect(() => {
    // Sample data
     data = 75;

    // Chart dimensions
    const width = 800;
    const height = 600;

    const radius = Math.min(width, height) / 2;

    // Create color scale
    const color = d3.scaleLinear()
      .domain([0, 100])
      .range(['red', 'green']);

    // Create arc
    const arc = d3.arc()
      .innerRadius(radius - 10)
      .outerRadius(radius)
      .startAngle(0)
      .endAngle(d => (Math.PI / 180) * (data / 100) * 180);

    // Create SVG element
    const svg = d3.select(chartRef.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    // Add background arc
    svg.append('path')
      .datum({ endAngle: Math.PI })
      .attr('d', arc)
      .attr('fill', 'lightgray');

    // Add foreground arc
    svg.append('path')
      .datum({ endAngle: 0 })
      .attr('d', arc)
      .attr('fill', d => color(data));

    // Clean up function
    return () => {
      d3.select(chartRef.current).selectAll('*').remove();
    };
  }, [data]); // Run effect when data changes

  return <div ref={chartRef}></div>;
};

export default GaugeChart;
