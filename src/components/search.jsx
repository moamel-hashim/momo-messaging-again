import { Input, Box, Button } from "@chakra-ui/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }

  render() {
    return (
      <Box position={'relative'}>
        <Input
          className="search-input"
          type="text"
          width={"100%"}
          backgroundColor={"transparent"}
          border={"none"}
          borderBottom={"1px solid white"}
          placeholder="Search for friends"
          outline={"none"}
          color={"whitesmoke"}
        />
        <Button position={"absolute"} backgroundColor={'transparent'} border={"none"} right={'0'} cursor={'pointer'} top={'0'}><FontAwesomeIcon icon={faSearch} color="whitesmoke" /></Button>
      </Box>
    );
  }
}
