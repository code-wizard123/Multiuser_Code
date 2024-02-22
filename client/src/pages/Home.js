import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import HomeInterviewer from '../components/HomeInterviewer'
import HomeInterviewee from '../components/HomeInterviewee'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    const role = Cookies.get("role");

    useEffect(() => {
        if (!role) {
            navigate("/login");
        }
    }, []);

    return (
        <div>
            {role === "interviewer" ? <HomeInterviewer /> : <HomeInterviewee />}
        </div>
    )
}

export default Home