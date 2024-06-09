import { Route, Routes } from 'react-router-dom';
import WelcomePage from '../pages/WelcomePage/WelcomePage';
import AuthPage from '../pages/AuthPage/AuthPage';
import HomePage from '../pages/HomePage/HomePage';
import './App.module.css';
import Layout from './Layout/Layout';
import ScreenPage from '../pages/ScreensPage/ScreenPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

function App() {
	return (
		<>
			<Layout>
				<Routes>
					<Route path="/" element={<WelcomePage />} />
					<Route path="/auth/:id" element={<AuthPage />} />
					<Route path="/home" element={<HomePage />} />
					<Route path="/home/:boardName" element={<ScreenPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</Layout>
		</>
	);
}

export default App;
