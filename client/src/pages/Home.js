import React, { useEffect } from 'react'
import HomeInterviewer from '../components/HomeInterviewer'
import HomeInterviewee from '../components/HomeInterviewee'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const Home = () => {
    const navigate = useNavigate();
    const { user, role, loading } = React.useContext(AuthContext);

    useEffect(() => {
        if (!loading && (!user || !role)) {
            console.log("User not logged in");
            navigate("/login");
        }
    }, [role, user, navigate, loading]);

    if(loading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            Hello user. You are logged in as {role}
        </div>
    )
}

export default Home