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
import { useNavigate } from "react-router-dom";


const Login = () => {

    const { colorMode } = useColorMode();
    const auth = useAuth();
    const navigate = useNavigate();
    const onLogin = () => {
        // Route to authenticated page
        console.log("rrrrrrrrwwrrrrrrrrrr")    
        navigate("/dashboard");
      }
    useEffect(() => {
      console.log("!!!!!!!!!!!!!!!!!!",auth);
    
    }, [auth])
    const truncateAddress = (address) => {
        return address.length>10 ? address.slice(0, 6) + "..." + address.slice(-4): address;
    };
    
    return (
        <div>
          {auth.loading ? (
            <Spinner />
          ) : auth.isLoggedIn ? (
            <p>{truncateAddress(auth.user.address)}</p>
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