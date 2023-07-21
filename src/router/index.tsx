import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/auth/login';
import Dashboard from '../pages/dashboard/dashboard';
import PrivateRoutes from '../components/PrivateRoute/privateRoutes';

const RouterGate = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoutes />}>
                    <Route path='/dashboard' element={<Dashboard />} />
                </Route>
                <Route path='/project-management-system' element={<Login />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouterGate;