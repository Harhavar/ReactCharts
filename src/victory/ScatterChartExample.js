import React from 'react';
import { VictoryChart, VictoryScatter, VictoryTheme } from 'victory';

const ScatterChartExample = () => {
  const data = [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 5 },
    // Add more data as needed
  ];

  return (
    <VictoryChart theme={VictoryTheme.material}>
      <VictoryScatter data={data} />
    </VictoryChart>
  );
};

export default ScatterChartExample;
