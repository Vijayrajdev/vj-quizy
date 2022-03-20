import { useState } from "react";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import QuizScreen from "./components/QuizScreen";
import JoinScreen from "./components/JoinScreen";
import "./App.css";

function App() {
  const [isQuizStarted, setisQuizStarted] = useState(false);
  return (
    <>
      <Navbar />
      <div>
        {isQuizStarted ? (
          <QuizScreen retry={() => setisQuizStarted(false)} />
        ) : (
          <JoinScreen start={() => setisQuizStarted(true)} />
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
