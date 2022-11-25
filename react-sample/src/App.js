import { useState } from "react";
import { css } from "@emotion/react";

const App = () => {
  const [timer, setTimer] = useState(0);
  return (
    <div>
      <header>
        <p
          css={css`
            background-color: red;
          `}
        >
          asdasdasd
        </p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          {timer}
        </a>
        {/* <button onClick={() => setTimer(timer + 1)}>+</button>
        <button onClick={() => setTimer(timer - 1)}>-</button> */}
      </header>
    </div>
  );
};

const styles = {
  root: css`
    font-size: 200px;
    background-color: red;
    color: yellow;
  `,
};

export default App;
