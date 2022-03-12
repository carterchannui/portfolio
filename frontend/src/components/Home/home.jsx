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
    Container,
    MenuItem,
    HStack,
    Center,
    Image,
    Link,
    theme 
} from '@chakra-ui/react';
import './animate.css';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { Link as ReactLink } from 'react-router-dom';
import slobg from './slobg.png';


export default function Home() {
    return (
        <Flex bg='gray.700' h='100vh' color='white'>
            <Center w='100%'>
                    <Heading>
                        Hi, I'm Carter.<br/> I'm a <Text display='inline' className='occupation' as='span'>software developer</Text>,<br/>located in Washington. 
                    </Heading>
            </Center>
            <Center w='150%' pr={5}>
                <Link href='https://github.com/hack4impact-calpoly/sloBotanicalGarden22' isExternal>
                    <Image className='floating' src={ slobg } />  
                </Link>
            </Center>
        </Flex>
    );
}
