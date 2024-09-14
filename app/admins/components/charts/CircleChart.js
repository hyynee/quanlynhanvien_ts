import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';



const CircleChart = ({
    data
}) => {
    const [isMounted, setIsMounted] = useState(false);
    const seriesData = data;
    const total = seriesData.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // Calculate total

    const options = {
        labels: ["Nhân viên thực tập", "Nhân viên chính thức", "Nhân viên tạm thời"],
        chart: {
            width: 380,
            type: 'donut' 
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#fc717a', '#44b4fa', '#fdb657'],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    show: false
                }
            }
        }],
        legend: {
            position: 'bottom',
            offsetY: 0,
            height: '100%',
            orientation: 'horizontal',
        },
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        total: {
                            showAlways: true,
                            show: true,
                            label: 'Total', 
                            
                        },

                    }
                }
            }
        }
    } 

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <Chart options={options} series={seriesData} type="donut" width={380} />
    );
}

export default CircleChart;
