import React, { useEffect, useState } from "react";
import {
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Link,
    useColorMode
} from '@chakra-ui/react';

const Login = () => {

    const { colorMode } = useColorMode();

        return (
            <Menu>
                <MenuButton
                    as={Button}
                    display={{ base: 'none', md: 'inline-flex' }}
                    fontSize={'sm'}
                    fontWeight={600}
                    href={'#'}
                >
                    Connect Wallet
                </MenuButton>
            </Menu>
        )
}

export default Login;