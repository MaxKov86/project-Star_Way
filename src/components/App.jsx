import { Route, Routes } from 'react-router-dom';
import WelcomePage from '../pages/WelcomePage/WelcomePage';
import AuthPage from '../pages/AuthPage/AuthPage';
import './App.module.css';
import Layout from './Layout/Layout';

function App() {
	return (
		<>
			<Layout>
				<Routes>
					<Route path="/" element={<WelcomePage />} />
					<Route path="/auth/:id" element={<AuthPage />} />
				</Routes>
			</Layout>
		</>
	);
}

export default App;
