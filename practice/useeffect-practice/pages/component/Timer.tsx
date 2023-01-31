import { useEffect } from "react";

export const Timer = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("타이머 돌아가는중...");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <span>타이머 시작합니다. 콘솔을 보세요</span>
    </div>
  );
};
