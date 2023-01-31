import { css } from "@emotion/react";
import Typography from "@mui/material/Typography";

export const TitleSection = () => {
  return (
    <div>
      <div css={st.titleContainer}>
        <Typography css={st.ttile}>현대두산인프라코어</Typography>

        <ul css={st.alphabetContainer}>
          <li css={st.alphabetWrap}>
            <div css={st.alphabetTotal}>B</div>
            <Typography css={st.btmText}>Total</Typography>
          </li>
          <li css={st.alphabetWrap}>
            <div css={st.alphabet}>A</div>
            <Typography css={st.btmText}>Environment</Typography>
          </li>
          <li css={st.alphabetWrap}>
            <div css={st.alphabet}>B</div>
            <Typography css={st.btmText}>Social</Typography>
          </li>
          <li css={st.alphabetWrap}>
            <div css={st.alphabet}>C</div>
            <Typography css={st.btmText}>Governance</Typography>
          </li>
        </ul>
      </div>
      <div css={st.redLine}></div>
    </div>
  );
};

const st = {
  redLine: css`
    width: 665px;
    height: 2px;
    background-color: #b11f1f;
    z-index: 33;
  `,
  alphabetWrap: css`
    margin-right: 11px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  btmText: css`
    font-size: 8px;
  `,
  alphabetTotal: css`
    width: 50px;
    height: 50px;
    background: rgba(177, 31, 31, 0.3);
    border-radius: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    color: #343950;
    font-weight: 700;
  `,
  alphabet: css`
    width: 50px;
    height: 50px;
    background: rgba(177, 31, 31, 0.3);
    border-radius: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    color: #343950;
    font-weight: 700;
    background: rgba(177, 31, 31, 0.15);
  `,
  alphabetContainer: css`
    display: flex;
    margin-bottom: 10px;
  `,
  titleContainer: css`
    display: flex;
    justify-content: space-between;
  `,
  ttile: css`
    font-size: 40px;
    font-weight: 900;
    color: #343950;
  `,
};
