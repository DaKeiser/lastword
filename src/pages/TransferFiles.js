import {
    Stack,
    HStack,
    VStack,
    Flex,
    Box,
    Heading,
    Button,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    NumberInput,
    NumberDecrementStepper,
    NumberInputField,
    NumberIncrementStepper,
    NumberInputStepper,
    Radio,
    RadioGroup,
    useColorModeValue,
    Center,
    Icon,
    IconButton,
    Text,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
} from '@chakra-ui/react';

import Container from '../components/Container'
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { FaCloudUploadAlt, FaFile } from 'react-icons/fa';
import React, { useState, useEffect, useRef } from 'react';

import { Step, Steps, useSteps } from "chakra-ui-steps"

const steps = [{ label: "Upload" }, { label: "Add Recipients" }, { label: "Verify" }]

export default function TransferFiles() {
    useEffect(() => {
        document.title = "Transfer Files | LastWord";
        const metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        metaDescription.content = 'Your voice beyond life.';
        document.head.appendChild(metaDescription);

    }, []);
    const { nextStep, prevStep, reset, activeStep } = useSteps({
        initialStep: 0,
    })

    const [recipients, setRecipients] = useState([
        { walletAddress: "", emailAddress: "", percent: "" }
    ]);

    const handleRecipientChange = (index, field, value) => {
        const newRecipients = [...recipients];
        newRecipients[index][field] = value;
        setRecipients(newRecipients);
    };

    const handleAddRecipient = () => {
        setRecipients([...recipients, { walletAddress: "", emailAddress: "", percent: "" }]);
    };

    const handleRemoveRecipient = (index) => {
        const newRecipients = [...recipients];
        newRecipients.splice(index, 1);
        setRecipients(newRecipients);
    };

    const [isDragging, setIsDragging] = useState(false);
    const [droppedFiles, setDroppedFiles] = useState([]);
    const inputRef = useRef(null);
    const bgColor = useColorModeValue("white", "gray.700");

    const handleDragEnter = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const files = e.dataTransfer.files;
        setDroppedFiles([...droppedFiles, ...Array.from(files)]);
    };

    const handleClick = () => {
        inputRef.current.click();
    };

    const handleInputChange = (e) => {
        const files = e.target.files;
        setDroppedFiles([...droppedFiles, ...Array.from(files)]);
    };

    return (
        <Container>
            <Stack
                spacing={{ base: 8, md: 10 }}
                py={{ base: 16, md: 18, lg: '50px' }}
                direction={{ base: 'column', md: 'row' }}
                mt={12}
                mb={12}
            >
                <Stack w="50vw">
                    <Stack width="100%" spacing="5%">
                        <Steps activeStep={activeStep}>
                            {steps.map(({ label }, index) => (
                                <Step label={label} key={label}>
                                    {index === 1 ?
                                        (
                                            <VStack spacing="12">
                                                <VStack>
                                                    <HStack>
                                                        <FormControl w='22vw' ml='-2vw'><FormLabel><strong>Wallet Address</strong></FormLabel></FormControl>
                                                        <FormControl w='15vw'><FormLabel><strong>Email Address</strong></FormLabel></FormControl>
                                                    </HStack>
                                                    {recipients.map((recipient, index) => (
                                                        <VStack key={index} spacing="4">
                                                            <HStack spacing="4">
                                                                <FormControl>
                                                                    <Input
                                                                        value={recipient.walletAddress}
                                                                        onChange={(event) => handleRecipientChange(index, "walletAddress", event.target.value)}
                                                                        placeholder="0x1234..."
                                                                        w='22vw'
                                                                    />
                                                                </FormControl>
                                                                <FormControl>
                                                                    <Input
                                                                        value={recipient.emailAddress}
                                                                        onChange={(event) => handleRecipientChange(index, "emailAddress", event.target.value)}
                                                                        placeholder="example@example.com"
                                                                        w='20vw'
                                                                    />
                                                                </FormControl>
                                                                <IconButton icon={<DeleteIcon />} variant="ghost" onClick={() => handleRemoveRecipient(index)} />
                                                            </HStack>
                                                        </VStack>
                                                    ))}
                                                </VStack>
                                                <Button leftIcon={<AddIcon />} onClick={handleAddRecipient}>Add recipient</Button>
                                            </VStack >
                                        ) : index == 0 ?
                                            (
                                                <Box
                                                    p={8}
                                                    bg={isDragging ? "gray.200" : bgColor}
                                                    border="2px dashed"
                                                    borderColor={isDragging ? "gray.400" : "gray.200"}
                                                    borderRadius="lg"
                                                    onDragEnter={handleDragEnter}
                                                    onDragOver={handleDragEnter}
                                                    onDragLeave={handleDragLeave}
                                                    onDrop={handleDrop}
                                                    onClick={handleClick}
                                                    cursor="pointer"
                                                >
                                                    <input
                                                        type="file"
                                                        ref={inputRef}
                                                        style={{ display: "none" }}
                                                        onChange={handleInputChange}
                                                        multiple
                                                    />
                                                    {droppedFiles.length > 0 ? (
                                                        <HStack spacing={4}>
                                                            {droppedFiles.map((file, index) => (
                                                                <Box key={index} textAlign="center">
                                                                    <Icon as={FaFile} w={8} h={8} mb={2} />
                                                                    <Text fontSize="sm" fontWeight="medium">
                                                                        {file.name}
                                                                    </Text>
                                                                </Box>
                                                            ))}
                                                        </HStack>
                                                    ) : (
                                                        <Center flexDirection="column">
                                                            <Icon as={FaCloudUploadAlt} w={8} h={8} mb={4} />
                                                            <Text fontWeight="medium">
                                                                {isDragging
                                                                    ? "Drop files here"
                                                                    : "Drag and drop files here or click to upload"}
                                                            </Text>
                                                        </Center>
                                                    )}
                                                </Box>
                                            ) :
                                            (
                                                <Table>
                                                    <Thead>
                                                        <Tr>
                                                            <Th>Wallet Address</Th>
                                                            <Th>Email Address</Th>
                                                        </Tr>
                                                    </Thead>
                                                    <Tbody>
                                                        {recipients.map((recipient, index) => (
                                                            <Tr key={index}>
                                                                <Td>{recipient.walletAddress}</Td>
                                                                <Td>{recipient.emailAddress}</Td>
                                                            </Tr>
                                                        ))}
                                                    </Tbody>
                                                </Table>
                                            )

                                    }
                                </Step>
                            ))}
                        </Steps>
                        {activeStep === steps.length ? (
                            <Flex px={4} py={4} width="100%" flexDirection="column">
                                <Heading fontSize="xl" textAlign="center">
                                    Woohoo! All steps completed!
                                </Heading>
                                <Button mx="auto" mt={6} size="sm" onClick={reset}>
                                    Reset
                                </Button>
                            </Flex>
                        ) : (
                            <Flex width="100%" justify="flex-end">
                                <Button
                                    isDisabled={activeStep === 0}
                                    mr={4}
                                    onClick={prevStep}
                                    size="sm"
                                    variant="ghost"
                                >
                                    Prev
                                </Button>
                                <Button size="sm" onClick={nextStep}>
                                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                                </Button>
                            </Flex>
                        )}
                    </Stack>
                </Stack>
            </Stack>
        </Container>
    )
}