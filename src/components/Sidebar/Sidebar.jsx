import clsx from 'clsx';
import LogoComponent from '../LogoComponent/LogoComponent';
import NeedHelp from './NeedHelp/NeedHelp';
import css from "./Sidebar.module.css";
import { selectTheme } from '../../redux/theme/selectors';
import { useDispatch, useSelector } from 'react-redux';
import CreateCard from './CreateCard/CreateCard';
import SidebarBoard from './SidebarBoard/SidebarBoard';
import { useParams } from 'react-router-dom';

import { selectBoards } from '../../redux/boards/selectors';
import { useEffect } from 'react';
import { getAllBoards } from '../../redux/boards/operations';


const Sidebar = () => {
	const params = useParams();

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllBoards())
	})

	const boards = useSelector(selectBoards);
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
