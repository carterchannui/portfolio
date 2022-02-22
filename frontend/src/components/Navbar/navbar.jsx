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
            <Box p={2}>
                <Heading fontSize='6xl'>Carter Chan-Nui
                </Heading>
            </Box>
            <Spacer/>
            <Box>
                <Button size='lg'>
                    About
                </Button>
            </Box>
        </Flex>
    );
}
