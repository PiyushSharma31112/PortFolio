import React, { createContext, useContext, useState } from 'react'

// Create a context for the popup

const popUpContext = createContext();

// create a provider component   

export const PopUpProvider = ({ children }) => {
    const [close, setClose] = useState(true)

    //  Function to toggle the close state

    const toggleClose = () => {
      setClose(prevClose => !prevClose);
    };

    return (
      <popUpContext.Provider value={{ close, toggleClose }}>
         {children}
      </popUpContext.Provider>
    );
};

// Custom hook to use the PopUpContext

export const usePopup = () => {
    return useContext(popUpContext);
}
