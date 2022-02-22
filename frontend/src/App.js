import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Navbar from './components/Navbar/navbar';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar/>
    </ChakraProvider>
  );
}

export default App;
