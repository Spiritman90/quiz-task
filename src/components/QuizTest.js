import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { questions } from "./data";

const QuizTest = () => {
  const [fullName, setFullName] = useState("");

  console.log(fullName);
  // const navigate = useNavigate();
  // const { id } = useParams();

  return (
    <div>
      <form>
        <label>
          <input
            type='text'
            className='name-input'
            placeholder='Full name'
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
          />
        </label>
        <Link to='/quiz-test/1'>Start</Link>
      </form>
    </div>
  );
};

export default QuizTest;
