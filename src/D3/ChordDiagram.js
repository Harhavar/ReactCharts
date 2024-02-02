import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const ChordDiagram = () => {
  const chartRef = useRef();

  useEffect(() => {
    // Sample data
    const matrix = [
      [0, 5, 10, 15],
      [5, 0, 0, 20],
      [10, 0, 0, 25],
      [15, 20, 25, 0],
    ];

        // Chart dimensions
        const width = 800;
        const height = 600;
    
    const outerRadius = Math.min(width, height) / 2 - 10;
    const innerRadius = outerRadius - 30;

    // Create color scale
    const color = d3.scaleOrdinal()
      .domain(d3.range(4))
      .range(['#98abc5', '#8a89a6', '#7b6888', '#6b486b']);

    // Create chord layout
    const chord = d3.chord()
      .padAngle(0.05)
      .sortSubgroups(d3.descending);

    // Create SVG element
    const svg = d3.select(chartRef.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    // Create chords
    const chords = chord(matrix);

    // Add ribbons to the chord diagram
    svg.append('g')
      .selectAll('path')
      .data(chords)
      .enter()
      .append('path')
      .attr('d', d3.ribbon().radius(innerRadius))
      .attr('fill', d => color(d.target.index))
      .attr('opacity', 0.7);

    // Add groups to the chord diagram
    svg.append('g')
      .selectAll('g')
      .data(chords.groups)
      .enter()
      .append('g')
      .append('path')
      .attr('d', d3.arc().innerRadius(innerRadius).outerRadius(outerRadius))
      .attr('fill', d => color(d.index))
      .attr('opacity', 0.9);

    // Clean up function
    return () => {
      d3.select(chartRef.current).selectAll('*').remove();
    };
  }, []); // Run effect only once on mount

  return <div ref={chartRef}></div>;
};

export default ChordDiagram;
