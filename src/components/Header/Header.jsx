import UserInfo from './UserInfo/UserInfo';
import css from './Header.module.css';
import { IconButton } from '@mui/material';
import svg from '../../assets/icons.svg';

const Header = () => {
	return (
		<header className={css.header}>
			<IconButton className={css.menuButton}>
				<svg width="24" height="24" style={{ fill: 'currentColor' }}>
					<use href={`${svg}#icon-menu-01`} />
				</svg>
			</IconButton>
			<UserInfo />
		</header>
	);
};

export default Header;
