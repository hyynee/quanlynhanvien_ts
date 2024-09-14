import React from 'react';
import Chart from 'react-apexcharts';



const ColumnChart = ({
  height,
  data
}) => {
  const options = {
    annotations: {
      // points: [{
      //   x: 'Nov',
      //   seriesIndex: 0,
      //   label: {
      //     borderColor: '#775DD0',
      //     offsetY: 0,
      //     style: {
      //       color: '#fff',
      //       background: '#775DD0',
      //     },
      //     text: 'Nov are good',
      //   }
      // }]
    },
    chart: {
      width: '100%' ,
      type: 'bar',
      toolbar: {
        show: false // Ẩn các nút chức năng
      }
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
       
        columnWidth: '40%',
       
      }
      
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 0
    },
    grid: {
      row: {
        colors: ['#fff', '#f2f2f2']
      }
    },
    xaxis: {
      labels: {
        rotate: -45,
        style: {
          colors: '#c7c9ce'
        },
      },
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      tickPlacement: 'on'
    },
    yaxis: {
      labels: {
        style: {
          colors: '#c7c9ce',
        }
      }
    },
    
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: "horizontal",
        shadeIntensity: 0.25,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 0.85,
        opacityTo: 0.85,
        stops: [50, 0, 100]
      },
    }
  };

  
    

  return (
    <Chart options={options} series={data} type="bar"  height={height} />
  );
}

export default ColumnChart;
