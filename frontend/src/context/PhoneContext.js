
import {  createContext, useState, useContext } from 'react';

const PhoneContext = createContext(); 
 export const PhoneProvider= ({children}) =>{
   
    const [Phone,setPhone]=useState(false)

    return ( 
        <PhoneContext.Provider value={{Phone,setPhone}}>
            {children}
        </PhoneContext.Provider>
    )
}
export const useSharedState = () => useContext(PhoneContext);