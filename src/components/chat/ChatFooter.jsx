import React, { useState } from "react";
import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Box,
} from "@chakra-ui/react";

const ChatFooter = ({ socket }) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    console.log(23, socket);
    if (message.trim()) {
      socket.emit("message", {
        text: message,
        name: socket.name,
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
        color: socket.color,
      });
    }
    setMessage("");
  };
  return (
    <Box position={"fixed"} zIndex={2} bottom={5} left={0} w={"100%"} px={4}>
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          type={"text"}
          placeholder="내용을 입력하세요."
          borderRadius={"16px"}
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleSendMessage}>
            send
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default ChatFooter;
