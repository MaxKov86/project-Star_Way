import { Route, Routes } from 'react-router-dom';
import WelcomePage from '../pages/WelcomePage/WelcomePage';
import AuthPage from '../pages/AuthPage/AuthPage';
import HomePage from '../pages/HomePage/HomePage';
import './App.module.css';
import { Toaster } from 'react-hot-toast';
// import Layout from './Layout/Layout';
import ScreenPage from '../pages/ScreensPage/ScreenPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from '../redux/auth/operations';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(refreshUser());
	}, [dispatch]);
	return (
		<>
			{/* <Layout> */}
			<Routes>
				<Route
					path="/"
					element={<RestrictedRoute component={<WelcomePage />} />}
				/>
				<Route
					path="/auth/:id"
					element={<RestrictedRoute component={<AuthPage />} />}
				/>
				<Route path="/home" element={<PrivateRoute component={<HomePage />} />}>
					<Route path="/home/:boardName" element={<ScreenPage />} />
				</Route>
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
			<Toaster />
			{/* </Layout> */}
		</>
	);
}

export default App;
