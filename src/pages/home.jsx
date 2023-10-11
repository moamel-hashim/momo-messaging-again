import { Button, Text, Box, Container, Flex, Avatar } from "@chakra-ui/react";
import "@chakra-ui/theme";
import React from "react";
import Nav from "../components/navbar";
import Chats from "../components/chats";
import Messages from "../components/messages";

export default function Home() {
  return (
    <>
      <Nav />
      <Flex>
        <Chats />
        <Messages />
      </Flex>
    </>
  )
}
