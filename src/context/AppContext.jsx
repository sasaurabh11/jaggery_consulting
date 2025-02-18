import { createContext, useEffect, useState } from "react";

export const AppContext = createContext()

const AppContextProvider = (props) => {
    const [ride, setRide] = useState('land')
    const [drawer, setDrawer] = useState(false)
    
    const value = {
        ride, setRide,
        drawer, setDrawer
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider