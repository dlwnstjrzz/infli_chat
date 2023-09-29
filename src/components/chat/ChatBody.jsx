import { Box, HStack, Stack, Text } from "@chakra-ui/react";

const ChatBody = ({ messages, lastMessageRef }) => {
  return (
    <Box>
      <Stack>
        {messages.map((el) => {
          return (
            <HStack fontSize={"15px"} lineHeight={"20px"} key={el.id}>
              <Text color={el.color} fontWeight={700}>
                {el.nickname}:
              </Text>
              <Box>
                <Text>{el.text}</Text>
              </Box>
            </HStack>
          );
        })}
      </Stack>
      <Box ref={lastMessageRef} />
    </Box>
  );
};

export default ChatBody;
