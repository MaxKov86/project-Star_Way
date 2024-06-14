import clsx from 'clsx';
import { selectTheme } from '../../../redux/theme/selectors';
import { useSelector } from 'react-redux';
import css from './ColumnHead.module.css';
import sprite from '../../../assets/icons.svg';

const ColumnHead = ({ title }) => {
	const theme = useSelector(selectTheme);
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

				<button className={css.btn} onClick={() => {}} type="button">
					<svg className={clsx(css.icon, css[`icon_${theme}`])}>
						<use href={`${sprite}#icon-trash`} />
					</svg>
				</button>
			</div>
		</div>
	);
};

export default ColumnHead;
