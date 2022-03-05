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
    theme 
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';

export default function Home() {
    return (
        <Flex bg='gray.700' color='white'>
            <Spacer/>
            <Box>
                <Text fontSize='lg'> Aspiring Software Engineer! </Text>
            </Box>
            <Spacer/>
        </Flex>
    );
}
