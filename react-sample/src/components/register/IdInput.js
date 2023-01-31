import { css } from "@emotion/react";
import { buildQueries } from "@testing-library/react";
import logo from "../../logo-blue.png";

const InputBox = ({ value, title, placeholder, onChange }) => {
  return (
    <div>
      <p css={styles.inputTitle}>{title}</p>
      <input
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        css={styles.inputBox}
        type="text"
      />
    
    </div>
  );
};

export const Input = () => {
  return (
    <div>
      <img src={logo} />
      <p css={header.root}>퀴즈톡 가입을 시작합시다!</p>
    </div>
  );
};

export const SendBtn = () => {
  return (
    <div css={styles.SendContainer}>
      {/* <input css={styles.resentBox} type="text" /> */}
      <p></p>
      <input css={styles.sendBtn} type="button" value="인증번호 보내기" />
    </div>
  );
};

export const ConfirmCodeContainer = () => {
  return (
    <div css={styles.SendContainer}>
      <input css={styles.resentBox} type="text" />

      <input css={styles.sendBtn} type="button" value="인증번호 확인" />
    </div>
  );
};

export const BirthBorder = ({ txt, placeholder }) => {
  return (
    <div css={styles.birthBorder}>
      <input css={styles.inputBirth} placeholder={placeholder}></input>
      {txt}
    </div>
  );
};

export const BirthWrap = () => {
  return (
    <div css={styles.birthWrap}>
      <BirthBorder txt="년" placeholder="1990" />
      <BirthBorder txt="월" placeholder="10" />
      <BirthBorder txt="일" placeholder="10" />
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

const styles = {
  SendContainer: css`
    display: flex;
    justify-content: space-between;
  `,
  inputTitle: css`
    font-size: 16px;
    color: grey;
    display: block;
    margin: 1rem 0 10px 0;
    font-weight: 600;
  `,
  birthWrap: css`
    display: flex;
    justify-content: space-between;
  `,
  birthBorder: css`
    width: 32%;
    ${inputBorder};
    color: gray; ;
  `,
  inputBirth: css`
    width: 84%;
    border: none;
    outline: none;
    &::placeholder {
      color: lightgray;
    }
  `,
  inputBox: css`
    width: 100%;
    ${inputBorder};
    &::placeholder {
      color: lightgray;
    }
  `,
  resentBox: css`
    width: 75%;
    ${inputBorder};
  `,
  sendBtn: css`
    width: 23%;
    background-color: #fff;
    border: 1px solid rgb(153, 196, 255);
    line-height: 48px;
    border-radius: 4px;
    color: rgb(153, 196, 255);
    margin: 5px 0 5px 8px;
    font-size: 16px;
    cursor: pointer;
    margin-left: 14px;
  `,
};

export const header = {
  root: css`
    font-size: 28px;
    margin-top: 7px;
  `,
};

export default InputBox;
