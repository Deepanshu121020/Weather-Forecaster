import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

function TemperatureChart({ daily }) {
  const data = {
    labels: daily.map(item => item.title),
    datasets: [
      {
        label: 'Temperature (°C)',
        data: daily.map(item => item.temp),
        borderColor: 'rgba(255, 255, 255, 1)',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        fill: true,
        pointBackgroundColor: 'rgba(255, 255, 255, 1)',
        pointBorderColor: 'rgba(255, 255, 255, 1)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        label: {
            color: 'white',
            font: {
                size: 20
            }
        }
      },
      title: {
        display: true,
        text: '6-Day Temperature Trend',
        color: 'white',
        font: {
            size: 22 // Increase font size for the title
          }
    },
    tooltip: {
        titleColor: 'white', // Tooltip title color
        bodyColor: 'white',  // Tooltip body color
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Tooltip background color
      },
    },
    scales: {
        x: {
          ticks: {
            color: 'white' // Set X-axis tick color to white
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.2)' // Set X-axis grid line color to a lighter white
          }
        },
        y: {
          ticks: {
            color: 'white' // Set Y-axis tick color to white
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.2)' // Set Y-axis grid line color to a lighter white
          }
        }
      }
    };
  
    return <Line data={data} options={options} />;
  }
  

export default TemperatureChart;