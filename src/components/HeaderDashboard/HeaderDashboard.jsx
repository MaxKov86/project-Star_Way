import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { clearFilter, setFilter } from '../../redux/filter/slice.js';
import clsx from 'clsx';

import { selectTheme } from '../../redux/theme/selectors';
import DashboardFilter from '../DashboardFilter/DashboardFilter';
import css from './HeaderDashboard.module.css';
import { selectBoards, selectIsLoading } from '../../redux/boards/selectors.js';

const HeaderDashboard = () => {
	const { boardName } = useParams();
	const boards = useSelector(selectBoards);
	const isLoading = useSelector(selectIsLoading);

	const board = boards.find(board => board._id === boardName);

	const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

	const theme = useSelector(selectTheme);
	const dispatch = useDispatch();

	const handleFilterChange = filter => {
		if (filter === null) {
			dispatch(clearFilter());
		} else {
			dispatch(setFilter(filter));
		}
	};

	return (
		<div
			className={clsx(
				css.headerDashboardContainer,
				css[theme],
				!boardName && css.empty
			)}
		>
			
			{board && !isLoading && (
				<>
				<h2 className={clsx(css.titleHeaderDashboard, css[theme])}>
					{board.title}
				</h2>
				<DashboardFilter
				isFilterModalOpen={isFilterModalOpen}
				toggleFilterModal={() => setIsFilterModalOpen(!isFilterModalOpen)}
				onFilterChange={handleFilterChange}
			/>
			</>
			)}
		</div>
	);
};

export default HeaderDashboard;
