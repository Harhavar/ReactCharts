import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Heatmap = () => {
  const chartRef = useRef();

  useEffect(() => {
    // Sample data
    const data = [
      [10, 20, 30],
      [40, 50, 60],
      [70, 80, 90],
    ];

        // Chart dimensions
        const width = 800;
        const height = 600;
    

    // Create color scale
    const colorScale = d3.scaleLinear()
      .domain([0, d3.max(data, row => d3.max(row))])
      .range(['white', 'steelblue']);

    // Create SVG element
    const svg = d3.select(chartRef.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    // Add rectangles to the heatmap
    svg.selectAll('rect')
      .data(data, (d, i) => i)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * 50)
      .attr('y', (d, i) => 0)
      .attr('width', 50)
      .attr('height', 50)
      .attr('fill', d => colorScale(d));

    // Clean up function
    return () => {
      d3.select(chartRef.current).selectAll('*').remove();
    };
  }, []); // Run effect only once on mount

  return <div ref={chartRef}></div>;
};

export default Heatmap;
