import { Button, Heading, useColorModeValue } from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import { flushSync } from "react-dom";

const Question = ({ question, totalQuestions, currentQuestion, setAnswer }) => {
  const [selectedOption, setselectedOption] = useState(null);
  const timer = useRef(null);
  const progressBar = useRef(null);

  const gotoNextQuestion = () => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    flushSync(() => {
      setAnswer(selectedOption);
    });
    setselectedOption(null);
  };

  useEffect(() => {
    progressBar.current.classList.remove("active");
    setTimeout(() => {
      progressBar.current.classList.add("active");
    }, 0);
    timer.current = setTimeout(gotoNextQuestion, 10 * 1000);
    return gotoNextQuestion;
  }, [question]);
  return (
    <div>
      <div className="" ref={progressBar}></div>
      <div className="flex items-center justify-center gap-1 my-5">
        <b>{currentQuestion}</b>
        of
        <b>{totalQuestions}</b>
      </div>
      <div className="main">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-bold text-gray-500">Question:</p>
          <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"} mb={2}>
            {question.title}
          </Heading>
        </div>
        <div className="">
          {question.options.map((option, index) => {
            return (
              <div
                className={
                  index === selectedOption ? "option active" : "option"
                }
                key={index}
                onClick={() => setselectedOption(index)}
              >
                {option}
              </div>
            );
          })}
        </div>
      </div>
      <div className="control">
        <Button
          onClick={gotoNextQuestion}
          w={"20"}
          mt={8}
          bg={useColorModeValue("purple.600", "purple.500")}
          color={"white"}
          rounded={"md"}
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "lg",
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Question;
