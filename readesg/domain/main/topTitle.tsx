import { Typography } from "@mui/material";
import { css } from "@emotion/react";
export const TopTitle = () => {
  return (
    <div css={st.root}>
      <Typography css={st.subTitle}>
        분기 <span css={st.redColor}>ESG</span> News Summary
      </Typography>
      <Typography css={st.right}>
        READ<span css={st.red}>ESG</span>
      </Typography>
    </div>
  );
};

const st = {
  right: css`
    font-weight: 700;
    font-size: 18px;
    transform: translateY(-60%);
  `,
  root: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  red: css`
    color: #b11f1f;
    font-weight: 600;
  `,
  redColor: css`
    color: #b11f1f;
  `,
  subTitle: css`
    color: #353535;
    font-weight: 700;
    font-size: 1.9vw;
    margin-bottom: 20px;
  `,
};
