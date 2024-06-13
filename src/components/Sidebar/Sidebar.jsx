import clsx from 'clsx';
import LogoComponent from '../LogoComponent/LogoComponent';
import NeedHelp from './NeedHelp/NeedHelp';
import css from './Sidebar.module.css';
import { selectTheme } from '../../redux/theme/selectors';
import { useSelector } from 'react-redux';
import CreateBoard from './CreateBoard/CreateBoard';
import SidebarBoard from './SidebarBoard/SidebarBoard';
import { useNavigate, useParams } from 'react-router-dom';
import Logout from './Logout/Logout';

import { selectBoards } from '../../redux/boards/selectors';
import { useEffect } from 'react';


const Sidebar = ({ isOpen, toggle }) => {
	const { boardName } = useParams();
	const nav = useNavigate();

	const boards = useSelector(selectBoards);
	const theme = useSelector(selectTheme);

	useEffect(() => {
		if (!boardName && boards.length > 0) {
			nav(`/home/${boards[0]._id}`);
		}
	}, [boardName, boards, nav]);

	return (
		<>
			<div className={clsx(css.box, css[`box_${theme}`], isOpen && css.open)}>
				<div className={css.topBox}>
					<LogoComponent />

					<p className={clsx(css.myBoardText, css[`myBoardText_${theme}`])}>My boards</p>
					<CreateBoard />
				</div>

				<ul className={css.sidebarBoardsBox}>
					{boards.map(board => {
						if (boardName === board._id || (boardName == null && boards[0] === board)) {
							return (
								<li key={board._id ?? new Date + Math.random()}>
									<SidebarBoard
										title={board.title}
										icon={board.icon}
										id={board._id}
										isActive={true}
									/>
								</li>
							);
						}
						return (
							<li key={board._id ?? new Date + Math.random()}>
								<SidebarBoard
									key={board._id}
									title={board.title}
									icon={board.icon}
									id={board._id}
									isActive={false}
								/>
							</li>
						);
					})}
				</ul>

				<div className={css.bottomBox}>
					<NeedHelp />
					<Logout />
				</div>
			</div>

			{/* backdrop */}
			<div className={clsx(css.backdrop, isOpen && css.open, css[theme])} onClick={() => toggle(!isOpen)}></div>
		</>
	);
};

export default Sidebar;
