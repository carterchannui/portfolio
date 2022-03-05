import React from 'react';
import { 
    ChakraProvider, 
    theme 
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Navbar from './components/Navbar/navbar';
import Home from './components/Home/home';
import About from './components/About/about';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
    return (
        <ChakraProvider theme={theme}>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Router>
        </ChakraProvider>
  );
}

export default App;
