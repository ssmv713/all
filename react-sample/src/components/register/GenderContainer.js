import { css } from "@emotion/react";
import { useState } from "react";

const GenderContainer = () => {
  // female, male
  const [gender, setGender] = useState("female");

  // gender:string
  const handleCheckedChange = (gender) => {
    setGender(gender);
  };

  return (
    <div>
      <p css={style.inputTitle}>성별</p>
      <div css={style.genderWrap}>
        <RadioBtn
          txt="여자"
          checked={gender === "female"}
          value={"female"}
          onChange={handleCheckedChange}
        />
        <RadioBtn
          txt="남자"
          checked={gender === "male"}
          value={"male"}
          onChange={handleCheckedChange}
        />
      </div>
    </div>
  );
};

const RadioBtn = ({ txt, checked, value, onChange }) => {
  const checkedRadioDesign = checked ? style.checkedRadioButton : undefined;

  return (
    <label css={[style.genderBtn, checkedRadioDesign]}>
      <input
        css={style.radioBtn}
        checked={checked}
        value={value}
        type="radio"
        name="gender"
        onChange={(e) => onChange(e.target.value)}
      ></input>
      <span css={style.genderTitle}>{txt}</span>
    </label>
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
  genderTitle: css`
    ${inputBorder};
    display: flex;
    justify-content: center;
    cursor: pointer;
    color: grey;
  `,

  // 체크 안된 디자인
  radioBtn: css`
    display: none;
  `,

  // 체크된 디자인
  checkedRadioButton: css`
    & span {
      background-color: rgba(51, 137, 255, 0.0980392157);
      color: rgb(51, 137, 255);
      border: 1px solid #3389ff;
    }
  `,

  genderBtn: css`
    width: 50%;
  `,

  genderWrap: css`
    width: 100%;
    display: flex;
  `,
  inputTitle: css`
    font-size: 16px;
    color: grey;
    display: block;
    margin: 1rem 0 10px 0;
    font-weight: 600;
  `,
};

export default GenderContainer;
