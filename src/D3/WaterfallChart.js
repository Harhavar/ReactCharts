import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const WaterfallChart = () => {
  const chartRef = useRef();

  useEffect(() => {
    // Sample data
    const data = [10, 20, -5, 15, -10, 30];

        // Chart dimensions
        const width = 800;
        const height = 600;
    

    // Create SVG element
    const svg = d3.select(chartRef.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    // Create waterfall bars
    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * 50)
      .attr('y', d => (d >= 0) ? height - d : height)
      .attr('width', 40)
      .attr('height', d => Math.abs(d))
      .attr('fill', d => (d >= 0) ? 'green' : 'red');

    // Clean up function
    return () => {
      d3.select(chartRef.current).selectAll('*').remove();
    };
  }, []); // Run effect only once on mount

  return <div ref={chartRef}></div>;
};

export default WaterfallChart;
