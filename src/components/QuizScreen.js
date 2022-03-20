import { Box, Center, Stack, useColorModeValue } from "@chakra-ui/react";
import React, { useState } from "react";
import QuestionList from "../Data/QuestionList.json";
import Question from "./Question";
import QuizResult from "./QuizResult";

const QuizScreen = ({ retry }) => {
  const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0);
  const [markedAnswers, setmarkedAnswers] = useState(
    new Array(QuestionList.length)
  );
  const isQuestionEnd = currentQuestionIndex === QuestionList.length;

  const calculateResult = () => {
    let correct = 0;
    QuestionList.forEach((question, index) => {
      if (question.correctOptionIndex == markedAnswers[index]) {
        correct++;
      }
    });
    return {
      total: QuestionList.length,
      correct: correct,
      percentage: Math.trunc((correct / QuestionList.length) * 100),
    };
  };
  return (
    <Center py={6} className="flex items-center justify-center min-h-[100vh]">
      <Box
        maxW={"500px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Box p={6}>
          <Stack spacing={0} align={"left"} mb={5}>
            {isQuestionEnd ? (
              <QuizResult result={calculateResult()} retry={retry} />
            ) : (
              <Question
                question={QuestionList[currentQuestionIndex]}
                totalQuestions={QuestionList.length}
                currentQuestion={currentQuestionIndex + 1}
                setAnswer={(index) => {
                  setmarkedAnswers((arr) => {
                    let newArr = [...arr];
                    newArr[currentQuestionIndex - 1] = index;
                    return newArr;
                  });
                  setcurrentQuestionIndex(currentQuestionIndex + 1);
                }}
              />
            )}
          </Stack>
        </Box>
      </Box>
    </Center>
  );
};

export default QuizScreen;
