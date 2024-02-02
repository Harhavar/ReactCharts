import React from 'react';
import { Chart } from 'react-charts';

const BarChart = () => {
  const data = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: [
          [0, 2],
          [1, 4],
          [2, 6],
          [3, 8],
        ],
      },
      {
        label: 'Series 2',
        data: [
          [0, 1],
          [1, 3],
          [2, 5],
          [3, 7],
        ],
      },
    ],
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: 'ordinal', position: 'bottom' },
      { type: 'linear', position: 'left', stacked: true },
    ],
    []
  );

  return (
    <div style={{ width: '400px', height: '300px' }}>
      <Chart data={data} axes={axes} />
    </div>
  );
};

export default BarChart;
