import React from "react";
import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

//* css
import "./DoughnutChart.css";

const DoughnutChart = () => {
    const data = {
        labels: [
            'Run',
            'Run2',
            'Run3'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }],
    }
    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Chart.js Doughnut Chart',
            },
        },
    };

    return (
        <Doughnut data={data} options={options}/>
    )
}

export default DoughnutChart;