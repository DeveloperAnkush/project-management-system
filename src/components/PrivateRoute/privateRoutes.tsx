import { Navigate, Outlet } from 'react-router-dom';
import ResponsiveDrawer from '../drawer/drawer';

const PrivateRoutes = () => {
    const auth = localStorage.getItem("token");
    return (
        auth ? (
            <ResponsiveDrawer>
                <Outlet />
            </ResponsiveDrawer>
        ) : <Navigate to={'/login'} />
    );
};

export default PrivateRoutes;