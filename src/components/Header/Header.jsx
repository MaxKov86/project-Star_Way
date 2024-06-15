import { useState } from 'react';
import css from './Header.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import UserInfo from './UserInfo/UserInfo';
import ThemeSelector from './ThemeSelector/ThemeSelector';
import svg from '../../assets/icons.svg';
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
		// <div className={css.header}>
		<div className={clsx(css.header, css[theme])}>
			{window.innerWidth < 1440 && (
				<button
					className={css.burgerBtn}
					onClick={() => toggle(!isOpen)}
					type="button"
				>
					<MenuIcon className={clsx(css.userIcon, css[theme])} />
				</button>
			)}
			<div className={css.rightSection}>
				<button
					className={clsx(css.btnTheme, css[theme])}
					onClick={handleThemeButtonClick}
				>
					Theme
					<svg width="16" height="16" stroke="currentColor">
						<use href={svg + '#icon-chevron-down'}></use>
					</svg>
				</button>
				<UserInfo />
			</div>
			{showModal && <ThemeSelector closeMenuModal={closeMenuModal} />}
		</div>
	);
};

export default Header;
