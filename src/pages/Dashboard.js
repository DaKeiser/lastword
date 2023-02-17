import {
    Stack,
    HStack,
    VStack,
    Box,
    Heading,
    Button,
    useColorMode,
} from '@chakra-ui/react';
import { FaFile, FaCoins } from 'react-icons/fa';
import Container from '../components/Container'
import React, { useEffect } from 'react';

export default function Dashboard() {
    useEffect(() => {
        document.title = "Home | LastWord";
        const metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        metaDescription.content = 'Your voice beyond life.';
        document.head.appendChild(metaDescription);

    }, []);
    const { colorMode } = useColorMode()

    return (
        <Container>
            <Stack
                spacing={{ base: 8, md: 10 }}
                py={{ base: 16, md: 18, lg: '50px' }}
                direction={{ base: 'column', md: 'row' }}
                mt={12}
                mb={12}
            >
                <HStack
                    spacing={{ base: 10, md: 20 }}
                    minW={{ md: '580', lg: '580' }}
                >
                    <Box w="100%" h="100%" bg={"red"}></Box>
                    <Stack w="50vw">
                        <VStack spacing={"10%"}>
                            <Heading>Create a new switch</Heading>
                            <VStack spacing={"5%"}>
                                <Button leftIcon={<FaFile />} variant='solid' w="20vw" h='7vh'>
                                    Transfer Files
                                </Button>
                                <Button leftIcon={<FaCoins />} variant='solid' w="20vw" h='7vh'>
                                    Transfer Coins
                                </Button>
                            </VStack>
                        </VStack>
                    </Stack>
                </HStack>
            </Stack>


        </Container>
    )
}

