import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home_Interviewer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Meet from './pages/Meet';
import axios from 'axios';
import { AuthContextProvider } from './context/AuthContext';

axios.defaults.withCredentials = true;

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/meet" element={<Meet />} />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
