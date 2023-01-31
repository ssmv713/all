import { css } from "@emotion/react";
import React, { useState, useEffect } from "react";


const AgreeTerms = () => {
  /////////새로추가//////////////
  const [allCheck, setAllCheck] = useState(false);
  const [privacyCheck, setprivacyCheck] = useState(false);
  const [useCheck, setUseCheck] = useState(false);

  const allBtnEvent = () => {
    if (allCheck === false) {
      setAllCheck(true);
      setprivacyCheck(true);
      setUseCheck(true);
    } else {
      setAllCheck(false);
      setprivacyCheck(false);
      setUseCheck(false);
    }
  };

  const ageBtnEvent = () => {
    if (privacyCheck === false) {
      setprivacyCheck(true);
    } else {
      setprivacyCheck(false);
    }
  };

  const useBtnEvent = () => {
    if (useCheck === false) {
      setUseCheck(true);
    } else {
      setUseCheck(false);
    }
  };

  useEffect(() => {
    if (privacyCheck === true && useCheck === true) {
      setAllCheck(true);
    } else {
      setAllCheck(false);
    }
  }, [privacyCheck, useCheck]);
  //////새로추가////
  return (
    <div css={style.termAll}>
      <div>
        <div>
          <div>
            <div>
              <input
                css={style.termBtn}
                type="checkbox"
                id="all-check"
                checked={allCheck}
                onChange={allBtnEvent}
              />
              <label for="all-check">모든 약관에 동의합니다.</label>
            </div>
            <div css={style.termWrap}>
              <div>
                <input
                  css={style.termBtn}
                  type="checkbox"
                  id="check1"
                  checked={privacyCheck}
                  onChange={ageBtnEvent}
                />
                <label for="check1">
                  [필수] 개인정보 동의{" "}
                  <span css={style.termClick}>약관보기</span>
                </label>
              </div>
              <div>
                <input
                  css={style.termBtn}
                  type="checkbox"
                  id="check2"
                  checked={useCheck}
                  onChange={useBtnEvent}
                />
                <label for="check2">
                  [필수] 서비스 이용약관 동의{" "}
                  <span css={style.termClick}>약관보기</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const style = {
  termBtn: css`
    appearance: none;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='silver' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    width: 1.1rem;
    height: 1.1rem;
    border: 2.3px solid silver;
    border-radius: 1.35rem;
    margin-right: 10px;
    &:checked {
      border-color: transparent;
      background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");

      background-color: #3389ff;
    }
  `,
  singleTermWrap: css`
    margin: 12px 0;
    display: flex;
    align-items: center;
  `,
  termClick: css`
    color: #3389ff;
  `,

  singleTermTxt: css`
    color: #6a7584;
  `,
  termAll: css`
    font-size: 14px;
  `,
  termWrap: css`
    background-color: #fafafb;
    margin-top: 1rem;
    box-sizing: border-box;
    padding: 3px 14px;
  `,
};

export default AgreeTerms;
