import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import css from './HomePage.module.css';

const HomePage = () => {
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
