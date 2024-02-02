import React from 'react';
import { VictoryChart, VictoryBar, VictoryTheme } from 'victory';

const BarChartExample = () => {
  const data = [
    { x: 'A', y: 10 },
    { x: 'B', y: 15 },
    { x: 'C', y: 7 },
    // Add more data as needed
  ];

  return (
    <VictoryChart theme={VictoryTheme.material}>
      <VictoryBar data={data} />
    </VictoryChart>
  );
};

export default BarChartExample;
