import { createContext, useContext, useState } from "react";
import { cardValue } from "../functions";

const arrayCardContext = createContext<ContextProps | null>(null);

type ContextProps = {
    arrayCard: number[],
    setArrayCard: React.Dispatch<React.SetStateAction<number[]>>
}

export const ArrayCardContextProvider = ({children}:{children:React.ReactNode})=> {
    const [arrayCard, setArrayCard]=useState(Array.from({length:10}).map(()=>cardValue()))
    
    return <arrayCardContext.Provider value={{arrayCard, setArrayCard}}>{children}</arrayCardContext.Provider>
}

const useArrayCardContext = () => {
    const arrayCardC = useContext(arrayCardContext);
    if (!arrayCardC) throw new Error ('To use arrayCardContext use ArrayCardContextProvider.')
    return ( arrayCardC );
}
 
export default useArrayCardContext;