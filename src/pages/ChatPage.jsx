import { Box, Text } from "@chakra-ui/react";
import { AppContainer } from "../components/common";
import Header from "../components/chat/Header";
import ChatBody from "../components/chat/ChatBody";
import ChatFooter from "../components/chat/ChatFooter";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const ChatPage = ({ socket }) => {
  const [messages, setMessages] = useState([]);
  const [userList, setUserList] = useState([]);
  const navigate = useNavigate();
  const lastMessageRef = useRef(null);

  useEffect(() => {
    socket.on("isLogin", (data) => {
      if (!data) {
        navigate("/");
      } else {
        socket.on("getUserList", (data) => {
          setUserList(data);
        });
      }
    });
  }, [socket]);

  useEffect(() => {
    socket.on("messageResponse", (data) => {
      setMessages([...messages, data]);
      console.log(22, data);
    });
  }, [socket, messages]);

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <AppContainer>
      <Header userList={userList} />
      <Box mb={4} />
      <ChatBody messages={messages} lastMessageRef={lastMessageRef} />
      <Box mt={10} />
      <ChatFooter socket={socket} />
    </AppContainer>
  );
};

export default ChatPage;
