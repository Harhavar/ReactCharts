import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const CandlestickChart = () => {
  const chartRef = useRef();

  useEffect(() => {
    // Sample data
    const data = [
      { date: new Date('2022-01-01'), open: 100, high: 120, low: 90, close: 110 },
      { date: new Date('2022-01-02'), open: 110, high: 130, low: 95, close: 120 },
      { date: new Date('2022-01-03'), open: 120, high: 140, low: 100, close: 130 },
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
      .domain([0, d3.max(data, d => d.high)])
      .range([height, 0]);

    // Create candlestick bars
    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', d => xScale(d.date) - 5)
      .attr('y', d => yScale(Math.max(d.open, d.close)))
      .attr('width', 10)
      .attr('height', d => Math.abs(yScale(d.open) - yScale(d.close)))
      .attr('fill', d => (d.close >= d.open) ? 'green' : 'red');

    // Clean up function
    return () => {
      d3.select(chartRef.current).selectAll('*').remove();
    };
  }, []); // Run effect only once on mount

  return <div ref={chartRef}></div>;
};

export default CandlestickChart;
