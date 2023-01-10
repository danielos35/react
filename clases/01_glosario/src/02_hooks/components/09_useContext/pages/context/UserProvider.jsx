import { UserContext } from "./UserContext";
const user = {
    id: 12,
    name: 'Daniel',
    phone: 12324
}

export const UserProvider = ({ children }) => {
    return (
        <UserContext.Provider value={{ hola: 'Holamundo', user }}>
            {children}
        </UserContext.Provider>
    )
}
