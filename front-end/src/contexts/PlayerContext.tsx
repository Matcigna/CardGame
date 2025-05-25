import { createContext, useContext, useState } from "react";

const playerContext = createContext<ContextProps | null>(null);

type ContextProps = {
    user: null | number,
    setUser: React.Dispatch<React.SetStateAction<null | number>>
}

export const PlayerContextProvider = ({children}:{children:React.ReactNode})=> {
    const [user, setUser]=useState<null | number>(null);
    return <playerContext.Provider value={{user, setUser}}>{children}</playerContext.Provider>
}

const usePlayerContext = () => {
    const playerC = useContext(playerContext);
    if (!playerC) throw new Error ('to use playerContext use PlayerContextProvider')
    return ( playerC );
}
 
export default usePlayerContext;