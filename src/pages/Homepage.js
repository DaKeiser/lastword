import {
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    useColorMode,
    Link,
} from '@chakra-ui/react';
import Container from '../components/Container'
import ExternalLink from '../components/ExternalLink';
import { secondaryTextColor } from '../styles/darkMode';
import React, { useEffect } from 'react';

export default function Homepage() {
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
                align={'center'}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 16, md: 18, lg: '50px' }}
                direction={{ base: 'column', md: 'row' }}
                maxW={{ base: 80, md: 1000, lg: 1250 }}
                mt={12}
                mb={12}
            >
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
                            Trustless. Open.
                        </Text>
                        <br />
                        <Text as={'span'}
                            bgGradient='linear(to-l, #FF0080, #7928CA)'
                            bgClip='text'
                        >
                            Secure!
                        </Text>
                    </Heading>
                    <Text color={secondaryTextColor[colorMode]} w="90%">
                        <ExternalLink href='https://lastword.vercel.app'>
                            LastWord
                        </ExternalLink> {' '}
                        ensures that your digital assets are protected and distributed according to your wishes. By <strong>eliminating intermediaries</strong>, we provide a <strong>streamlined</strong> and <strong>cost-effective</strong> process. Rest assured that your legacy and assets are protected, and your wishes are carried out <strong>fairly and transparently</strong>.
                    </Text>
                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={{ base: 'column', sm: 'row' }}
                    >
                        <Button
                            rounded={'full'}
                            size={'lg'}
                            fontWeight={'normal'}
                            variant='outline'
                            outlineColor={'gray.500'}
                            px={6}
                        >
                            How It Works
                        </Button>
                        <Button
                            as={Link}
                            rounded={'full'}
                            size={'lg'}
                            fontWeight={'normal'}
                            px={6}
                            bgGradient="linear(to-r, red.400,pink.400)"
                            color={'white'}
                            href={"/"}
                            _hover={{
                                bgGradient: 'linear(to-r, red.600,pink.600)',
                                boxShadow: 'xl',
                                textDecoration: 'none'
                            }}>
                            Get started
                        </Button>
                    </Stack>
                </Stack>
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
                                '/hero.png'
                            }
                        />
                    </Box>
                </Flex>
            </Stack>
        </Container>
    );
}