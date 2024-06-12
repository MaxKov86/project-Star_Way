import { useAuth } from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const RestrictedRoute = ({ component: Component }) => {
	const { isLoggedIn } = useAuth();

	return isLoggedIn ? <Navigate to={'/home'} /> : Component;
};

export default RestrictedRoute;