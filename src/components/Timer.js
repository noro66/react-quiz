import { useEffect } from "react";

function Timer({ secondsRemaining, dispatch }) {
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tik" });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch]);
  const mins = Math.floor(secondsRemaining/60);
  const secs = secondsRemaining % 60;
  return <div className="timer">
    {mins < 10 && "0"} {mins} : {secs < 10 && "0"} {secs}
  </div>;
}

export default Timer;
