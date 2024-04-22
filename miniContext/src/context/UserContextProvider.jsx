import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user, setUser }}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;

// children is one type of div like pass as it is to forward
