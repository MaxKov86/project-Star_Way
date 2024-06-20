import { useState } from 'react';
import css from './Header.module.css';

import UserInfo from './UserInfo/UserInfo';
import ThemeSelector from './ThemeSelector/ThemeSelector';
import icon from '../../assets/icons.svg';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../redux/theme/selectors';

const Header = ({ isOpen, toggle }) => {
	const theme = useSelector(selectTheme);
	const [showModal, setShowModal] = useState(false);

	const closeMenuModal = () => {
		setShowModal(false);
	};

	const handleThemeButtonClick = () => {
		setShowModal(!showModal);
	};

	return (
		<div className={clsx(css.header, css[theme])}>
			{window.innerWidth < 1440 && (
				<button
					className={clsx(css.burgerBtn, css[theme])}
					onClick={() => toggle(!isOpen)}
					type="button"
				>
					<svg className={clsx(css.burgerIcon, css[theme])}>
						<use xlinkHref={icon + '#icon-menu-01'}></use>
					</svg>
				</button>
			)}
			<div className={css.rightSection}>
				<button
					className={clsx(css.btnTheme, css[theme])}
					onClick={handleThemeButtonClick}
				>
					Theme
					<svg width="16" height="16" stroke="currentColor">
						<use xlinkHref={icon + '#icon-chevron-down'}></use>
					</svg>
				</button>
				<UserInfo />
			</div>
			{showModal && <ThemeSelector closeMenuModal={closeMenuModal} />}
		</div>
	);
};

export default Header;
