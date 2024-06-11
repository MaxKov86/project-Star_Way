import MenuIcon from '@mui/icons-material/Menu';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import css from './Header.module.css';

const Header = () => {
	return (
		<div className={css.header}>
			{innerWidth < 1440 && (
				<div>
					<MenuIcon className={css.userIcon} />
				</div>
			)}
			<div></div>
			<div className={css.homeImg}>
				<AccountBoxIcon className={css.userIcon} sx={{ fontSize: 46 }} />
			</div>
		</div>
	);
};

export default Header;
