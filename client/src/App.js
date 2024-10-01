import './App.css';
import { Routes, Route } from 'react-router-dom';
import Lobby from './pages/Lobby';
import Login from './pages/Login';
import Meet from './pages/Meet';

function App() {
  return (
    <Routes>
      <Route path="/lobby" element={<Lobby />} />
      <Route path="/login" element={<Login />} />
      <Route path="/meet/:meetId" element={<Meet />} />
    </Routes>
  );
}

export default App;
