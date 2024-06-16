import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../../../redux/theme/operations';
import { selectTheme } from '../../../redux/theme/selectors';
import css from './ThemeSelector.module.css';
import clsx from 'clsx';
// import { selectTheme } from '../../../redux/theme/selectors';

const ThemeSelector = ({ closeMenuModal }) => {
	const dispatch = useDispatch();
	const currentTheme = useSelector(selectTheme);
	// const theme = useSelector(selectTheme);

	const handleThemeChange = selectedTheme => {
		dispatch(changeTheme(selectedTheme));
		closeMenuModal();
	};

	// const btnColor = selectedColor => {
	// 	return (
	// 			`${css.btn}, ${css.transition}, $
	// 			{currentTheme === selectedColor
	// 				? css.btnActive[currentTheme]
	// 				: css.btnInactive[currentTheme]}
	// 			`;
	// 	);
	// };

	const btnColor = selectedColor => {
		return clsx(css.btn, css.transition, {
			[css.btnActive]: currentTheme === selectedColor,
			[css.btnInactive]: currentTheme !== selectedColor,
			[css[currentTheme]]: true,
		});
	};

	const handleMenuClick = e => {
		e.stopPropagation();
	};

	return (
		<div className={css.wrap} onClick={closeMenuModal}>
			<div className={css.themeModal} onClick={handleMenuClick}>
				<ul className={clsx(css.list, css[currentTheme])}>
					<li>
						<button
							className={btnColor('light')}
							onClick={() => handleThemeChange('light')}
						>
							Light
						</button>
					</li>
					<li>
						<button
							className={btnColor('dark')}
							onClick={() => handleThemeChange('dark')}
						>
							Dark
						</button>
					</li>
					<li>
						<button
							className={btnColor('violet')}
							onClick={() => handleThemeChange('violet')}
						>
							Violet
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default ThemeSelector;
