import { Button, Heading, Text, useColorModeValue } from "@chakra-ui/react";

const QuizResult = ({ result, retry }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"} mb={2}>
        Result: {result.percentage}%
      </Heading>
      <Text color={"gray.500"}>
        Selected {result.correct} correct options out of {result.total}
        questions
      </Text>
      <Button
        onClick={retry}
        w={"full"}
        mt={8}
        bg={useColorModeValue("purple.600", "purple.500")}
        color={"white"}
        rounded={"md"}
        _hover={{
          transform: "translateY(-2px)",
          boxShadow: "lg",
        }}
      >
        Retry
      </Button>
    </div>
  );
};

export default QuizResult;
