import React from 'react';


import './App.css';
import BarChart from './BarChart';
import PieChart from './PieChart'




function App() {
  return (

    <div style={{ display: 'flex', height: '50vh' }}>
      <div style={{ display: 'flex', flex: 0.4 }}>
        <PieChart
        ></PieChart>
      </div>

      <div style={{ display: 'flex', flex: 0.6 }}>
        <BarChart
        ></BarChart>
      </div>
    </div>
  );
}

export default App;
