import { useState, createContext } from "react";
import { TIMER } from "../components/constant";
import kdata from "../quiz.json";

export const QuizContext = createContext();
export const initialUserState = { firstName: "", lastName: "" };

const QuizContextProvider = ({ children }) => {
  const data = JSON.parse(JSON.stringify(kdata));
  const [time, setTime] = useState(TIMER);
  const [startCount, setStartCount] = useState(false);
  const [fullName, setFullName] = useState(initialUserState);
  const [showResult, setShowResult] = useState(false);
  const initialstate = [
    { id: 1, userchoice: "" },
    { id: 2, userchoice: "" },
    { id: 3, userchoice: "" },
    { id: 4, userchoice: "" },
    { id: 5, userchoice: "" },
  ];
  const [response, setResponse] = useState(initialstate);

  const responseHandler = (e) => {
    const { name, value } = e.target;
    const temp = response.map((res) =>
      res.id !== parseInt(name) ? res : { ...res, userchoice: value }
    );
    setResponse([...temp]);
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFullName((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <QuizContext.Provider
      value={{
        data,
        response,
        responseHandler,
        time,
        setTime,
        startCount,
        setStartCount,
        fullName,
        setFullName,
        changeHandler,
        showResult,
        setShowResult,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContextProvider;
