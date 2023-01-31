import { Typography } from "@mui/material";
import { css } from "@emotion/react";
export const RightArticle = () => {
  return (
    <div css={st.bigRoot}>
      <div css={st.root}>
        <Typography css={st.articleTitle}>Environment</Typography>
        <ul>
          <li css={st.articleContainer}>
            <Typography css={st.gd}>[GD]</Typography>
            <Typography css={st.article}>
              직장 경력 쌓이면 대졸자 인정…'경험인정제' 도입한다
            </Typography>
          </li>
          <li css={st.articleContainer}>
            <Typography css={st.gd}>[GD]</Typography>
            <Typography css={st.article}>
              3백억 대 전세사기 또 적발…매매·전세 ‘동시진행’…
            </Typography>
          </li>
          <li css={st.articleContainer}>
            <Typography css={st.gd}>[GD]</Typography>
            <Typography css={st.article}>
              삼성전자, 최신 스냅드래곤 탑재한 '갤럭시 북2 프로 …
            </Typography>
          </li>
          <li css={st.articleContainer}>
            <Typography css={st.gd}>[GD]</Typography>
            <Typography css={st.article}>
              직장 경력 쌓이면 대졸자 인정…'경험인정제' 도입한다
            </Typography>
          </li>
          <li css={st.articleContainer}>
            <Typography css={st.gd}>[GD]</Typography>
            <Typography css={st.article}>
              직장 경력 쌓이면 대졸자 인정…'경험인정제' 도입한다
            </Typography>
          </li>
          <li css={st.articleContainer}>
            <Typography css={st.gd}>[GD]</Typography>
            <Typography css={st.article}>
              직장 경력 쌓이면 대졸자 인정…'경험인정제' 도입한다
            </Typography>
          </li>
        </ul>
      </div>
      <div css={st.root}>
        <Typography css={st.articleTitle}>Social</Typography>
        <ul>
          <li css={st.articleContainer}>
            <Typography css={st.gd}>[OW]</Typography>
            <Typography css={st.article}>
              직장 경력 쌓이면 대졸자 인정…'경험인정제' 도입한다
            </Typography>
          </li>
          <li css={st.articleContainer}>
            <Typography css={st.gd}>[IC]</Typography>
            <Typography css={st.article}>
              3백억 대 전세사기 또 적발…매매·전세 ‘동시진행’…
            </Typography>
          </li>
          <li css={st.articleContainer}>
            <Typography css={st.gd}>[CO]</Typography>
            <Typography css={st.article}>
              삼성전자, 최신 스냅드래곤 탑재한 '갤럭시 북2 프로 …
            </Typography>
          </li>
          <li css={st.articleContainer}>
            <Typography css={st.gd}>[FR]</Typography>
            <Typography css={st.article}>
              직장 경력 쌓이면 대졸자 인정…'경험인정제' 도입한다
            </Typography>
          </li>
          <li css={st.articleContainer}>
            <Typography css={st.gd}>[ET]</Typography>
            <Typography css={st.article}>
              직장 경력 쌓이면 대졸자 인정…'경험인정제' 도입한다
            </Typography>
          </li>
          <li css={st.articleContainer}>
            <Typography css={st.gd}>[ET]</Typography>
            <Typography css={st.article}>
              직장 경력 쌓이면 대졸자 인정…'경험인정제' 도입한다
            </Typography>
          </li>
        </ul>
      </div>
      <div css={st.root}>
        <Typography css={st.articleTitle}>Governance</Typography>
        <ul>
          <li css={st.articleContainer}>
            <Typography css={st.gd}>[GD]</Typography>
            <Typography css={st.article}>
              직장 경력 쌓이면 대졸자 인정…'경험인정제' 도입한다
            </Typography>
          </li>
          <li css={st.articleContainer}>
            <Typography css={st.gd}>[GD]</Typography>
            <Typography css={st.article}>
              3백억 대 전세사기 또 적발…매매·전세 ‘동시진행’…
            </Typography>
          </li>
          <li css={st.articleContainer}>
            <Typography css={st.gd}>[GD]</Typography>
            <Typography css={st.article}>
              삼성전자, 최신 스냅드래곤 탑재한 '갤럭시 북2 프로 …
            </Typography>
          </li>
          <li css={st.articleContainer}>
            <Typography css={st.gd}>[GD]</Typography>
            <Typography css={st.article}>
              직장 경력 쌓이면 대졸자 인정…'경험인정제' 도입한다
            </Typography>
          </li>
          <li css={st.articleContainer}>
            <Typography css={st.gd}>[GD]</Typography>
            <Typography css={st.article}>
              직장 경력 쌓이면 대졸자 인정…'경험인정제' 도입한다
            </Typography>
          </li>
          <li css={st.articleContainer}>
            <Typography css={st.gd}>[GD]</Typography>
            <Typography css={st.article}>
              직장 경력 쌓이면 대졸자 인정…'경험인정제' 도입한다
            </Typography>
          </li>
        </ul>
      </div>
    </div>
  );
};

const st = {
  bigRoot: css`
    transform: translateY(-3%);
  `,
  gd: css`
    font-size: 13px;
    margin-right: 5px;
    color: #b4b4b4;
  `,
  articleContainer: css`
    display: flex;
    height: 28px;
  `,
  root: css`
    background-color: #fff;
    margin-left: 15px;
    padding: 10px;
    height: 220px;
    border-radius: 10px;
    margin-bottom: 10px;
  `,
  articleTitle: css`
    color: #b11f1f;
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 10px;
  `,
  article: css`
    font-size: 13px;
    font-weight: 600;
  `,
};
