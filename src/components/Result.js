import React, { useContext } from "react";
import { QuizContext } from "../quizContext/quizContext";

function Result() {
  const { fullName, data, response } = useContext(QuizContext);

  const rese = response.filter(
    ({ userchoice }, idx) => data[idx].answer === userchoice
  );

  return (
    <div className='result'>
      <p>
        {fullName.firstName} {fullName.lastName}, <span>You got</span>{" "}
        {rese.length} out of {data?.length} <span>correctly.</span>{" "}
      </p>
    </div>
  );
}

export default Result;
