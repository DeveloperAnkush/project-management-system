import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/auth/login';
import Dashboard from '../pages/dashboard/dashboard';
import PrivateRoutes from '../components/PrivateRoute/privateRoutes';
import ResetPassword from '../pages/auth/resetPassword';

const RouterGate = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoutes />}>
                    <Route path='/dashboard' element={<Dashboard />} />
                </Route>
                <Route path='/project-management-system' element={<Login />} />
                <Route path='/login' element={<Login />} />
                <Route path='/reset-password' element={<ResetPassword />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouterGate;