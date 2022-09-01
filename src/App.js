import { BrowserRouter, Routes, Route } from "react-router-dom";

import QuizTest from "./components/QuizTest";
import QuizTest1 from "./components/QuizTest1";
import Timer from "./components/Timer";
import QuizContextProvider from "./quizContext/quizContext";

// import QuizTest2 from "./components/QuizTest2";
// import QuizTest3 from "./components/QuizTest3";
// import QuizTest4 from "./components/QuizTest4";
// import QuizTest5 from "./components/QuizTest5";

function App() {
  return (
    <QuizContextProvider>
      <BrowserRouter>
        <Timer />
        <Routes>
          <Route path='/' element={<QuizTest />} />

          <Route path='/quiz-test/:id' element={<QuizTest1 />} />
        </Routes>
      </BrowserRouter>
    </QuizContextProvider>
  );
}

export default App;
