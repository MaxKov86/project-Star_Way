// import Button from '../../components/Buttons/PrimeBtn';
import Sidebar from '../../components/Sidebar/Sidebar';
import ScreenPage from '../ScreensPage/ScreenPage';
import Header from '../../components/Header/Header';
import DashboardFilter from '../../components/DashboardFilter/DashboardFilter';

import css from './HomePage.module.css';
import { useState } from 'react';

const HomePage = () => {
	const [toggleSidebar, setToggleSidebar] = useState(false);
	return (
		<div className={css.homePage}>
			<Sidebar isOpen={toggleSidebar} toggle={setToggleSidebar} />
			<div className={css.mainContent}>
				<Header isOpen={toggleSidebar} toggle={setToggleSidebar} />
				<ScreenPage>
					<DashboardFilter />
				</ScreenPage>
			</div>
		</div>
	);
};

export default HomePage;
