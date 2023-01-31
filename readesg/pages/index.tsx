import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import { LineChartSection } from "domain/main/LineChart";
import { RightArticle } from "domain/main/rightArticle";
import { StickGraph } from "domain/main/StickGraph";
import { TitleSection } from "domain/main/titleSection";
import { TopTitle } from "domain/main/topTitle";

export default function Home() {
  return (
    <div css={st.root}>
      <TopTitle />
      <div css={st.container}>
        <div css={st.left}>
          <TitleSection />
          <StickGraph />
          <LineChartSection />
        </div>
        <RightArticle />
      </div>
    </div>
  );
}

const st = {
  container: css`
    display: flex;
  `,
  left: css`
    width: 670px;
  `,
  root: css`
    width: 297mm;
    height: 210mm;
    background-color: #fafafa;
    padding: 40px 28px 35px 28px;
  `,
};
