import React from 'react';
// import { VictoryHeatmap, VictoryTheme } from 'victory';

const HeatmapExample = () => {
  const data = [
    [
      { x: 'A', y: 1, z: 10 },
      { x: 'B', y: 1, z: 5 },
      { x: 'C', y: 1, z: 0 },
    ],
    [
      { x: 'A', y: 2, z: 5 },
      { x: 'B', y: 2, z: 15 },
      { x: 'C', y: 2, z: 10 },
    ],
    [
      { x: 'A', y: 3, z: 15 },
      { x: 'B', y: 3, z: 20 },
      { x: 'C', y: 3, z: 5 },
    ],
    // Add more data as needed
  ];

  return (
    // <VictoryHeatmap
    //   data={data}
    //   theme={VictoryTheme.material}
    //   xLabels={['A', 'B', 'C']}
    //   yLabels={[1, 2, 3]}
    // />
    <></>
  );
};

export default HeatmapExample;
