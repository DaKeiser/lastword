import React from "react";
import Container from "../components/Container";
import { useEffect,useState } from "react";
import { Textarea,Stack,Select, HStack,Text,Box } from "@chakra-ui/react";
export default function Profile (){
    const [ethAddr,setEthAddr] = useState()
    useEffect(() => {
      setEthAddr("ibafda")
    }, [])
    
    return (
        <Container>
             <Stack
                spacing={{ base: 8, md: 10 }}
                // py={{ base: 16, md: 18, lg: '50px' }}
                direction={{ base: 'row', md: 'column' }}
                w="50vw"
                mb={12}
            >
                <Box bgColor={"#2222"} rounded="lg">
                <Text fontSize='2xl'>
                Eth Address: {ethAddr}  </Text>
 
                </Box>
            {/* <Textarea variant='filled' resize = "None"size='sm' isDisabled placeholder={ethAddr} /> */}
          <Box>
            <HStack>
            <Text fontSize='2xl'>
                Notification Frequency
  </Text>
 

            <Select variant='filled' maxWidth="200px"placeholder='Select option'>
                    <option value='option1'>2 Weeks</option>
                    <option value='option2'>1 Month</option>
                    <option value='option3'>2 Months</option>
                </Select>
             
            </HStack>

          </Box>

            </Stack>
        </Container>
    );
}