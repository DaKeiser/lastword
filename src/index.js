import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import {
  ColorModeScript,
  ColorModeProvider,
  ChakraProvider,
  useColorMode
} from '@chakra-ui/react';
import customTheme from './styles/theme'
import { Global, css } from '@emotion/react'
// import WebFont from 'webfontloader';
import { AuthProvider } from "@arcana/auth";
import { ProvideAuth } from "@arcana/auth-react";
// Might want to use Josephin Sans
const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode()

  return (
    <>
      <Global
        styles={css`
          ::selection {
            background-color: #90CDF4;
            color: #fefefe;
          }
          ::-moz-selection {
            background: #ffb7b7;
            color: #fefefe;
          }
          html {
            min-width: 356px;
            scroll-behavior: smooth;
          }
          #root {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === 'light' ? 'white' : '#171717'};
          }
        `}
      />
      {children}
    </>
  )
}
const provider = new AuthProvider("37ba389e2ee14ca3b5c8284efd77161a44c0946f") // required

ReactDOM.render(
  <StrictMode>
    <ChakraProvider resetCSS theme={customTheme}>
      <ColorModeProvider
        options={{
          initialColorMode: "light",
          useSystemColorMode: false,
        }}
      >
        <ColorModeScript />
        <GlobalStyle>
        <ProvideAuth provider={provider}>

          <App />
          </ProvideAuth>

        </GlobalStyle>
      </ColorModeProvider>
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();