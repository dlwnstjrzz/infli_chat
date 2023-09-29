import { Box, Text, Input, Button, Center } from "@chakra-ui/react";
import { useState } from "react";
import { AppContainer } from "../components/common";
import { useColorMode } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const Home = ({ socket }) => {
  const [value, setValue] = useState("");
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleEnter = () => {
    socket.emit("enter", {
      nickname: value,
      socketID: socket.id,
    });
    navigate("/chat");
  };

  return (
    <Center h="100vh" px={4}>
      <Box
        p={4}
        shadow="md"
        borderWidth="1px"
        borderRadius="md"
        bg={colorMode === "light" ? "gray.100" : "gray.700"}
        w={"100%"}
      >
        <Button onClick={toggleColorMode} mb={4}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
        <Text fontSize="xl" mb={4}>
          닉네임: {value}
        </Text>
        <Input
          value={value}
          onChange={handleChange}
          placeholder="원하는 닉네임을 입력하세요."
          size="sm"
          mb={4}
        />
        <Center>
          <Button onClick={handleEnter} colorScheme="teal">
            입장하기
          </Button>
        </Center>
      </Box>
    </Center>
  );
};
export default Home;
