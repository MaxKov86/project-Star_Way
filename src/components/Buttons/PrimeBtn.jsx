import { useSelector } from 'react-redux';
import css from './PrimeBtn.module.css';
import { selectTheme } from '../../redux/theme/selectors';
import clsx from 'clsx';

const PrimeBtn = ({ children, onBtnClick, additionalClass }) => {
	const theme = useSelector(selectTheme);
	return (
		<button
			onClick={onBtnClick}
			type="submit"
			className={clsx(css.button, css[theme], additionalClass)}
		>
			{children}
		</button>
	);
};

export default PrimeBtn;
