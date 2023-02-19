import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import React from 'react';
import Homepage from "./pages/Homepage"
import PageNotFound from "./pages/PageNotFound";
import Dashboard from "./pages/Dashboard";
import TransferCoins from "./pages/TransferCoins";
import TransferFiles from "./pages/TransferFiles";
import Profile from "./pages/Profile";
import { Auth, useAuth } from "@arcana/auth-react";
function App() {
    const auth = useAuth();
  return (
    <BrowserRouter >
      <Routes >

        <Route path="*" element={< PageNotFound />} />
        <Route path="/" element={< Homepage />} />
        <Route path="/home" element={< Homepage />} />
        {auth.isLoggedIn ? 
        <>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/coins" element={<TransferCoins />} />
        <Route path="/files" element={<TransferFiles />} />
        <Route path="/profile" element={<Profile />} />
        </>
        :
        <>
                <Route path="*" element={< PageNotFound />} />

        </>
        }
      </Routes>
    </BrowserRouter>
  );
}

export default App;