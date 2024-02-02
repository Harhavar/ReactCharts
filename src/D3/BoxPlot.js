// import React, { useEffect, useRef } from 'react';
// import * as d3 from 'd3';

// const BoxPlot = () => {
//   const chartRef = useRef();

//   useEffect(() => {
//     // Sample data
//     const data = [50, 70, 80, 90, 100, 120, 150, 180];

//     // Chart dimensions
//     const width = 400;
//     const height = 200;

//     // Create SVG element
//     const svg = d3.select(chartRef.current)
//       .append('svg')
//       .attr('width', width)
//       .attr('height', height);

//     // Create box plot
//     const boxplot = d3.box()
//       .whiskers(d => [d[0], d[d.length - 1]])
//       .width(40)
//       .height(height);

//     // Add box plot to the chart
//     svg.selectAll('g')
//       .data([data])
//       .enter()
//       .append('g')
//       .attr('transform', 'translate(50, 0)')
//       .call(boxplot);

//     // Clean up function
//     return () => {
//       d3.select(chartRef.current).selectAll('*').remove();
//     };
//   }, []); // Run effect only once on mount

//   return <div ref={chartRef}></div>;
// };

// export default BoxPlot;
