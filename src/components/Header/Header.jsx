import UserInfo from './UserInfo/UserInfo';
import css from './Header.module.css';
import svg from '../../assets/icons.svg';

const Header = () => {
	return (
		<div className={css.header}>
			<header className={css.headerLayout}>
				<div>
					<button className={css.burger}>
						<svg width="24" height="24">
							<use href={svg + '#icon-menu-01'} stroke="currentColor"></use>
						</svg>
					</button>
				</div>
				<UserInfo/>
			</header>
		</div>
	);
};

export default Header;
