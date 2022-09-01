import React, { useContext } from "react";
import { Navigate, useNavigate, useParams } from "react-router";
import { QuizContext } from "../quizContext/quizContext";

const QuizTest1 = () => {
  const { id } = useParams();

  const {
    data,
    responseHandler,
    startCount,
    setStartCount,
    response,
    setShowResult,
  } = useContext(QuizContext);
  const navigate = useNavigate();

  const [currentQuestion] = data.filter((question) => {
    return question.id.toString() === id.toString();
  });
  const [{ userchoice }] = response.filter((question) => {
    return question.id.toString() === id.toString();
  });

  const nextHandler = () => {
    navigate(`/quiz-test/${parseInt(id) + 1}`);
  };
  const prevHandler = () => {
    navigate(`/quiz-test/${parseInt(id) - 1}`);
  };

  const submitHandler = () => {
    setStartCount((prev) => !prev);
    setShowResult(true);
  };

  const choices = currentQuestion.choices;

  if (startCount === false) {
    return <Navigate replace to='/' />;
  }

  return (
    <div className='questions'>
      <h1>Question: {currentQuestion.id}</h1>
      <p>{currentQuestion.question}</p>
      <p>Options:</p>

      {Object.keys(choices).map((key) => (
        <label key={key} htmlFor={`${choices[key]}`}>
          <span>{key}</span>: {choices[key]}
          <input
            type='radio'
            id={`${choices[key]}`}
            checked={userchoice === key}
            value={key}
            name={currentQuestion.id}
            onChange={responseHandler}
          />
        </label>
      ))}
      <button disabled={id === "1"} onClick={prevHandler}>
        prev
      </button>
      {parseInt(id) < 5 ? (
        <button disabled={id === "5"} onClick={nextHandler}>
          next
        </button>
      ) : null}
      {parseInt(id) === 5 ? (
        <button
          disabled={
            response.filter((res) => res.userchoice === "").lenght === 0
          }
          onClick={submitHandler}
        >
          Submit
        </button>
      ) : null}
    </div>
  );
};

export default QuizTest1;
