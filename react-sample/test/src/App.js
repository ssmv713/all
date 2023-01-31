import React, { Component } from "react";
import { css } from "@emotion/react";

class JoinForm extends Component {
  state = {
    checkPassword: "",
  };
  //input onChange 이벤트
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    // 파라미터로 받은 event.target.name이 name 아닐 경우에만 handleCheck함수 실행
    // setTimeout으로 딜레이를 준 이유는 딜레이를 주지 않았을 경우 setState 변경된 값이 handleCheck에서 바로 반영되지 않음
    if (e.target.name !== "name") {
      setTimeout(this.handleCheck, 100);
    }
  };
  //비밀번호 체크
  handleCheck = () => {
    const { firstPassword, lastPassword } = this.state;
    // 비밀번호 무입력 상태일 때와 둘 중에 하나의 값이 입력 상태가 아닐때
    if (firstPassword.length < 1 || lastPassword.length < 1) {
      this.setState({
        checkPassword: "",
      });
      // 비밀번호가 같다면 일치
    } else if (firstPassword === lastPassword) {
      this.setState({
        checkPassword: "비밀번호가 일치합니다",
      });
      // 비밀번호가 같지 않다면 불일치
    } else {
      this.setState({
        checkPassword: "비밀번호가 일치하지 않습니다.",
      });
    }
  };

  render() {
    const { name, firstPassword, lastPassword, checkPassword } = this.state;
    return (
      <div>
        <form className="joinForm">
          <div>
            <p>비밀번호</p>
            <input
              name="firstPassword"
              onChange={this.handleChange}
              value={firstPassword}
              placeholder="비밀번호"
            />
          </div>
          <p>비밀번호 재입력</p>
          <input
            name="lastPassword"
            onChange={this.handleChange}
            value={lastPassword}
            placeholder="비밀번호 확인"
          />
          <div> {checkPassword}</div>
        </form>
      </div>
    );
  }
}

export default JoinForm;
