import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";
import socketIO from "socket.io-client";
import { Home, ChatPage } from "./pages";

const socket = socketIO.connect("https://port-0-infli-chat-server-12fhqa2bln5ichzo.sel5.cloudtype.app/");

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
