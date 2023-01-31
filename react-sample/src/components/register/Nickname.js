import { css } from "@emotion/react";
import { useState } from "react";

const NicknameContainer = () => {
  const [count, setCount] = useState(0);
  const counting = (e) => setCount(e.target.value.length);
  return (
    <div>
      <p>닉네임</p>
      <div css={style.nicknameBorder}>
        <input css={style.inputNone} onChange={counting} maxLength="10"></input>
        <div css={style.colorGrey}>
          <span css={style.colorBlue}>{count}</span>/10
        </div>
      </div>
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
  colorBlue: css`
    color: #3389ff;
  `,
  colorGrey: css`
    color: grey;
  `,
  inputNone: css`
    border: none;
    outline: none;
    width: 90%;
  `,
  nicknameBorder: css`
    ${inputBorder};
    display: flex;
  `,

  // 체크 안된 디자인
  radioBtn: css`
    display: none;
  `,

  // 체크된 디자인
};

export default NicknameContainer;
