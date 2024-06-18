import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const PrivateRoute = ({ component: Component, redirectTo }) => {
	const { isLoggedIn } = useAuth();
	return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
