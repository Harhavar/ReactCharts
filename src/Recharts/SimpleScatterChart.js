import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
  { x: 10, y: 30, z: 200 },
  { x: 20, y: 50, z: 400 },
  { x: 30, y: 70, z: 600 },
  // Add more data as needed
];

const SimpleScatterChart = () => {
  return (
    <ScatterChart width={400} height={400}>
      <XAxis type="number" dataKey="x" name="stature" unit="cm" />
      <YAxis type="number" dataKey="y" name="weight" unit="kg" />
      <CartesianGrid />
      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
      <Scatter name="A" data={data} fill="#8884d8" />
    </ScatterChart>
  );
};

export default SimpleScatterChart;
