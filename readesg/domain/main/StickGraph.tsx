import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import dynamic from "next/dynamic";
import { chartOptions, Series } from "./data/StickGraphData";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
export const StickGraph = () => {
  return (
    <div css={st.root}>
      <div css={st.Line1}></div>
      <div css={st.Line2}></div>
      <Typography css={st.title}>
        <span css={st.redColor}>ESG Risk</span> by topic
      </Typography>
      <Chart
        series={Series}
        options={chartOptions}
        type="bar"
        height={250}
        width={660}
      />
    </div>
  );
};

const st = {
  Line2: css`
    width: 2px;
    height: 216px;
    background-color: #A8A8A8;
    position: absolute;
    top: 69px;
    right: 223px;
    z-index: 33;
  `,
  Line1: css`
    width: 2px;
    height: 216px;
    background-color: #A8A8A8;
    position: absolute;
    top: 69px;
    left: 140px;
    z-index: 33;
  `,
  root: css`
    width: 100%;
    height: 280px;
    background-color: #fff;
    margin-top: 15px;
    padding: 10px;
    border-radius: 15px;
    position: relative;

    .apexcharts-inner {
      background: #000;
    }
    .apexcharts-gridline {
      stroke-width: 3px;
    }
    text {
      tspan:nth-of-type(2n) {
        font-size: 6.5px;
        font-weight: 400;
      }
      tspan {
        font-weight: 700;
        padding-right: 10px;
        text-align: center;
      }
    }
  `,
  title: css`
    color: #353535;
    font-size: 20px;
    font-weight: 600;
  `,
  redColor: css`
    color: #b11f1f;
  `,
};
