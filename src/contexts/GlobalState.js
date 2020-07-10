import React, {createContext, useReducer} from "react";
import AppReducer from './AppReducer'

//initial state
const initialState = {
    items: [
        {id: 1, todo: "Study"},
        {id: 2, todo: "Bath"},
        {id: 3, todo: "Read"},
        {id: 4, todo: "Eat"}
    ]
}

//context 
export const GlobalContext = createContext(initialState);

//Provider Component 
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return(
        <GlobalContext.Provider value={
            {
                items: state.items
            }
        }>
        {children}
        </GlobalContext.Provider>
    )
}