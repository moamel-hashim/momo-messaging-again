import { Box, Flex, Text, Avatar, Container, Button } from "@chakra-ui/react";
import "@chakra-ui/theme";
import React from "react";
import "../css/App.css";


export default class Message extends React.Component {
  render() {
    return (
      <Container marginBottom={'2rem'}>
        <Flex gap={'10px'}>
          <Box>
            <Box width={'40px'}>
              <Avatar src="https://www.pngkey.com/png/full/73-730477_first-name-profile-image-placeholder-png.png" />
            </Box>
            <Text as={'span'} color={'gray'} fontWeight={'300'} fontSize={'14px'}>just now</Text>
          </Box>
          <Box maxW={'80%'} gap={'10px'}>
            <Text padding={'10px'} background={'white'} borderRadius={'0 10px 10px 10px'}>Helllo</Text>
          </Box>
        </Flex>
      </Container>
    )
  }
}
