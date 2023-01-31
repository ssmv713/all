import { css } from "@emotion/react";
import React, { useRef, useState } from "react";

const EmailConfirm = () => {
  const inputRef = useRef(null);
  const [click, setClickEnabled] = useState("");
  const [updated, setUpdated] = useState("");
  const [codeMsg, setCodeMsg] = useState(false);
  const handleEnabled = () => {
    if (inputRef.current.value === "123") {
      setClickEnabled(true);
      // setTimer(!timer);
      clearInterval(counterRef.current);
    } else {
      setCodeMsg(true);
    }
  };
  const handleClick = () => {
    // 👇 "inputRef.current.value" is input value
    setUpdated(inputRef.current.value);
  };
  console.log({ updated });
  ///////////////타이머/////////////////
  const counterRef = useRef(null);

  const [timer, setTimer] = useState("00:00");

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);

    return {
      total,

      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const clearTimer = (e) => {
    setTimer("01:00");

    if (counterRef.current) clearInterval(counterRef.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    counterRef.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();

    deadline.setMinutes(deadline.getMinutes() + 1);
    return deadline;
  };

  const onClickReset = () => {
    clearTimer(getDeadTime());
  };
  const [checkContainer, setBtnShow] = useState(false);

  const [msg, setMsg] = useState(true);

  const msgHandler = () => {
    setMsg(false);
  };

  const [error, setError] = useState(null);
  const emailRef = useRef(null);
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  const handleChange = () => {
    if (!isValidEmail(emailRef.current.value)) {
      setBtnShow(false);
    } else {
      setBtnShow(true);
      onClickReset();
    }
  };

  return (
    <div>
      <div>
        <p css={styles.inputTitle}>이메일</p>
        <input
          ref={emailRef}
          css={styles.inputBox}
          placeholder="퀴즈톡 아이디로 사용할 이메일을 입력해주세요."
          type="text"
        />
      </div>

      {checkContainer ? null : (
        <SendBtn
          value={"인증번호 보내기"}
          msg={msg ? null : "이메일 형식이 틀렸습니다."}
          onClick={() => {
            handleChange();
            msgHandler();
          }}
        />
      )}

      {checkContainer ? (
        <div css={styles.SendContainer}>
          <div css={styles.resentBox}>
            <input
              css={styles.inputNone}
              ref={inputRef}
              type="text"
              placeholder="인증번호를 입력해주세요."
              disabled={click}
            />
            <span css={styles.counter}>{timer}</span>
          </div>

          <input
            disabled={click}
            onClick={() => {
              handleClick();
              handleEnabled();
            }}
            css={styles.sendBtn}
            type="button"
            value={updated === "123" ? "인증완료" : "인증번호 확인"}
          />
        </div>
      ) : null}
      {codeMsg ? <span css={styles.msg}>인증번호가 틀립니다.</span> : null}
    </div>
  );
};

export const SendBtn = ({ value, onClick, msg }) => {
  return (
    <div css={styles.SendContainer}>
      <p css={styles.msg}>{msg}</p>
      <input
        css={styles.sendBtn}
        type="button"
        value={value}
        onClick={onClick}
      />
    </div>
  );
};
export const InputBox = ({ title, placeholder, onChange, ref }) => {
  return (
    <div>
      <p css={styles.inputTitle}>{title}</p>
      <input
        ref={ref}
        placeholder={placeholder}
        onChange={onChange}
        css={styles.inputBox}
        type="text"
      />
    </div>
  );
};

////////////////////css/////////////////
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
  counter: css`
    color: #99c4ff;
  `,
  inputNone: css`
    outline: none;
    width: 90%;
    border: none;
    line-height: 48px;
  `,
  msg: css`
    color: red;
    font-size: 15px;
  `,
  SendContainer: css`
    display: flex;
    justify-content: space-between;
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
  resentBox: css`
    width: 75%;
    ${inputBorder};
    &::placeholder {
      color: lightgrey;
    }
  `,
  inputBox: css`
    width: 100%;
    ${inputBorder};
    &::placeholder {
      color: lightgray;
    }
  `,
  inputTitle: css`
    font-size: 16px;
    color: grey;
    display: block;
    margin: 1rem 0 10px 0;
    font-weight: 600;
  `,
};

export default EmailConfirm;
