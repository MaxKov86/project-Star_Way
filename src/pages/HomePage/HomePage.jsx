// import Button from '../../components/Buttons/PrimeBtn';
import Sidebar from '../../components/Sidebar/Sidebar';
import ScreenPage from '../ScreensPage/ScreenPage';
import Header from '../../components/Header/Header';
import DashboardFilter from '../../components/DashboardFilter/DashboardFilter';

import css from './HomePage.module.css';

const HomePage = () => {
	return (
		<div className={css.homePage}>
			<Sidebar />
			<div className={css.mainContent}>
				<Header />
				<ScreenPage>
					<DashboardFilter />
				</ScreenPage>
			</div>
		</div>
	);
};

export default HomePage;
