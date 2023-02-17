import {
    Stack,
    HStack,
    VStack,
    Box,
    Heading,
    Button,
    useColorMode,
    Text
} from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter,SimpleGrid } from '@chakra-ui/react'
import { FaFile, FaCoins } from 'react-icons/fa';
import Container from '../components/Container'
import React, { useEffect } from 'react';
import CustomTable from '../components/Table';
export default function Dashboard() {
    useEffect(() => {
        document.title = "Home | LastWord";
        const metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        metaDescription.content = 'Your voice beyond life.';
        document.head.appendChild(metaDescription);

    }, []);
    const columns = React.useMemo(
        () => [
              {
                Header: "First Name",
                accessor: "firstName"
              },
              {
                Header: "Last Name",
                accessor: "lastName"
              },
              {
                Header: "Age",
                accessor: "age"
              },
              {
                Header: "Visits",
                accessor: "visits"
              },
              {
                Header: "Status",
                accessor: "status"
              },
              {
                Header: "Profile Progress",
                accessor: "progress"
              }
            ]
      );
      const data = [{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"},{firstName: "donkey",
      lastName: "driving",
      age: 9,
      visits: 6,
      progress: 2,
      status: "relationship"}]

    const { colorMode } = useColorMode()

    return (
        <Container>
            <SimpleGrid py={{ base: 16, md: 18, lg: '50px' }} spacing={2} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                <Card>
                    <CardHeader>
                    <Heading size='md' align="center"> Total Coins</Heading>
                    </CardHeader>
                    <CardBody >
                    <Text>View a summary of all your customers over the last month.</Text>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                    <Heading size='md' align="center"> Total Files</Heading>
                    </CardHeader>
                    <CardBody>
                    <Text>View a summary of all your customers over the last month.</Text>
                    </CardBody>
                </Card>
            </SimpleGrid>
            <Stack
                spacing={{ base: 8, md: 10 }}
                // py={{ base: 16, md: 18, lg: '50px' }}
                direction={{ base: 'column', md: 'row' }}
                
                mb={12}
            >
                <HStack
                    spacing={{ base: 10, md: 20 }}
                    minW={{ md: '580', lg: '580' }}
                >

                    <Box w="30vw" h="40vh">
                    <CustomTable columns={columns} data={data} />
                    </Box>
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

