import React from "react";
import Chart from "chart.js/auto";
import { Line } from 'react-chartjs-2';

//* css
import "./LineChart.css";

const LineChart = () => {
    const data = [];
    const data2 = [];
    let prev = 100;
    let prev2 = 80;
    for (let i = 0; i < 1000; i++) {
        prev += 5 - Math.random() * 10;
        data.push({ x: i, y: prev });
        prev2 += 5 - Math.random() * 10;
        data2.push({ x: i, y: prev2 });
    }
    const totalDuration = 10000;
    const delayBetweenPoints = totalDuration / data.length;
    const previousY = (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;
    const animation = {
        x: {
            type: 'number',
            easing: 'linear',
            duration: delayBetweenPoints,
            from: NaN, // the point is initially skipped
            delay(ctx) {
                if (ctx.type !== 'data' || ctx.xStarted) {
                    return 0;
                }
                ctx.xStarted = true;
                return ctx.index * delayBetweenPoints;
            }
        },
        y: {
            type: 'number',
            easing: 'linear',
            duration: delayBetweenPoints,
            from: previousY,
            delay(ctx) {
                if (ctx.type !== 'data' || ctx.yStarted) {
                    return 0;
                }
                ctx.yStarted = true;
                return ctx.index * delayBetweenPoints;
            }
        }
    };
    const options = {
        animation,
        responsive: true,
        interaction: {
            intersect: false
        },
        plugins: {
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
        scales: {
            x: {
                type: 'linear'
            }
        }
    };
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const dataMain = {
        labels,
        datasets: [{
            borderColor: "#f85f6a",
            borderWidth: 1,
            radius: 0,
            data: data
        },
        {
            borderColor: "blue",
            borderWidth: 1,
            radius: 0,
            data: data2,
        }]
    };

    return (
        <Line
            data={dataMain}
            options={options}
        />
    )
}

export default LineChart;