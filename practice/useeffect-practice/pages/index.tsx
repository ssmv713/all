import { useState, useEffect } from "react";
import { Timer } from "./component/Timer";

export default function Home() {
  const [showTimer, setShowTimer] = useState(false);
  return (
    <div>
      {showTimer && <Timer />}
      <button onClick={()=>{setShowTimer(!showTimer)}}>Toggle Timer</button>
    </div>
  );
}
