import { useSelector } from 'react-redux';
import css from './PrimeBtn.module.css';
import { selectTheme } from '../../redux/theme/selectors';
import clsx from 'clsx';

const PrimeBtn = ({ children, onBtnClick }) => {
	const theme = useSelector(selectTheme);
	return (
		<button
			type="submit"
			onClick={() => {
				onBtnClick();
			}}
			className={clsx(css.button, css[theme])}
		>
			{children}
		</button>
	);
};

export default PrimeBtn;
