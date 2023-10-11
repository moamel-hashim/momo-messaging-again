import { Box, Flex, Text, Avatar, Container, Button } from "@chakra-ui/react";
import "@chakra-ui/theme";
import React from "react";
import "../css/App.css";
import Message from "./message";
import Inputs from "./input";

const colors = {
  darkOlive: "#464F42",
  darkBrown: "#343635",
  white: "#F5F5F5",
};

export default class Messages extends React.Component {
  render() {
    return (
      <>
        <Container backgroundColor={colors.darkBrown} width={'60%'} overflow={'scroll'} overflowX={'hidden'}>
          <Box padding={'10px'} height={'calc(100% - 90px)'}>
            <Message />
            <Message />
            <Message />
          </Box>
          <Inputs />
        </Container>
      </>
    )
  }
}
