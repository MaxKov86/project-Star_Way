import clsx from 'clsx';
import LogoComponent from '../LogoComponent/LogoComponent';
import NeedHelp from './NeedHelp/NeedHelp';
import css from "./Sidebar.module.css";
import { selectTheme } from '../../redux/theme/selectors';
import { useSelector } from 'react-redux';
import CreateCard from './CreateCard/CreateCard';
import SidebarBoard from './SidebarBoard/SidebarBoard';
import { useParams } from 'react-router-dom';


const boards = [
	{
		_id: "6665bd2391af38232b5d7841",
		title: "board1",
		icon: "icon-icon-board-4",
	},
	{
		_id: "6665bd4891af38232b5d7844",
		title: "board2",
		icon: "icon-icon-board-4",
	},
	{
		_id: "6665c21eefd6a7cb8aa7cb8a",
		title: "board3",
		icon: "icon-icon-board-4",
	},
	{
		_id: "6665c3b0efd6a7cb8aa7cb8e",
		title: "board4",
		icon: "icon-icon-board-4",
	}
];

const Sidebar = () => {

	const params = useParams();

	const theme = useSelector(selectTheme);

	return (
		<div className={clsx(css.box, css[`box_${theme}`])}>
			<div className={css.topBox}>
				<LogoComponent />

				<p className={clsx(css.myBoardText, css[`myBoardText_${theme}`])}>My boards</p>
				<CreateCard />
			</div>

			<div className={css.sidebarBoardsBox}>
				{boards.map((board) => {
					if (params.boardName === board._id) {
						return <SidebarBoard key={board._id} title={board.title} icon={board.icon} id={board._id} isActive={true} />
					}
					return <SidebarBoard key={board._id} title={board.title} icon={board.icon} id={board._id} isActive={false} />
				})}
			</div>

			<div className={css.bottomBox}>
				<NeedHelp />
				<button>Log out</button>
			</div>
		</div>
	);
};

export default Sidebar;
