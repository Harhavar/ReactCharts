import React from 'react';
import LineChart from './D3/LineChart';
import PieChart from './PieChart';
import ScatterPlot from './ScatterPlot';
import AreaChart from './D3/AreaChart';
import DonutChart from './D3/DonutChart';
import Heatmap from './D3/Heatmap';
import BubbleChart from './D3/BubbleChart';
import RadialBarChart from './RadialBarChart';
import Treemap from './D3/Treemap';
import RadarChart from './RadarChart';
import ForceDirectedGraph from './D3/ForceDirectedGraph';
import GaugeChart from './D3/GaugeChart';
import ChordDiagram from './D3/ChordDiagram';
import BulletChart from './D3/BulletChart';
import WaterfallChart from './D3/WaterfallChart';
import CandlestickChart from './D3/CandlestickChart';
import Streamgraph from './D3/Streamgraph';
import BarChart from './ReactCharts/BarCharts';
import SimpleLineChart from './Recharts/SimpleLineChart';
import SimpleScatterChart from './Recharts/SimpleScatterChart';
import SimplePieChart from './Recharts/SimplePieChart';
import SimpleBarChart from './Recharts/SimpleBarChart';
import HeatmapExample from './victory/HeatmapExample';
import RadarChartExample from './victory/RadarChartExample';
import AreaChartExample from './victory/AreaChartExample';
import ScatterChartExample from './victory/ScatterChartExample';
// import DoughnutChartExample from './Chartjs/DoughnutChartExample';
// import LineChartExample from './Chartjs/LineChartExample';
 import BarChartExample from './Chartjs/BarChartExample';
import PieChartExample from './Chartjs/PieChartExample';
import LineChartExample from './victory/LineChartExample';

const App = () => {
  return (
    <div>
      <h1>React D3.js Charts</h1>
      
      <div>
        <h2>Line Chart</h2>
        <LineChart />
      </div>

      <div>
        <h2>Pie Chart</h2>
        <PieChart />
      </div>

      <div>
        <h2>Scatter Plot</h2>
        <ScatterPlot />
      </div>

      <div>
        <h2>Animated Bar Chart</h2>
      </div>

      <div>
        <h2>Area Chart</h2>
        <AreaChart />
      </div>

      <div>
        <h2>Donut Chart</h2>
        <DonutChart />
      </div>

      <div>
        <h2>Heatmap</h2>
        <Heatmap />
      </div>

      <div>
        <h2>Bubble Chart</h2>
        <BubbleChart />
      </div>

      <div>
        <h2>Radial Bar Chart</h2>
        <RadialBarChart />
      </div>

      <div>
        <h2>Treemap</h2>
        <Treemap />
      </div>

      <div>
        <h2>Radar Chart</h2>
        <RadarChart />
      </div>

      <div>
        <h2>Force-Directed Graph</h2>
        <ForceDirectedGraph />
      </div>

      <div>
        <h2>Gauge Chart</h2>
        <GaugeChart />
      </div>

      <div>
        <h2>Chord Diagram</h2>
        <ChordDiagram />
      </div>

      <div>
        <h2>Bullet Chart</h2>
        <BulletChart />
      </div>

      <div>
        <h2>Waterfall Chart</h2>
        <WaterfallChart />
      </div>

     

      <div>
        <h2>Candlestick Chart</h2>
        <CandlestickChart />
      </div>

      <div>
        <h2>Streamgraph</h2>
        <Streamgraph />
      </div>
      <div>
      <h1>FusionCharts in React</h1>
      <LineChart/>
    </div>
    <div>
      <h1>
      BarChart
      </h1>
      <BarChart/>
    </div>
    <div>
      <h1>
      AnimatedLineChart
      </h1>
    </div>
    
      <h1>Recharts Examples</h1>

      <div>
        <h2>Line Chart</h2>
        <SimpleLineChart />
      </div>

      <div>
        <h2>Bar Chart</h2>
        <SimpleBarChart />
      </div>

      <div>
        <h2>Area Chart</h2>
      </div>

      <div>
        <h2>Pie Chart</h2>
        <SimplePieChart />
      </div>

      <div>
        <h2>Scatter Chart</h2>
        <SimpleScatterChart />
      </div>
      <h1>Victory Chart Examples</h1>

      <div>
        <h2>Line Chart</h2>
        <LineChartExample />
      </div>

      <div>
        <h2>Bar Chart</h2>
        <BarChartExample />
      </div>

      <div>
        <h2>Area Chart</h2>
        <AreaChartExample />
      </div>

      <div>
        <h2>Scatter Chart</h2>
        <ScatterChartExample />
      </div>

      <div>
        <h2>Pie Chart</h2>
        <PieChartExample />
      </div>

      <div>
        <h2>Radar Chart</h2>
        <RadarChartExample />
      </div>

      <div>
        <h2>Heatmap</h2>
        <HeatmapExample />
      </div>
      <h1>Chart.js Examples</h1>

<div>
  <h2>Line Chart</h2>
  <LineChartExample />
</div>

<div>
  <h2>Bar Chart</h2>
  <BarChartExample />
</div>

<div>
  <h2>Doughnut Chart</h2>
</div>

<div>
  <h2>Pie Chart</h2>
</div>
    </div>
  );
};

export default App;
