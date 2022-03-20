import {
  Heading,
  Box,
  Center,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

export default function JoinScreen({ start }) {
  return (
    <Center py={6} className="flex items-center justify-center h-[77vh]">
      <Box
        maxW={"500px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Box p={6}>
          <Stack spacing={0} align={"center"} mb={5}>
            <Heading
              fontSize={"2xl"}
              fontWeight={500}
              fontFamily={"body"}
              mb={4}
            >
              Join quiz 🚀
            </Heading>
            <Text color={"gray.500"}>
              <Heading
                fontSize={"md"}
                fontWeight={500}
                fontFamily={"body"}
                mb={2}
              >
                Rules:
              </Heading>
              <Text>1.There will be 5 questions.</Text>
              <Text>2.Time allotted : 10 seconds for each question</Text>
              <Text>3.Point awarded : 1 points for each question</Text>
            </Text>
          </Stack>

          <Button
            onClick={start}
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
            Join
          </Button>
        </Box>
      </Box>
    </Center>
  );
}
