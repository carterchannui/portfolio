import React from 'react';
import { ChakraProvider, Flex, Spacer, Box, Text, Link, IconButton, Heading, Button, Menu, MenuList, MenuButton, MenuItem, theme } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons'
import { ColorModeSwitcher } from '../../ColorModeSwitcher';

export default function Navbar() {
    return (
        //<Flex bg='gray.700' color='white'>
        //    <Box p='2' bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text'>
        //        <Heading>First Last</Heading>
        //    </Box>
        //    <Spacer/>
        //    <Box>
        //        <Button colorScheme='teal' mr='4'>Projects</Button>
        //        <Button colorScheme='teal'>About</Button>
        //    </Box>
        //</Flex>
        
        <Flex bg='gray.700'>
            <Box p='2'>
                <Heading size='xl' color='white' >Carter Chan-Nui</Heading>
            </Box>
            <Spacer />
            <Box p='2'>
                <Menu>
                    <MenuButton as={IconButton} aria-label='Options' icon={<HamburgerIcon/>}/>
                    <MenuList>
                        <MenuItem> About </MenuItem>
                        <MenuItem> Projects </MenuItem>
                    </MenuList>
                </Menu>
            </Box>
        </Flex>
    );
}
