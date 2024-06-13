import css from './Header.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import UserInfo from './UserInfo/UserInfo';

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
			<UserInfo/>
		</div>
	);
};

export default Header;
