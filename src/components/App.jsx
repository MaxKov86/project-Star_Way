import { Route, Routes } from 'react-router-dom';
import WelcomePage from '../pages/WelcomePage/WelcomePage';
import AuthPage from '../pages/AuthPage/AuthPage';
import HomePage from '../pages/HomePage/HomePage';
import './App.module.css';
import { Toaster } from 'react-hot-toast';
import Layout from './Layout/Layout';
import ScreenPage from '../pages/ScreensPage/ScreenPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import PrivateRoute from './PrivateRoute';

function App() {
	return (
		<>
			<Layout>
				<Routes>
					<Route path="/" element={<WelcomePage />} />
					<Route path="/auth/:id" element={<AuthPage />} />
					<Route
						path="/home"
						element={<PrivateRoute component={<HomePage />} />}
					/>
					<Route path="/home/:boardName" element={<ScreenPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
				<Toaster />
			</Layout>
		</>
	);
}

export default App;
