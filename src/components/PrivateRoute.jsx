import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({
	component: Component,
	restrictTo = '/auth/register',
}) => {
	const isLoggedIn = useSelector(selectIsLoggedIn);

	return isLoggedIn ? Component : <Navigate to={restrictTo} />;
};

export default PrivateRoute;
