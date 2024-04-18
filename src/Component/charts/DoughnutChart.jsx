import React from "react";
import { Doughnut } from "react-chartjs-2";
import data from './linedata';

const DoughnutChart=()=>{

    const doughnutData = {   
      labels: data.label.map((label)=>label),
      datasets: [{
        label: 'Steps Walked',
        data: data.setps.map((setps)=>setps),
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(201, 203, 207, 0.6)'
        ], 
        borderColor: 'rgba(255, 255, 255, 1)',
        borderWidth: 1,
      }],
   
      };
    
    
    
   
    return <Doughnut data={doughnutData} />
}

export default DoughnutChart