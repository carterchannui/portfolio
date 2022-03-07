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
    VStack,
    theme
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import ResumePDF from './Chan-NuiResume.pdf';

export default function Resume() {
    return (
        <Flex bg='#1A202C'>
            <VStack>
                <Heading p={2}> Resume </Heading>
                    <iframe
                        src={ResumePDF}
                        width='640'
                        height='480'
                    />
            </VStack>
        </Flex>

    );
}
