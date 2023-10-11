import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Center,
  Box,
  Text,
  ChakraProvider,
  extendTheme,
  Heading,
  Button,
} from "@chakra-ui/react";
import "@chakra-ui/theme";
import React, { ChangeEvent } from "react";
import "../css/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import Background from "../components/background";

const colors = {
  darkOlive: "#5C7559",
  lighterOlive: "#D3E0AD",
  olive: "#9CB78C",
};

const theme = extendTheme({
  fonts: {
    heading: `'Roboto', sans-serif`,
    body: `'Open Sans', sans-serif`,
  },
  colors,
});


export default class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.value)
  }

  render() {
    const { username, email, password } = this.state;
    return (
      <>
        <Background />
        <ChakraProvider theme={theme}>
          <Center
            position={"relative"}
            maxW={"400px"}
            margin={"0 auto"}
            height={"100vh"}
            flexDirection={"column"}
            zIndex={"1"}
          >
            <Box
              padding={"1rem"}
              width={"100%"}
              borderRadius={"20px"}
              background={"rgb(254 254 254 / 50%)"}
              backdropBlur={"10px"}
            >
              <Box textAlign={"center"} marginBottom={"1rem"}>
                <Heading as={"h2"} color={colors.darkOlive}>
                  Momo Message
                </Heading>
              </Box>
              <Box textAlign={"center"}>
                <Text>Register</Text>
              </Box>
              <FormControl variant="floating" onSubmit={this.handleSubmit}>
                <Box position={"relative"}>
                  <Input
                    type="text"
                    border={"none"}
                    borderBottom={`1px solid ${colors.lighterOlive}`}
                    borderRadius={"0"}
                    marginBottom={"1.5rem"}
                    focusBorderColor={`${colors.lighterOlive}`}
                    variant={"flushed"}
                    required
                    value={username}
                    onChange={this.handleUsernameChange}
                    id={'username'}
                  />
                  {username === "" ? (
                    <FormErrorMessage>Username is Required</FormErrorMessage>
                  ) : null}
                  <FormLabel color={colors.lighterOlive} className="floating-label" htmlFor='username'>username</FormLabel>
                </Box>
                <Box position={"relative"}>
                  <Input
                    type="email"
                    border={"none"}
                    borderBottom={`1px solid ${colors.lighterOlive}`}
                    borderRadius={"0"}
                    marginBottom={"1.5rem"}
                    focusBorderColor={`${colors.lighterOlive}`}
                    variant={"flushed"}
                    required
                    value={email}
                    onChange={this.handleEmailChange}
                    id='email'
                  />
                  {email === "" ? (
                    <FormErrorMessage>Email is Required</FormErrorMessage>
                  ) : null}
                  <FormLabel color={colors.lighterOlive} className="floating-label" htmlFor='email'>email</FormLabel>
                </Box>
                <Box position={"relative"}>
                  <Input
                    type="password"
                    border={"none"}
                    borderBottom={`1px solid ${colors.lighterOlive}`}
                    borderRadius={"0"}
                    marginBottom={"1.5rem"}
                    focusBorderColor={`${colors.lighterOlive}`}
                    variant={"flushed"}
                    required
                    value={password}
                    onChange={this.handlePasswordChange}
                    id={'password'}
                  />
                  {password === "" ? (
                    <FormErrorMessage>Password is Required</FormErrorMessage>
                  ) : null}
                  <FormLabel color={colors.lighterOlive} className="floating-label" htmlFor='password'>password</FormLabel>
                </Box>
                <Box position={"relative"} margin={"1rem 0"} className="upload">
                  <Input type="file" style={{ display: "none" }} id="file" />
                  <FormLabel
                    htmlFor="file"
                    fontSize={"2rem"}
                    color={colors.lighterOlive}
                    display={"flex"}
                    alignItems={"center"}
                    gap={"10px"}
                  >
                    <FontAwesomeIcon icon={faImage} />
                    <Text as={"span"} fontSize={"1rem"}>
                      Add an avatar
                    </Text>
                  </FormLabel>
                </Box>
                <Box textAlign={"center"}>
                  <Button
                    margin={"2rem 0"}
                    padding={"1.5rem 5.5rem"}
                    colorScheme={colors.lighterOlive}
                    backgroundColor={colors.darkOlive}
                    color={colors.lighterOlive}
                    type="submit"
                    className="button"
                    letterSpacing={"1px"}
                    textTransform={"capitalize"}
                  >
                    Register
                  </Button>
                </Box>
              </FormControl>
              <Box textAlign={"center"}>
                <Text>
                  You do have an account?{" "}
                  <Text as={"span"} color={colors.darkOlive} cursor={"pointer"}>
                    Login
                  </Text>
                </Text>
              </Box>
            </Box>
          </Center>
        </ChakraProvider>
      </>
    );
  }
}
