import Container from '../components/Container'
import {
    Stack,
    Flex,
    Box,
    Image,
    Heading,
    useColorMode,
    Text,
    Button
} from '@chakra-ui/react'
import { secondaryTextColor } from '../styles/darkMode';
import { useEffect } from 'react';

export default function PageNotFound() {
    const { colorMode } = useColorMode()
    useEffect(() => {
        document.title = "Page Not Found | LastWord";
        const metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        metaDescription.content = 'Your voice beyond life.';
        document.head.appendChild(metaDescription);

    }, [])
    return (
        < Container >
            <Stack
                align={'center'}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 16, md: 18, lg: '50px' }}
                direction={{ base: 'column', md: 'row' }}
                maxW={{ base: 80, md: 1000, lg: 1250 }}
            >
                <Flex
                    flex={1}
                    justify={'center'}
                    align={'center'}
                    position={'relative'}
                    w={'initial'}
                    minW={{ base: 80, md: 400, lg: 500 }}
                    maxW={{ base: 100, md: 1000, lg: 1200 }}
                >
                    <Box
                        position={'relative'}
                        height={'300px'}
                        rounded={'2xl'}
                        boxShadow={'2xl'}
                        width={'full'}
                        overflow={'hidden'}
                    >
                        <Image
                            alt={'Hero Image'}
                            fit={'cover'}
                            align={'center'}
                            w={'100%'}
                            h={'100%'}
                            src={
                                '/404.png'
                            }
                        />
                    </Box>
                </Flex>
                <Stack
                    flex={1}
                    spacing={{ base: 5, md: 7 }}
                    minW={{ md: '580', lg: '580' }}
                >
                    <Heading
                        lineHeight={1.1}
                        fontWeight={600}
                        fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
                    >
                        <Text
                            as={'span'}
                            position={'relative'}
                        >
                            404
                        </Text>
                        <br />
                        <Text as={'span'}
                            bgGradient='linear(to-l, #FF0080, #7928CA)'
                            bgClip='text'
                        >
                            Page Not Found
                        </Text>
                    </Heading>
                    <Text fontSize='xl' color={secondaryTextColor[colorMode]}>
                        Oops looks like we couldn't find the page you are looking for.
                    </Text>
                </Stack>
            </Stack>
        </Container >
    );
}