import React, { createContext, useState } from "react";

export const XContext = createContext();

export function XProvider(props) {
    //const [isDarkMode, toggleX] = useToggleState(false);
    const [state, setState] = useState();
    const updateState = e => setState(e.target.value);
    return (
        <XContext.Provider value={{ state, updateState }}>
            {props.children}
        </XContext.Provider>
    );
}