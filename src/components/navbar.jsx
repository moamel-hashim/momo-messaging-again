import { Box, Flex, Text, Avatar, Container } from "@chakra-ui/react";
import "@chakra-ui/theme";
import React from "react";
import "../css/App.css";
import Search from "./search";

const colors = {
  darkOlive: "#464F42",
  darkBrown: "#343635",
  white: "#F5F5F5",
};

export default function Nav(props) {
  return (
    <Flex justifyContent={"space-evenly"}>
      <Container
        backgroundColor={colors.darkOlive}
        width={"40%"}
        padding={"1rem"}
        borderBottom={'1px solid lightgrey'}
      >
        <Box>
          <nav>
            <Flex alignItems={"center"} gap={"1rem"}>
              <Box width={"15%"}>
                <Avatar
                  src="https://www.pngkey.com/png/full/73-730477_first-name-profile-image-placeholder-png.png"
                  name="PlaceHolder"
                  size={"sm"}
                  width={"100%"}
                />
              </Box>
              <Text as={"h2"} color={colors.white}>
                momo
              </Text>
            </Flex>
          </nav>
        </Box>
      </Container>
      <Container
        backgroundColor={colors.darkBrown}
        width={"60%"}
        padding={"1rem"}
        borderBottom={'1px solid lightgrey'}
      >
        <Box>
          <nav>
            <Flex alignItems={"center"} gap={"1rem"}>
              <Box width={"10%"}>
                <Avatar
                  src="https://www.pngkey.com/png/full/73-730477_first-name-profile-image-placeholder-png.png"
                  name="PlaceHolder"
                  size={"sm"}
                  width={"100%"}
                />
              </Box>
              <Text as={"h2"} color={colors.white}>
                DreSean
              </Text>
              <Box width={"50%"} textAlign={"center"}>
                <Search />
              </Box>
            </Flex>
          </nav>
        </Box>
      </Container>
    </Flex>
  );
}
