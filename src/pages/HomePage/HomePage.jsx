// import { HeaderDashboard } from '../../components/HeaderDashboard/HeaderDashboard.jsx';
// import { Header } from '../../components/Header/Header.jsx';
//import { useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import css from './HomePage.module.css';

const HomePage = () => {
	//const [sidebarVisible, setSidebarVisible] = useState(false);

	return (
		<div className={css.homePage}>
			<Sidebar />
			<div className={css.homePageContent}>
				<p>Header and DashBoard</p>
			</div>
		</div>
	);
};

export default HomePage;
//==
// const HomePage = () => {
// 	const [sidebarVisible, setSidebarVisible] = useState(false);

// 	return (
// 		<div className={css.homePage}>
// 			<Sidebar visible={sidebarVisible} onVisible={setSidebarVisible} />
// 			<div className={css.homePageContent}>
// 				<Header onVisible={setSidebarVisible} />
// 				<HeaderDashboard />
// 			</div>
// 		</div>
// 	);
