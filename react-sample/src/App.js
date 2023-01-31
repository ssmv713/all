import { useState, useRef } from "react";
import { css } from "@emotion/react";
import InputBox, { Input } from "./components/register/IdInput";
import { SendBtn } from "./components/register/IdInput";
import { BirthWrap } from "./components/register/IdInput";
import GenderContainer from "./components/register/GenderContainer";
import AgreeTerms from "./components/register/AgreeTerms";
import PassWord from "./components/register/PasswordCheck";
import NicknameContainer from "./components/register/Nickname";
import EmailConfirm from "./components/register/EmailConfirm";

const App = () => {
  const [location, setLocation] = useState("");
  const [recommendId, setRecommendId] = useState("");
  const [nickname, setNickname] = useState("");
  const [name, setName] = useState("");
  const isValidLogin = !(name && nickname && recommendId);
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`회원가입완료`);
  };
  return (
    <div css={style.inner}>
      <header>
        <Incput />
      </header>
      <div css={style.formOutline}>
        <h2 css={style.formTitle}>회원 및 계정 정보 입력</h2>
        <div>
          <EmailConfirm />
        </div>
        <div>
          <PassWord />
        </div>

        <div>
          <InputBox
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            title="이름"
            placeholder="이름을 입력해주세요."
          />
        </div>
        <div>
          <NicknameContainer />
          <InputBox
            title="닉네임"
            placeholder="닉네임을 입력해주세요."
            value={nickname}
            onChange={(e) => {
              setNickname(e.target.value);
            }}
          />
        </div>
        <div>
          <p css={style.inputTitle}>생년월일</p>
          <BirthWrap />
        </div>
        <div>
          <GenderContainer />
        </div>
        <div>
          <p css={style.inputTitle}>거주지역</p>
          <select
            css={style.selectBox}
            id="place"
            name="place"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            value={location}
          >
            <option css={style.placeOption} selected disabled>
              거주지역을 선택해주세요.
            </option>
            <option css={style.placeOption}>서울</option>
            <option css={style.placeOption}>경기</option>
            <option css={style.placeOption}>인천</option>
            <option css={style.placeOption}>부산</option>
            <option css={style.placeOption}>대구</option>
            <option css={style.placeOption}>광주</option>
          </select>
        </div>
        <div>
          <InputBox
            title="추천인 아이디"
            placeholder="추천인 아이디를 입력해주세요."
            value={recommendId}
            onChange={(e) => {
              setRecommendId(e.target.value);
            }}
          />
        </div>
        <div>
          <p css={style.inputTitle}>가입경로</p>
          <select css={style.selectBox} id="signWay" name="signWay">
            <option css={style.placeOption}>가입경로를 선택해주세요.</option>
            <option css={style.placeOption}>sns광고</option>
            <option css={style.placeOption}>지인추천</option>
            <option css={style.placeOption}>검색</option>
            <option css={style.placeOption}>행사</option>
            <option css={style.placeOption}>방송</option>
          </select>
        </div>
      </div>
      <div css={style.formOutline}>
        <AgreeTerms />
      </div>
      <div css={style.signUpBtnWrap}>
        <input
          type="submit"
          disabled={isValidLogin}
          value="회원가입 하기"
          css={style.signUpBtn}
          onClick={handleSubmit}
        />
      </div>
      <footer>
        <ul css={style.ftListWrap}>
          <li css={style.ftList}>이용약관</li>
          <li css={style.ftList}>개인정보처리방침</li>
          <li css={style.ftList}>콘텐츠 이용정책</li>
          <li css={style.ftList}>고객센터</li>
          <li css={style.ftList}>퀴즈톡 홈페이지</li>
        </ul>
        <p css={style.ftTxt}>
          Copyright by QUIZTALK Co.LTD All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

const inputBorder = css`
  line-height: 48px;
  border: 1px solid #dee3e8;
  border-radius: 4px;
  padding-left: 10px;
  font-size: 14px;
  margin: 5px 0 5px 0;
  box-sizing: border-box;
  outline: none;
`;

const style = {
  radioBtn: css`
    display: none;
  `,
  ftTxt: css`
    text-align: center;
    color: #b9c0c7;
    font-weight: 600;
    font-size: 14px;
  `,
  ftList: css`
    list-style: none;
    font-size: 14px;
    margin: 0 7px;
    color: #b9c0c7;
    font-weight: 600;
  `,
  ftListWrap: css`
    display: flex;
    padding: 0;
    margin-top: 100px;
    justify-content: center;
  `,
  signUpBtn: css`
    width: 160px;
    color: white;
    background-color: #3389ff;
    border: none;
    line-height: 48px;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  `,
  signUpBtnWrap: css`
    display: flex;
    justify-content: flex-end;
    margin-top: 15px;
  `,

  selectBox: css`
    height: 48px;
    ${inputBorder};
    width: 100%;
  `,

  placeOption: css`
    line-height: 48px;
    text-align: center;
  `,
  genderTitle: css`
    ${inputBorder};
    display: flex;
    justify-content: center;
  `,

  genderWrap: css`
    width: 100%;
    display: flex;
  `,
  inputBox: css`
    width: 100%;
    ${inputBorder};
  `,
  genderBtn: css`
    width: 50%;
  `,

  inner: css`
    width: 800px;
    margin: 100px auto;
  `,
  formOutline: css`
    border: 1px solid #dee3e8;
    background-color: #fff;
    box-shadow: 0px 0px 4px 4px rgb(0 0 0 / 3%);
    padding: 2.5rem;
    margin-top: 60px;
  `,

  inputTitle: css`
    font-size: 16px;
    color: grey;
    display: block;
    margin: 1rem 0 10px 0;
    font-weight: 600;
  `,
  formTitle: css`
    font-size: 20px;
  `,
};

export default App;
