import css from './Header.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import UserInfo from './UserInfo/UserInfo';

const Header = ({ isOpen, toggle }) => {
	return (
		<div className={css.header}>
			{innerWidth < 1440 && (
				<button
					className={css.burgerBtn}
					onClick={() => toggle(!isOpen)}
					type="button"
				>
					<MenuIcon className={css.userIcon} />
				</button>
			)}
			<UserInfo />
		</div>
	);
};

export default Header;
