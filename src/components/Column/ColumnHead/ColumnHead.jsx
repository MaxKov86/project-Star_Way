import clsx from 'clsx';
import { selectTheme } from '../../../redux/theme/selectors';
import { useDispatch, useSelector } from 'react-redux';
import css from './ColumnHead.module.css';
import sprite from '../../../assets/icons.svg';
import { deleteColumn, updateColumn } from '../../../redux/columns/operation';

const ColumnHead = ({ title, id }) => {
	const theme = useSelector(selectTheme);
	const dispatch = useDispatch();

	const handleDelete = () => {
		dispatch(deleteColumn(id));
	};

	const handleUpdate = () => {
		dispatch(updateColumn(id));
	};

	return (
		<div className={clsx(css.columnHead, css[theme])}>
			<h1 className={clsx(css.title, css[theme])}>{title}</h1>
			<div className={css.columnHeadIconsWrap}>
				{/* icon buttons */}
				<button className={css.btn} onClick={() => {}} type="button">
					<svg className={clsx(css.icon, css[`icon_${theme}`])}>
						<use href={`${sprite}#icon-pencil`} />
					</svg>
				</button>

				<button className={css.btn} onClick={handleDelete} type="button">
					<svg className={clsx(css.icon, css[`icon_${theme}`])}>
						<use href={`${sprite}#icon-trash`} />
					</svg>
				</button>
			</div>
		</div>
	);
};

export default ColumnHead;
