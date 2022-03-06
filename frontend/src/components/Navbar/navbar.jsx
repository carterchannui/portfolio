import React from 'react';
import { ChakraProvider, 
    Flex, 
    Spacer, 
    Box, 
    Link, 
    Text, 
    Icon,
    IconButton, 
    Heading, 
    Button, 
    Menu,
    MenuList, 
    MenuButton, 
    MenuItem, 
    HStack,
    theme 
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { Link as ReactLink } from 'react-router-dom';
import { GoMarkGithub } from 'react-icons/go';
import { FaLinkedinIn, FaCode } from 'react-icons/fa'

export default function Navbar() {
    return (
        <Flex bg='gray.700' pl='10' pr='10'>
            <HStack>
                <Box p='2'>
                    <Link as={ReactLink} to='/'> <Heading size='xl' color='white'> Carter Chan-Nui </Heading> </Link>
                </Box>
                <Box p='2'>
                    <Link as={ReactLink} to='/resume'> <Text size='md' color='white'> Resume </Text> </Link>
                </Box>
            </HStack>
            <Spacer />
            <HStack>
                <Link href='https://www.github.com/carterchannui/' isExternal> <IconButton fontSize='26px' icon={<GoMarkGithub/>} /> </Link>
                <Link href='https://www.linkedin.com/in/carterchannui/' isExternal> <IconButton fontSize='26px' icon={<FaLinkedinIn/>} /> </Link>
                <Link href='https://github.com/carterchannui/portfolio/' isExternal> <IconButton fontSize='26px' icon={<FaCode/>} /> </Link>
            </HStack>

        </Flex>
    );
}
