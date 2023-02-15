import { Box, Heading } from "@chakra-ui/layout"
import { useColorMode, Link } from "@chakra-ui/react";

const Logo = () => {
    const { colorMode } = useColorMode()
    return (
        <Box p={8} pb={4}>
            <Link href="/">
                <Heading>📜 LastWord</Heading>
            </Link>
        </Box>
    )
};

export default Logo;