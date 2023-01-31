  ///Bar Chart //
  export const BarChartSeries: ApexAxisChartSeries =[
    {
      data: [
        {
          x: new Date(2022, 1, 2),
          y: [3],
        },
        {
          x: new Date(2022, 2, 2),
          y: [3],
        },

        {
          x: new Date(2022, 3, 2),
          y: [3],
        },
        {
          x: new Date(2022, 4, 2),
          y: [3],
        },
        {
          x: new Date(2022, 5, 2),
          y: [12],
        },
        {
          x: new Date(2022, 6, 1),
          y: [7],
        },
        {
          x: new Date(2022, 7, 2),
          y: [3],
        },
        {
          x: new Date(2022, 8, 2),
          y: [0],
        },
        {
          x: new Date(2022, 9, 1),
          y: [2],
        },
        {
          x: new Date(2022, 10, 2),
          y: [2],
        },
        {
          x: new Date(2022, 11, 2),
          y: [3],
        },
        {
          x: new Date(2022, 12, 1),
          y: [3],
        },
        {
          x: new Date(2023, 1, 2),
          y: [3],
        },
        {
          x: new Date(2023, 2, 2),
          y: [13],
        },

        {
          x: new Date(2023, 3, 2),
          y: [13],
        },
        {
          x: new Date(2023, 4, 2),
          y: [13],
        },
        ////
      ],
    },
  ]

  export const BarChartOptions : ApexCharts.ApexOptions ={
    annotations: {
      position: "back",
      yaxis: [
        {
          y: 0,
          y2: 80,
          fillColor: "#eee",
        },
      ],
    },
    grid: {
      show: false,
      padding: {
        bottom: 15,
        top: -25,
      },
    },
    chart: {
      toolbar: {
        show: false,
      },
      // background: "#f5f5f5",
    },
    colors: ["#555555"],
    dataLabels: {
      enabled: false,
    }, 
    xaxis: {
      type: "datetime",
      labels: {
        format: "yy.MM",
        show: true,
        rotate: -75,
        rotateAlways: true,
        hideOverlappingLabels: false,
        style: {
          fontSize: "10px",
          colors: "#000000",
          fontWeight: "500",
        },
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
  }