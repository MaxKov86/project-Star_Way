import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../../redux/theme/selectors';
import staticIcons from '../../../assets/icons.svg';
import css from './AddColumnBtn.module.css';

const AddColumnBtn = () => {
	const theme = useSelector(selectTheme);
	return (
		<>
			<button className={clsx(css.addColumnBtn, css[theme])}>
				{' '}
				<svg className={clsx(css.iconAddColumnBtn, css[theme])}>
					<use href={`${staticIcons}#icon-plus`}></use>
				</svg>
				<span className={clsx(css.textAddColumnBtn, css[theme])}>
					Add another column
				</span>
			</button>
		</>
	);
};

export default AddColumnBtn;
