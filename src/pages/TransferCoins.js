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
    IconButton,
    useColorMode,
    Text,
} from '@chakra-ui/react';

import Container from '../components/Container'
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import React, { useState, useEffect } from 'react';

import { Step, Steps, useSteps } from "chakra-ui-steps"

const steps = [{ label: "Add Recipients" }, { label: "Verify" }]

function RecipientsForm() {
    const [pensionOption, setPensionOption] = useState("once");
    const [recipients, setRecipients] = useState([
        { walletAddress: "", emailAddress: "", percent: "" }
    ]);

    const handlePensionOptionChange = (value) => {
        setPensionOption(value);
    };

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

    const handlePercentChange = (index, value) => {
        const updatedRecipients = [...recipients];
        const recipientToUpdate = { ...updatedRecipients[index], percentage: value };
        updatedRecipients[index] = recipientToUpdate;
        setRecipients(updatedRecipients);
    };

    return (
        <VStack spacing="12">
            <FormControl as="fieldset">
                <FormLabel as="legend"><strong>Payment option</strong></FormLabel>
                <RadioGroup defaultValue={pensionOption} onChange={handlePensionOptionChange}>
                    <HStack spacing="6">
                        <Radio value="once">Pay at once</Radio>
                        <Radio value="pension">Pay like a pension</Radio>
                    </HStack>
                </RadioGroup>
            </FormControl>


            <VStack>
                <HStack>
                    <FormControl w='22vw' ml='-2vw'><FormLabel>Wallet Address</FormLabel></FormControl>
                    <FormControl w='15vw'><FormLabel>Email Address</FormLabel></FormControl>
                    <FormControl w='5vw'><FormLabel>% Share</FormLabel></FormControl>
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
                                    w='15vw'
                                />
                            </FormControl>
                            <FormControl>
                                <InputGroup w='5vw'>
                                    <NumberInput value={recipient.percentage} max={100 / recipients.length} min={0} onChange={(valueString) => handlePercentChange(index, valueString)}>
                                        <NumberInputField />
                                        <NumberInputStepper>
                                            <NumberIncrementStepper />
                                            <NumberDecrementStepper />
                                        </NumberInputStepper>
                                    </NumberInput>
                                </InputGroup>
                            </FormControl>
                            <IconButton icon={<DeleteIcon />} variant="ghost" onClick={() => handleRemoveRecipient(index)} />
                        </HStack>
                    </VStack>
                ))}
            </VStack>
            <Button leftIcon={<AddIcon />} onClick={handleAddRecipient}>Add recipient</Button>
        </VStack >
    );
}

function Content({ index }) {
    if (index === 0) {
        return <RecipientsForm />;
    } else if (index === 1) {
        return <Box w="200px" h="200px" bg="red" />;
    } else {
        return null;
    }
}

export default function TransferCoins() {
    useEffect(() => {
        document.title = "Transfer Coins | LastWord";
        const metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        metaDescription.content = 'Your voice beyond life.';
        document.head.appendChild(metaDescription);

    }, []);
    const { nextStep, prevStep, reset, activeStep } = useSteps({
        initialStep: 0,
    })
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
                <Stack w="50vw">
                    <Stack width="100%" spacing="5%">
                        <Steps activeStep={activeStep}>
                            {steps.map(({ label }, index) => (
                                <Step label={label} key={label}>
                                    <Content index={index} />
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