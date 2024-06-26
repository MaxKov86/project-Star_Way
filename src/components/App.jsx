import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Loader from './Loader/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from '../redux/auth/operations';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import { Suspense, lazy } from 'react';
import { selectIsRefreshing } from '../redux/auth/selectors';

const WelcomePage = lazy(() => import('../pages/WelcomePage/WelcomePage'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const AuthPage = lazy(() => import('../pages/AuthPage/AuthPage'));
const ScreenPage = lazy(() => import('../pages/ScreensPage/ScreenPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

function App() {
	const isRefreshing = useSelector(selectIsRefreshing);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(refreshUser());
	}, [dispatch]);
	return isRefreshing ? (
		<Loader />
	) : (
		<>
			<Suspense fallback={null}>
				<Routes>
					<Route
						path="/"
						element={<RestrictedRoute component={<WelcomePage />} />}
					/>
					<Route
						path="/auth/:id"
						element={<RestrictedRoute component={<AuthPage />} />}
					/>
					<Route
						path="/home"
						element={
							<PrivateRoute component={<HomePage />} redirectTo="/auth/login" />
						}
					>
						<Route path="/home/:boardName" element={<ScreenPage />} />
					</Route>

					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</Suspense>

			<Toaster />
		</>
	);
}

export default App;
