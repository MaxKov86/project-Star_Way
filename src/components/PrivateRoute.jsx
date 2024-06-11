import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component }) => {
	const isLoggedIn = useSelector(selectIsLoggedIn);
	return isLoggedIn ? Component : <Navigate to={'/auth/register'} />;
};

export default PrivateRoute;
