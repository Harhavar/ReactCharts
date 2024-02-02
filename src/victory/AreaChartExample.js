import React from 'react';
import { VictoryChart, VictoryArea, VictoryTheme } from 'victory';

const AreaChartExample = () => {
  const data = [
    { x: 1, y: 3 },
    { x: 2, y: 4 },
    { x: 3, y: 2 },
    // Add more data as needed
  ];

  return (
    <VictoryChart theme={VictoryTheme.material}>
      <VictoryArea data={data} />
    </VictoryChart>
  );
};

export default AreaChartExample;
