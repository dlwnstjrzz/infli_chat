import { Box } from "@chakra-ui/react";

const AppContainer = ({ children }) => {
  return (
    <Box p={4} maxW={"768px"} m={"auto"}>
      {children}
    </Box>
  );
};

export default AppContainer;
