import Button from '../../components/Buttons/PrimeBtn';
import Sidebar from '../../components/Sidebar/Sidebar';
import ScreenPage from '../ScreensPage/ScreenPage';
const HomePage = () => {
	return (
		<>
			<h1>Header</h1>
			<Button>
				<img src="/src/assets/icon-logo.svg" alt="logo" />
				Send
			</Button>
			<Sidebar />
			<ScreenPage />
		</>
	);
};

export default HomePage;
