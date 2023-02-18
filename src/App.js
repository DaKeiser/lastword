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

function App() {
  return (
    <BrowserRouter >
      <Routes >
        <Route path="*" element={< PageNotFound />} />
        <Route path="/" element={< Homepage />} />
        <Route path="/home" element={< Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/coins" element={<TransferCoins />} />
        <Route path="/files" element={<TransferFiles />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;