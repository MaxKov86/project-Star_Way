import EmptyScreenBoard from '../../components/EmptyScreenBoard/EmptyScreenBoard';
import DashboardFilter from '../../components/DashboardFilter/DashboardFilter';
import css from './ScreenPage.module.css';
import Column from '../../components/Column/Column';

const ScreenPage = () => {
	return (
		<div className={css.wrapper}>
			<div className={css.deskHeader}>
				<DashboardFilter />
			</div>
			<div className={css.deskBoard}>
				<EmptyScreenBoard />
			</div>
			<Column />
		</div>
	);
};

export default ScreenPage;
