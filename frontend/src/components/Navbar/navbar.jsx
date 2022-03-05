import React from 'react';
import { ChakraProvider, 
    Flex, 
    Spacer, 
    Box, 
    Link, 
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
import { HamburgerIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { Link as ReactLink } from "react-router-dom";

export default function Navbar() {
    return (
        <Flex bg='gray.700'>
            <Box p='2'>
                <Link as={ReactLink} to='/'> <Heading size='xl' color='white'> Carter Chan-Nui </Heading> </Link>
            </Box>
            <Spacer />
            <Box p='2'>
                <Menu>
                    <MenuButton as={IconButton} aria-label='Options' icon={<HamburgerIcon/>}/>
                    <MenuList>
                        <MenuItem> <Link as={ReactLink} to='/about'> About </Link> </MenuItem>
                        <MenuItem> Projects </MenuItem>
                    </MenuList>
                </Menu>
            </Box>
        </Flex>
    );
}
