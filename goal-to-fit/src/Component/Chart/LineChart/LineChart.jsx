import React from "react";
import Chart from "chart.js/auto";
import { Line } from 'react-chartjs-2';

//* css
import "./LineChart.css";

const LineChart = () => {
    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
    };
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 2',
                data: [3, 2, 3, 4, 1, 5, 7],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                fill: true,
            },
        ],
    };

    return (
        <Line
            data={data}
            options={options}
        />
    )
}

export default LineChart;