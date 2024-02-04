import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home_Interviewer';
import Home_B from './pages/H_Interviewee'
import Login from './pages/Login';
import Login_B from './pages/Login_B';
import Register from './pages/Register';
import Signup from './pages/Signup';
import Signup_B from './pages/Signup_B';
import M_interviewer from './pages/M_interviewer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Home_B" element={<Home_B />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login_B" element={<Login_B />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signup_B" element={<Signup_B />} />
        <Route path="/M_interviewer" element={<M_interviewer />} />
      </Routes>
    </Router>
  );
}

export default App;
