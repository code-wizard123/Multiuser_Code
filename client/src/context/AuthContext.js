import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Cookies from 'js-cookie';

const AuthContext = React.createContext();

const AuthContextProvider = (props) => {
    const [user, setUser] = useState(undefined);
    const [role, setRole] = useState(undefined);
    const [loading, setLoading] = useState(true);

    async function getDetails() {
        try {
            const token = Cookies.get("token");

            if(!token) {
                setLoading(false);
                return;
            }

            const response = await axios.get("/auth/check", {
                headers: { "Authorization": `Bearer ${token}` }
            })

            const data = response.data;

            if (response && response.status === 200) {
                setUser(data.id);
                setRole(data.role);
            }
        }
        catch (err) {
            console.error(err.response.data.message);
            setUser(null);
            setRole(null);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getDetails();
    }, []);

    return (<AuthContext.Provider value={{ user, role, loading }}>
        {props.children}
    </AuthContext.Provider>)
}

export default AuthContext;

export { AuthContextProvider }