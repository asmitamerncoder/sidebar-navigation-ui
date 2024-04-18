import React from 'react';
import { Bar } from 'react-chartjs-2';
import data from './linedata';

const HorizontalBarChart = () => {


    const horizontalBarData = {
        labels: data.label.map((label) => label),
        datasets: [{
            label: 'Steps Walked',
            data: data.setps.map((setps) => setps),
            backgroundColor: [
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(201, 203, 207, 0.6)'
            ],
            borderColor: '#3380FF',
           
        }],
    };

    const options = {
        indexAxis: 'y', 
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Steps',
                    color: '#333',
                    font: {
                        size: 16,
                        
                    },
                },
                ticks: {
                    color: '#666',
                },
            },
            y: {
                ticks: {
                    color: '#666',
                },
            },
        },
    }



    return <Bar data={horizontalBarData} options={options} />;
}

export default HorizontalBarChart