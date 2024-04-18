import React from 'react';
import { Line } from 'react-chartjs-2';
import data from './linedata';

const LineChart =()=>{
    const lineData = {   
        labels:data.label.map((label)=>label),
        datasets: [
          {
            label: 'Steps Walked',
            data: data.setps.map((setps)=>setps), 
            fill: false,
            borderColor: '#3380FF', 
            tension: 0.4, 
          },
        ],
      };
    
      const options = {
        scales: {
          x: {
            title: {
              display: true,
              color: '#333',
              font: {
                size: 16,
              },
              
            },
            beginAtZero: true,
          },
          y: {
            title: {
              display: true,
              text: 'Steps',
              color: '#333',
              font: {
                size: 16,
              },
            },
            beginAtZero: true,
          },
        },
      };

    return <Line data={lineData} options={options}/>
}

export default LineChart