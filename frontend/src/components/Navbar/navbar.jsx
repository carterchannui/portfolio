import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  IconButton,
  Heading,
  Button,
  theme,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons'
import { Flex, Spacer } from '@chakra-ui/react'
import { ColorModeSwitcher } from '../../ColorModeSwitcher';

export default function Navbar() {
    return (
        <Flex bg='gray.700' color='white'>
            <Box p='2' bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text'>
                <Heading>Carter Chan-Nui</Heading>
            </Box>
            <Spacer/>
            <Box>
                <Button colorScheme='teal' mr='4'>Projects</Button>
                <Button colorScheme='teal'>About</Button>
            </Box>
        </Flex>
    );
}
