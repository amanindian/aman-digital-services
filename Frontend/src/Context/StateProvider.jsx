import React, { createContext, useState } from "react";

export const StateContext = createContext();

export default function StateProvider({ children }) {

    const [ProductQuickView, setProductQuickView] = useState({
        condition: false,
        targetId: 1
    });
    const [isEnquirePopup, setIsEnquirePopup] = useState(false);





    return (
        <StateContext.Provider value={{ ProductQuickView, setProductQuickView, isEnquirePopup, setIsEnquirePopup }}>
            {children}
        </StateContext.Provider>
    )
}