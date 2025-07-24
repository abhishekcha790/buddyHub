// ✅ Purpose:
// This context handles the state for whether the user chooses "Phone Signup" or not.
// It allows different components to share and toggle the `Phone` state globally.
//
// 🔁 Flow:
// - `PhoneProvider` wraps your application to provide context.
// - `Phone` boolean determines whether to show the phone number signup UI.
// - `setPhone(true)` is triggered from a component like SocialLoginButtons.
// - `useSharedState()` gives access to `Phone` and `setPhone` from any component.


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