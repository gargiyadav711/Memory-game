import { useEffect } from "react";

function useGameTimer(time, setTime, gameOver) {
  useEffect(() => {
    if (time <= 0 || gameOver) {
      return;
    }

    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [time, gameOver, setTime]);
}

export default useGameTimer;