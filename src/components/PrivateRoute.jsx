import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const PrivateRoute = ({ component: Component }) => {
	const { isLoggedIn } = useAuth();
	return isLoggedIn ? Component : <Navigate to="/auth/login" />;
};

export default PrivateRoute;
