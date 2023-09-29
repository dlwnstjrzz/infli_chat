import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";
import socketIO from "socket.io-client";
import { Home, ChatPage } from "./pages";

const socket = socketIO.connect("http://localhost:4000");

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home socket={socket} />} />
          <Route path="/chat" element={<ChatPage socket={socket} />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
