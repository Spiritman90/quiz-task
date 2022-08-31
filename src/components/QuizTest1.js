import React, { useState, useRef } from "react";
import { questions } from "./data";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router";

const QuizTest1 = () => {
  const { id } = useParams();

  const [questionNumber, setQuestionNumber] = useState(1);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [choice, setChoice] = useState("");

  const selectedOption = useRef();

  const currentQuestion = questions.filter((question) => {
    return question.id === Number(id);
  });

  const handleChange = (e) => {
    setChoice(e.target.value);
    console.log(choice);
  };

  console.log(currentQuestion);
  return (
    <div>
      <h1>Question: {currentQuestion[0]?.id}</h1>
      <p>{currentQuestion[0]?.question}</p>
      <p>Options:</p>
      <ul>
        {currentQuestion &&
          Object.entries(currentQuestion[0]?.choices).map((choice) => (
            <li key={choice}>
              {" "}
              <span>{choice[0]}</span>: {choice[1]}
              <input type='checkbox' onChange={handleChange} />
            </li>
          ))}
      </ul>
      <Link
        to={`/quiz-test/${
          Number(id) > questions.length ? 1 : questionNumber + Number(id)
        }`}
      >
        Next
      </Link>
    </div>
  );
};

export default QuizTest1;
