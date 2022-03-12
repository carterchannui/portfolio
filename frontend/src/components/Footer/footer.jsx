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

export default function Footer() {
    return (
        <Flex p={10} bg='gray.700' color='white'>

            <Center w='100%'>
                <Text size='md'> 2022 © Carter Chan-Nui </Text>
            </Center>

        </Flex>
    );
}
