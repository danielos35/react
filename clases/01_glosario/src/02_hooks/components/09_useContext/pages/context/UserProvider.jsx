import { useState } from "react";
import { UserContext } from "./UserContext";
const user_data = {
    id: 12,
    name: 'Daniel',
    phone: 12324
}



export const UserProvider = ({ children }) => {
    const [user, setUser] = useState();
    const setUser_context = () => {
        setUser(user_data)
    }

    const clean_context = () => {
        setUser('')
    }
    return (
        // <UserContext.Provider value={{ hola: 'Holamundo', user }}>
        <UserContext.Provider value={{ user, setUser_context, clean_context }}>
            {children}
        </UserContext.Provider>
    )
}
