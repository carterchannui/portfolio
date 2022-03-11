import React from 'react';
import { 
    ChakraProvider, 
    Flex, 
    Spacer, 
    Box, 
    Text, 
    IconButton, 
    Heading,
    Button, 
    Menu, 
    MenuList, 
    MenuButton, 
    MenuItem,
    Center,
    Image,
    theme 
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import slobg from './slobg.png';

export default function Home() {
    return (
        <Flex bg='gray.700' color='white'>
            <Center w='100%'>
            <Box p={5}>
                <Heading> Hi, I'm Carter. </Heading>
                <Flex>
                <Heading> I'm a </Heading>
                <Heading ml={2} bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text'> software developer, </Heading>
                </Flex>
                <Heading> located in Washington. </Heading>
            </Box>
            </Center>
            <Box>
                <Image src={ slobg } /> 
            </Box>
        </Flex>
    );
}
