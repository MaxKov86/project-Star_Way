import { useSelector } from 'react-redux';
import AddColumnBtn from '../Buttons/AddColumnBtn/AddColumnBtn';
import css from './MainDashboard.module.css';
import { selectColumns } from '../../redux/columns/selectors';
import { useParams } from 'react-router-dom';
import Column from '../Column/Column';
import clsx from 'clsx';
import { selectTheme } from '../../redux/theme/selectors';

export default function MainDashboard() {
	const { boardName } = useParams();

	const columns = useSelector(selectColumns);
	const boardColumns = columns.filter(column => column.boardId === boardName);

	const theme = useSelector(selectTheme);

	return (
		<div className={clsx(css.box, css[theme])}>
			{boardColumns.map(column => {
				return <Column key={column._id} title={column.title} id={column._id} />;
			})}

			<AddColumnBtn />
		</div>
	);
}
