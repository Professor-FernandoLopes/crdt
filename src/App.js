import React from "react";
//import {useEffect } from "react"
import "./App.css";
//import { ethers } from "ethers";
import NarBar from "./NavBar/NavBar";
import CoinSwapper from "./CoinSwapper/CoinSwapper";
import { Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import Liquidity from "./Liquidity/Liquidity";
import ConnectWalletPage from "./Components/connectWalletPage";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { Connect } from './helpers';
const theme = createTheme({
  palette: {
    primary: {
      main: "#ff0000",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#9e9e9e",
      contrastText: "#ffffff",
    },
  },
});



function App() {
  
  try {
    
    <Connect/>
    
    return (
      <div className="App">
        <SnackbarProvider maxSnack={3}>
          <ThemeProvider theme={theme}>
            <NarBar />
            <Route
              exact
              path="/crdt-swap/"
              component={CoinSwapper}
            />
            <Route
              exact
              path="/crdt-liquidity/"
              component={Liquidity}
            />
          </ThemeProvider>
        </SnackbarProvider>
      </div>
    );
  } catch (err) {
    return (
      <div className="App">
        <SnackbarProvider maxSnack={3}>
          <ThemeProvider theme={theme}>
            <ConnectWalletPage />
          </ThemeProvider>
        </SnackbarProvider>
      </div>
    );
  }
}

export default App;
