import UserInfo from './UserInfo/UserInfo';
import css from './Header.module.css';
import svg from '../../assets/icons.svg';

import MenuIcon from '@mui/icons-material/Menu';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import css from './Header.module.css';

const Header = ({ isOpen, toggle }) => {
	return (
		<div className={css.header}>
			{innerWidth < 1440 && (
				<button className={css.burgerBtn} onClick={() => toggle(!isOpen)} type='button'>
					<MenuIcon className={css.userIcon} />
				</button>
			)}
			<div></div>
			<div className={css.homeImg}>
				<AccountBoxIcon className={css.userIcon} sx={{ fontSize: 46 }} />
			</div>
main
		</div>
	);
};

export default Header;
