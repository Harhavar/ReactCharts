import React from 'react';
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory';

const LineChartExample = () => {
  const data = [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 5 },
    // Add more data as needed
  ];

  return (
    <VictoryChart theme={VictoryTheme.material}>
      <VictoryLine data={data} />
    </VictoryChart>
  );
};

export default LineChartExample;
