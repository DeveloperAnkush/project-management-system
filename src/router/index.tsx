import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/auth/login';

const RouterGate = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/project-management-system' element={<Login />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouterGate;