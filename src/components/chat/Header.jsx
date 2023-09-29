import {
  Box,
  Divider,
  Text,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  HStack,
} from "@chakra-ui/react";
import getCurrentDateTime from "../../utils/getDate";

const Header = ({ userList }) => {
  console.log(userList);
  return (
    <Box>
      <Divider />
      <HStack justify={"space-between"}>
        <Text fontSize={"24px"}>Infli Live chat</Text>
        <Box>
          <Stat>
            <StatLabel>Users</StatLabel>
            <StatNumber>{userList.length}</StatNumber>
            <StatHelpText>{getCurrentDateTime()}</StatHelpText>
          </Stat>
        </Box>
      </HStack>
      <Divider />
    </Box>
  );
};

export default Header;
