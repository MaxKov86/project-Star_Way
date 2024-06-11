import clsx from 'clsx';
import LogoComponent from '../LogoComponent/LogoComponent';
import NeedHelp from './NeedHelp/NeedHelp';
import css from './Sidebar.module.css';
import { selectTheme } from '../../redux/theme/selectors';
import { useDispatch, useSelector } from 'react-redux';
import CreateBoard from './CreateBoard/CreateBoard';
import SidebarBoard from './SidebarBoard/SidebarBoard';
import { useParams } from 'react-router-dom';
import Logout from './Logout/Logout';

import { selectBoards } from '../../redux/boards/selectors';
import { getAllBoards } from '../../redux/boards/operations';

const Sidebar = ({ isOpen, toggle }) => {
	const params = useParams();

	const boards = useSelector(selectBoards);
	const theme = useSelector(selectTheme);


	const dispatch = useDispatch()




	return (
		<div className={clsx(css.backdrop, isOpen && css.open, css[theme])} onClick={() => toggle(!isOpen)}>
			<div className={clsx(css.box, css[`box_${theme}`], isOpen && css.open)}>
				<div className={css.topBox}>
					<LogoComponent />

					<p className={clsx(css.myBoardText, css[`myBoardText_${theme}`])}>My boards</p>
					<CreateBoard />
				</div>

				<ul className={css.sidebarBoardsBox}>
					{boards.map(board => {
						if (params.boardName === board._id || (params.boardName == null && boards[0] === board)) {
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
				<button type='button' onClick={() => dispatch(getAllBoards())}>ddd</button>
			</div>
		</div>
	);
};

export default Sidebar;
