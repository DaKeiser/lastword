import React, { useEffect, useState } from "react";
import {
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Link,
    useColorMode,
    Spinner
} from '@chakra-ui/react';
import { Auth, useAuth } from "@arcana/auth-react";
import { redirect } from "react-router-dom";

const onLogin = () => {
    // Route to authenticated page
    redirect("/dashboard");
  }
const Login = () => {

    const { colorMode } = useColorMode();
    const auth = useAuth();
    return (
        <div>
          {auth.loading ? (
            <Spinner />
          ) : auth.isLoggedIn ? (
            <p>auth.user</p>
          ) : (
            <div>
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
            <MenuList>
            <Auth externalWallet={true} theme={"light"} onLogin={onLogin}/>

            </MenuList>
        </Menu>

            </div>
          )}
        </div>
      );


    // return (
    //     <Menu>
    //         <MenuButton
    //             as={Button}
    //             display={{ base: 'none', md: 'inline-flex' }}
    //             fontSize={'sm'}
    //             fontWeight={600}
    //             href={'#'}
    //         >
    //             Connect Wallet
    //         </MenuButton>
    //     </Menu>
    // )
}

export default Login;