import React, { useContext, useEffect } from "react";
import { QuizContext } from "../quizContext/quizContext";
import { TIMER } from "./constant";

const Timer = () => {
  const { startCount, setTime, time, setStartCount, setShowResult } =
    useContext(QuizContext);

  useEffect(() => {
    let hello;
    if (startCount) {
      hello = setInterval(() => {
        setTime((prevCount) => prevCount - 1);
      }, 1000);
    }

    return () => {
      clearInterval(hello);
    };
  }, [startCount]);

  useEffect(() => {
    if (time === 0) {
      setStartCount((prev) => !prev);
      setTime(TIMER);
      setShowResult(true);
    }
  }, [time]);

  // console.log(time);

  return (
    <div>
      <h3 className='counter'>
        You have{" "}
        <span>
          {Math.floor(time / 60)}: {time % 60} to complete quiz once you start
        </span>
      </h3>
    </div>
  );
};

export default Timer;
