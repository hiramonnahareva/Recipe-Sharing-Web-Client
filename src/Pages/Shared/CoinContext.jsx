// src/CoinsContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a Context for the coins state
const CoinsContext = createContext();

// Create a provider component
export const CoinsProvider = ({ children }) => {
  const [coins, setCoins] = useState(0); // Initialize coins state

  return (
    <CoinsContext.Provider value={{ coins, setCoins }}>
      {children}
    </CoinsContext.Provider>
  );
};

// Create a custom hook to use the Coins context
export const useCoins = () => {
  return useContext(CoinsContext);
};
