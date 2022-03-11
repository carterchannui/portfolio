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
    AspectRatio,
    Center,
    Image,
    VStack,
    theme
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import ResumePDF from './Chan-NuiResume.pdf';

export default function Resume() {
    return (
        <Flex w='100%' h='100vh' bg='gray.700'>
            <Box align='center' w='100%'>
                <Heading color='white' p={5}> Resume </Heading>
                <Box>
                    <iframe width='600px' height='650px' src={ ResumePDF } />
                </Box>
            </Box>
        </Flex>

    );
}
