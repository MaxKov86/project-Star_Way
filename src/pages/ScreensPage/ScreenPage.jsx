import EmptyScreenBoard from '../../components/EmptyScreenBoard/EmptyScreenBoard';
import css from './ScreenPage.module.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import clsx from 'clsx';
import { selectTheme } from '../../redux/theme/selectors';
import MainDashboard from '../../components/MainDashboard/MainDashboard';
import HeaderDashboard from '../../components/HeaderDashboard/HeaderDashboard';

const ScreenPage = () => {
	const param = useParams();
	const theme = useSelector(selectTheme);



	return (
		<div className={clsx(css.wrapper, css[theme])}>
			<HeaderDashboard />

			{param.boardName
				?
				<MainDashboard />
				:
				<EmptyScreenBoard />
			}

		</div>
	);
};

export default ScreenPage;
