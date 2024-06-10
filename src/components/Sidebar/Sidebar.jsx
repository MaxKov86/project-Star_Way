import LogoComponent from '../LogoComponent/LogoComponent';
import NeedHelp from './NeedHelp/NeedHelp';
import css from './Sidebar.module.css';

// const Sidebar = ({ visible, onVisible }) => {
// 	const closeSidebar = () => {
// 		onVisible(false);
// 	};

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

//=====
//  <div className={clsx(css.sidebarWrap, { [css.visible]: visible })}
// 			onClick={closeSidebar}
// 		>
// 			<aside className={css.sidebar}>
// 				<div className={css.block}>
// 					<NeedHelp />
// 				</div>
// 			</aside>
// 		</div>
