// import React, { useEffect, useRef } from 'react';
// import * as d3 from 'd3';

// const SankeyDiagram = () => {
//   const chartRef = useRef();

//   useEffect(() => {
//     // Sample data
//     const data = {
//       nodes: [
//         { name: 'Node A' },
//         { name: 'Node B' },
//         { name: 'Node C' },
//         { name: 'Node D' },
//       ],
//       links: [
//         { source: 0, target: 1, value: 10 },
//         { source: 0, target: 2, value: 5 },
//         { source: 1, target: 3, value: 15 },
//         { source: 2, target: 3, value: 20 },
//       ],
//     };

//     // Chart dimensions
//     const width = 400;
//     const height = 200;

//     // Create SVG element
//     const svg = d3.select(chartRef.current)
//       .append('svg')
//       .attr('width', width)
//       .attr('height', height);

//     // Create Sankey diagram layout
//     const sankey = d3.sankey()
//       .nodeWidth(20)
//       .nodePadding(10)
//       .size([width, height]);

//     const { nodes, links } = sankey(data);

//     // Create links
//     svg.selectAll('path.link')
//       .data(links)
//       .enter()
//       .append('path')
//       .attr('class', 'link')
//       .attr('d', d3.sankeyLinkHorizontal())
//       .style('stroke-width', d => Math.max(1, d.width))
//       .style('stroke', 'steelblue')
//       .style('fill', 'none');

//     // Create nodes
//     svg.selectAll('rect.node')
//       .data(nodes)
//       .enter()
//       .append('rect')
//       .attr('class', 'node')
//       .attr('x', d => d.x0)
//       .attr('y', d => d.y0)
//       .attr('width', d => d.x1 - d.x0)
//       .attr('height', d => d.y1 - d.y0)
//       .style('fill', 'steelblue');

//     // Clean up function
//     return () => {
//       d3.select(chartRef.current).selectAll('*').remove();
//     };
//   }, []); // Run effect only once on mount

//   return <div ref={chartRef}></div>;
// };

// export default SankeyDiagram;
