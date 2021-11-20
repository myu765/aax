import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Home from "./myPage/Home";

class App extends Component {
  render() {
    return (
      <Box sx={{mx:"auto", maxWidth:"800px", minWidth:"600px"}}>
        <Home />
      </Box>
    )
  }
}
export default App;