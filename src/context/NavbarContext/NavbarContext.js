import { createContext, useState } from "react"

export const NavbarContext = createContext();

export const NavbarProvider = ( { children } ) => {
 
    const [isOpen, setOpen] = useState(false)

    const handleClickOpen = () => {
        if( isOpen === false ){
            setOpen(true)
        } else {
            setOpen(false)
        }

        console.log(isOpen)

    }


    return(
        
        <NavbarContext.Provider value={{
            isOpen,
            setOpen, 
            handleClickOpen
        }}>
        {children}
        </NavbarContext.Provider>
    )
}   