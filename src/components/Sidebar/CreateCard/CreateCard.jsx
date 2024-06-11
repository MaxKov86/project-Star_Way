import clsx from 'clsx';
import sprite from '../../../assets/icons.svg';
import css from './CreateCard.module.css';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../../redux/theme/selectors';

export default function CreateCard() {
	const theme = useSelector(selectTheme);

	return (
		<div className={clsx(css.box, css[`box_${theme}`])}>
			<p className={clsx(css.text, css[`text_${theme}`])}>Create a new board</p>

			<button className={clsx(css.btn, css[`btn_${theme}`])} type="button">
				<svg className={clsx(css.icon, css[`btn_${theme}`])}>
					<use href={`${sprite}#icon-plus`}></use>
				</svg>
			</button>
		</div>
	);
}
