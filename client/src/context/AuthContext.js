import React, { useState, useEffect } from 'react'
import axios from 'axios';

const AuthContext = React.createContext();

const AuthContextProvider = (props) => {
    const [loggedIn, setLoggedIn] = useState(undefined);

    async function getLoggedIn() {
        try {
            const loggedInRes = await axios.get("/auth/loggedIn");
            setLoggedIn(loggedInRes.data);
        }
        catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getLoggedIn();
    }, []);

    return (<AuthContext.Provider value={{ loggedIn, getLoggedIn }}>
        {props.children}
    </AuthContext.Provider>)
}

export default AuthContext;

export { AuthContextProvider }