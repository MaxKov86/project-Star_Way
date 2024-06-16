import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from '../../../redux/theme/selectors';
import css from './ColumnSelector.module.css';
import sprite from '../../../assets/icons.svg';
import clsx from 'clsx';
import { useParams } from 'react-router-dom';
import { selectColumns } from '../../../redux/columns/selectors';
import { updateCard } from '../../../redux/cards/operations';

const ColumnSelector = ({ handleClose, cardId }) => {
	const theme = useSelector(selectTheme);
	const dispatch = useDispatch();
	const { boardName } = useParams();
	const columns = useSelector(selectColumns);
	const boardColumns = columns.filter(column => column.boardId === boardName);

	const handleMove = newColumnId => {
		dispatch(updateCard({ id: cardId, columnId: newColumnId }));
		handleClose();
	};

	const handleMenuClick = e => {
		e.stopPropagation();
	};

	return (
		<div
			className={css.themeModal}
			onClick={handleMenuClick}
			data-modal-id={cardId}
		>
			<ul className={clsx(css.list, css[theme])}>
				{boardColumns.map(column => (
					<li key={column._id}>
						<button
							className={clsx(css.btn, css.transition, css[theme])}
							onClick={() => handleMove(column._id)}
						>
							{column.title}
							<svg className={clsx(css.icon, css[`icon_${theme}`])}>
								<use href={`${sprite}#icon-arrow-circle-broken-right`} />
							</svg>
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ColumnSelector;
