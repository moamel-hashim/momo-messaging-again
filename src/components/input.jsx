import {
  Box,
  Flex,
  Text,
  Container,
  Button,
  Input,
  FormLabel
} from "@chakra-ui/react";
import "@chakra-ui/theme";
import React from "react";
import "../css/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";

const colors = {
  lightGreen: "#9CB78C",
  darkGreen: "#54672D",
};

export default class Inputs extends React.Component {
  render() {
    return (
      <Container backgroundColor={"white"} height={"80px"} padding={"10px"}>
        <Flex alignItems={'baseline'}>
          <Box width={'100%'}>
            <Input
              border={"none"}
              placeholder="Message DreSean..."
              width={'100%'}
              fontSize={"18px"}
              fontWeight={"500"}
              outline={'none'}
            />
          </Box>
          <Box width={'3pc'}>
            <FormLabel htmlFor="file">
              <FontAwesomeIcon icon={faPaperclip} width={'100%'} color={'lightgrey'} fontSize={'20px'} cursor={'pointer'} />
            </FormLabel>
            <Input type="file" display={'none'} id="file" />

          </Box>
          <Box width={'3pc'}>
            <FormLabel htmlFor="image-upload">
              <FontAwesomeIcon icon={faImage} width={'100%'} fontSize={'20px'} color="lightgrey" cursor={'pointer'} />
            </FormLabel>
            <Input type="file" display={'none'} id="image-upload" />
          </Box>
          <Box>
            <Button padding={'0.8rem 1.5rem 0.8rem 1.5rem'} fontSize={'14px'} letterSpacing={'1px'} backgroundColor={colors.darkGreen} color={'whitesmoke'} border={'none'} borderRadius={'5px'} fontFamily={`'Open Sans', sans serif`} cursor={'pointer'}>Send</Button>
          </Box>
        </Flex>
      </Container>
    );
  }
}
