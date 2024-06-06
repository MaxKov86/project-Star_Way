import LogoComponent from '../LogoComponent/LogoComponent';
import NeedHelp from './NeedHelp/NeedHelp';

const Sidebar = () => {
	return (
		<div>
			<LogoComponent />
			<NeedHelp />
			<button>Log out</button>
		</div>
	);
};

export default Sidebar;
