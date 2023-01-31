const SeriesDataArr = [18, 12, 18, 18, 18, 60, 45, 59, 73, 45, 45, 68, 7, 68];

export const Series: ApexAxisChartSeries = [
  {
    data: SeriesDataArr,
  },
];

const CategoriesArr = [
  ["HZ", "유해물질 배출"],
  ["HS", "유해상품 관리"],
  ["CS", "생산물책임"],
  ["GD", "양성평등"],
  ["SA", "산업안전보건"],
  ["LA", "노사관계"],
  ["CR", "고객대응"],
  ["SO", "지역사회대응"],
  ["LK", "고객정보유출"],
  ["OW", "지배주주"],
  ["IC", "내부통제"],
  ["CO", "부정부패"],
  ["FR", "부당경쟁"],
  ["ET", "비윤리성"],
];

export const chartOptions: ApexCharts.ApexOptions = {
  annotations: {
    position: "back",
    yaxis: [
      {
        y: 0,
        y2: 80,

        fillColor: "#ececec",
      },
    ],
  },
  plotOptions: {
    bar: {
      columnWidth: "40%",
      borderRadius: 5,
      borderRadiusApplication: "end",
    },
  },
  grid: {
    borderColor: "#f1f1f1",
    show: true,
  },
  chart: {
    toolbar: {
      show: false,
    },
    // background: "#fff",
  },
  colors: ["#C66363"],
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    axisBorder: {
      color: "#B11F1F",
    },
    type: "category",
    categories: CategoriesArr,
    labels: {
      show: true,
      rotate: 0,
      style: {
        fontSize: "13px",
        colors: "#000000",
        fontWeight: "500",
        cssClass: "apexcharts-xaxis-label",
      },
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    tickAmount: 8,
    labels: {
      show: true,      
    },
  },
};
