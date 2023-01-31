import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import dynamic from "next/dynamic";
import { BarChartOptions, BarChartSeries } from "./data/BarChartdata";
import { LineOptions, LineSeries } from "./data/LineChartData";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
export const LineChartSection = () => {
  return (
    <div css={st.root}>
      <div css={st.lineChart}>
        <div css={st.titleContainer}>
          <Typography css={st.riskTitle}>
            주가 및 <span css={st.redColor}>ESG Risk</span>
          </Typography>
          <div css={st.labels}>
            <div css={st.labelContainer}>
              <div css={st.redline}></div>
              <Typography css={st.label}>ESG Risk</Typography>
            </div>
            <div css={st.labelContainer}>
              <div css={st.yellowline}></div>
              <Typography css={st.label}>주가</Typography>
            </div>
            <div css={st.labelContainer}>
              <div css={st.blackbar}></div>
              <Typography css={st.label}>ESG 사건사고 기사수</Typography>
            </div>
          </div>
        </div>

        <Chart
          css={st.lineGraph}
          series={LineSeries}
          options={LineOptions}
          type="area"
          height={150}
          width={420}
        />
        <Chart
          css={st.barChart}
          series={BarChartSeries}
          options={BarChartOptions}
          type="bar"
          height={80}
          width={360}
        />
      </div>
      <div css={st.commentBox}>
        <Typography css={st.commentTitle}>ESG Comment</Typography>
        <Typography css={st.comment}>
          심장의 위하여서, 듣기만 얼음 그것을 피가 품고 반짝이는 것이다. 우리
          하는 보이는 황금시대를 있을 같이, 영락과 구하기 풍부하게 보라. 이것을
          속에 이상, 싸인 돋고, 소금이라 내려온 시들어 힘있다. 살 있는 기관과
          때문이다. 같으며, 든 그것을 평화스러운 이것이다. 청춘에서만 품으며,
          커다란 청춘
        </Typography>
      </div>
    </div>
  );
};

const st = {
  lineGraph: css`
    margin-top: -10px;
  `,
  barChart: css`
    margin-left: 30px;
  `,
  labels: css`
    display: flex;
  `,
  labelContainer: css`
    display: flex;
    align-items: center;
  `,
  titleContainer: css`
    display: flex;
    justify-content: space-between;
  `,
  label: css`
    font-size: 10px;
    margin-left: 0.8px;
    transform: scale(0.8);
  `,
  yellowline: css`
    width: 15px;
    height: 2px;
    background-color: #ffbf57;
  `,
  redline: css`
    width: 15px;
    height: 2px;
    background-color: #b11f1f;
  `,
  blackbar: css`
    width: 15px;
    height: 7px;
    background-color: #555555;
  `,
  comment: css`
    font-size: 13px;
    margin-top: 23px;
  `,
  commentBox: css`
    background-color: #fff;
    margin-left: 15px;
    width: 250px;
    border-radius: 15px;
    padding: 15px 15px;
  `,
  commentTitle: css`
    font-size: 20px;
    font-weight: 600;
  `,
  redColor: css`
    color: #b11f1f;
  `,
  riskTitle: css`
    font-size: 20px;
    font-weight: 600;
  `,
  lineChart: css`
    width: 410px;
    height: 280px;
    border-radius: 10px;
    background-color: white;
    padding: 10px;
    &:nth-child(2) {
      z-index: 33;
    }
    .apexcharts-gridline {
      stroke-width: 3px;
    }
  `,
  root: css`
    margin-top: 15px;
    display: flex;
  `,
};
