import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { QuizContext, initialUserState } from "../quizContext/quizContext";
import Result from "./Result";

const QuizTest = () => {
  const {
    setStartCount,
    fullName,
    changeHandler,
    showResult,
    setFullName,
    setShowResult,
  } = useContext(QuizContext);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    setStartCount((prev) => !prev);
    navigate("/quiz-test/1");
  };

  const resetResultHandler = () => {
    setFullName(initialUserState);
    setShowResult(false);
  };

  return (
    <div>
      <form autoComplete='off' onSubmit={submitHandler}>
        <label>
          <input
            required
            type='text'
            className='name-input'
            placeholder='First name'
            name='firstName'
            onChange={changeHandler}
            value={fullName.firstName}
          />
        </label>
        <label>
          <input
            required
            type='text'
            className='name-input'
            placeholder='Last name'
            name='lastName'
            onChange={changeHandler}
            value={fullName.lastName}
          />
        </label>
        {showResult ? (
          <button onClick={resetResultHandler} type='button'>
            Reset
          </button>
        ) : (
          <button type='submit'>Start</button>
        )}
      </form>
      {showResult && <Result />}
    </div>
  );
};

export default QuizTest;
