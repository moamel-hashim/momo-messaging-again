import { Box, Flex, Text, Avatar, Container, Button } from "@chakra-ui/react";
import "@chakra-ui/theme";
import React from "react";
import "../css/App.css";

const colors = {
  darkOlive: "#464F42",
  darkBrown: "#343635",
  white: "#F5F5F5",
};

export default class Chats extends React.Component {
  render() {
    return (
      <Container
        backgroundColor={colors.darkOlive}
        height={'85vh'}
        width={"40%"}
        padding={"6px"}
        position={"relative"}
        overflow={'scroll'}
        overflowX={'hidden'}
      >
        <Container
          padding={"2rem 0 1rem 1rem"}
          borderBottom={"1px solid lightgrey"}
          className="hover-chats"
        >
          <Box cursor={"pointer"}>
            <Flex alignItems={"center"} gap={"1rem"}>
              <Box width={"15%"}>
                <Avatar
                  src="https://www.pngkey.com/png/full/73-730477_first-name-profile-image-placeholder-png.png"
                  size={"sm"}
                  width={"100%"}
                />
              </Box>
              <Box className="users-name-chats">
                <Text
                  as={"span"}
                  fontSize={"18px"}
                  fontWeight={"500"}
                  color={colors.white}
                >
                  DreSean
                </Text>
                <Text
                  fontSize={"14px"}
                  color={"lightgray"}
                  fontStyle={"italic"}
                >
                  Hello there
                </Text>
              </Box>
            </Flex>
          </Box>
        </Container>
        <Box position={"absolute"} bottom={"2rem"}>
          <Button
            cursor={"pointer"}
            backgroundColor={"transparent"}
            border={"none"}
            color={"white"}
            fontSize={"18px"}
            fontFamily={`'Roboto', sans serif`}
          >
            Logout
          </Button>
        </Box>
      </Container>
    );
  }
}
