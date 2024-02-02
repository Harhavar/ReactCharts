import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useSpring, animated } from 'react-spring';

const AnimatedLineChart = () => {
  const [data, setData] = useState({
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Monthly Revenue',
        data: [420000, 810000, 720000, 950000, 680000],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
      },
    ],
  });

  const props = useSpring({
    from: { value: 0 },
    to: { value: 1 },
    config: { duration: 2000 },
    onFrame: ({ value }) => {
      // Update data values based on the animated value
      const newData = {
        ...data,
        datasets: [
          {
            ...data.datasets[0],
            data: data.datasets[0].data.map((val) => val * value),
          },
        ],
      };
      setData(newData);
    },
  });

  return (
    <div style={{ width: '600px', height: '400px' }}>
      <animated.div style={props}>
        <Line data={data} />
      </animated.div>
    </div>
  );
};

export default AnimatedLineChart;
