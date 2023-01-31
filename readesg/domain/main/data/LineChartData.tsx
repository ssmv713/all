//라인차트
export const LineSeries: ApexAxisChartSeries = [
  {
    name: "Series A",
    data: [
      10000, 10000, 18000, 20000, 0, 20000, 10000, 38000, 64000, 50000, 34000,
      38000, 40000, 42000, 36000, 38000, 63000, 62000, 77000, 76000, 77000,
      68000, 70000, 50000, 62000, 58000, 70000, 90000,
    ],
  },
  {
    name: "Series B",
    data: [
      0.5, 0.5, 0.8, 0.2, 0.2, 0.4, 0.1, 0.9, 0.5, 1, 1.1, 1.8, 2, 2.3, 1.7,
      1.9, 3.3, 3.2, 3.9, 3.7, 3.8, 3.4, 4.5, 4.3, 4.8, 4.8, 4.1, 4.5,
    ],
  },
];

const LineCategories = [
  1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007,
  2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020,
  2021, 2022,
];

export const LineOptions: ApexCharts.ApexOptions = {
  annotations: {
    position: "back",
    yaxis: [
      {
        y: 0,
        y2: 100000,
        fillColor: "#eeeeee",
      },
    ],
  },
  grid: {
    // position:'front',
    borderColor: "#fafafa",
    padding: {
      bottom: -30,
    },
  },

  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.5,
      opacityTo: 0,
      stops: [0, 90, 100],
    },
  },
  chart: {
    type: "line",
    toolbar: {
      show: false,
    },
    // background: "#f5f5f5",
  },
  dataLabels: {
    enabled: false,
  },
  colors: ["#FFBF57", "#B11F1F"],
  stroke: {
    width: [2, 2],
  },
  xaxis: {
    axisBorder: {
      color: "#B11F1F",
    },
    labels: { show: false },
    categories: LineCategories,
  },
  yaxis: [
    {
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: "#000",
          fontSize: "8px",
          fontWeight:"600"
        },
        formatter: (value) => {
          return value.toLocaleString();
        },
      },
    },
    {
      opposite: true,
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: "#000",
          fontSize: "8px",
          fontWeight:"600"
        },
        formatter: (value) => {
          return value.toFixed(0);
        },
      },
    },
  ],
  legend: {
    show: false,
  },
};
