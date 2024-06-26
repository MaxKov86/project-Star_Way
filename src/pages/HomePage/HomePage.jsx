// import Button from '../../components/Buttons/PrimeBtn';
import Sidebar from '../../components/Sidebar/Sidebar';
import ScreenPage from '../ScreensPage/ScreenPage';
import Header from '../../components/Header/Header';

import css from './HomePage.module.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllBoards } from '../../redux/boards/operations';
import { getAllColumns } from '../../redux/columns/operation';
import { getAllCards } from '../../redux/cards/operations';

const HomePage = () => {
	const dispatch = useDispatch();
	const [toggleSidebar, setToggleSidebar] = useState(false);

	useEffect(() => {
		dispatch(getAllBoards());
		dispatch(getAllColumns());
		dispatch(getAllCards());
	}, [dispatch]);

	return (
		<div className={css.homePage}>
			<Sidebar isOpen={toggleSidebar} toggle={setToggleSidebar} />
			<div className={css.mainContent}>
				<Header isOpen={toggleSidebar} toggle={setToggleSidebar} />
				<ScreenPage />
			</div>
		</div>
	);
};

export default HomePage;
