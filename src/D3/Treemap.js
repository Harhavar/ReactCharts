import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Treemap = () => {
  const chartRef = useRef();

  useEffect(() => {
    // Sample data
    const data = {
      name: 'root',
      children: [
        { name: 'A', value: 10 },
        { name: 'B', value: 20 },
        { name: 'C', value: 30 },
        { name: 'D', value: 40 },
      ],
    };

       // Chart dimensions
       const width = 800;
       const height = 600;
   

    // Create treemap layout
    const treemap = d3.treemap()
      .size([width, height])
      .padding(1);

    // Create SVG element
    const svg = d3.select(chartRef.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    // Flatten the hierarchical data structure
    const flattenedData = treemap(d3.hierarchy(data).sum(d => d.value)).leaves();

    // Add rectangles to the treemap
    svg.selectAll('rect')
      .data(flattenedData)
      .enter()
      .append('rect')
      .attr('x', d => d.x0)
      .attr('y', d => d.y0)
      .attr('width', d => d.x1 - d.x0)
      .attr('height', d => d.y1 - d.y0)
      .attr('fill', 'steelblue');

    // Clean up function
    return () => {
      d3.select(chartRef.current).selectAll('*').remove();
    };
  }, []); // Run effect only once on mount

  return <div ref={chartRef}></div>;
};

export default Treemap;
