import EmptyScreenBoard from '../../components/EmptyScreenBoard/EmptyScreenBoard';
import DashboardFilter from '../../components/DashboardFilter/DashboardFilter';
import css from './ScreenPage.module.css';

const ScreenPage = () => {
	return (
		<div className={css.wrapper}>
			<div className={css.deskHeader}>
				<DashboardFilter />
			</div>
			<div className={css.deskBoard}>
				<EmptyScreenBoard />
			</div>
				</div>
	);
};

export default ScreenPage;
