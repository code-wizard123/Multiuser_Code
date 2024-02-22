import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { CookiesProvider } from 'react-cookie';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <CookiesProvider defaultSetOptions={{ path: '/' }}>
            <AuthContextProvider>
                <App />
            </AuthContextProvider>
        </CookiesProvider>
    </React.StrictMode >
);
