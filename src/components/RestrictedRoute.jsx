import { useAuth } from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const RestrictedRoute = ({ component: Component, redirectTo = '/home' }) => {
	const { isLoggedIn } = useAuth();

	return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
