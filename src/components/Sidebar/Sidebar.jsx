import LogoComponent from '../LogoComponent/LogoComponent';
import NeedHelp from './NeedHelp/NeedHelp';
import css from './Sidebar.module.css';

const Sidebar = () => {
	return (
		<div className={css.sidebar}>
			<LogoComponent />
			<NeedHelp />
			<button>Log out</button>
		</div>
	);
};

export default Sidebar;
