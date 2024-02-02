import React from 'react';
import { VictoryPie, VictoryTheme } from 'victory';

const PieChartExample = () => {
  const data = [
    { x: 'A', y: 40 },
    { x: 'B', y: 30 },
    { x: 'C', y: 20 },
    // Add more data as needed
  ];

  return (
    <VictoryPie data={data} theme={VictoryTheme.material} />
  );
};

export default PieChartExample;
