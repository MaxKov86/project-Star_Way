import { useState } from 'react';
import OurModal from '../Modal/Modal';
import css from './EmptyScreenBoard.module.css';
import CreateBoardModal from "../Sidebar/CreateBoard/CreateBoardModal/CreateBoardModal"
import { useSelector } from 'react-redux';
import { selectTheme } from '../../redux/theme/selectors';
import clsx from 'clsx';

export default function EmptyScreenBoard() {
	const theme = useSelector(selectTheme);

	//для відкриття модального вікна
	const [modalIsOpen, setIsOpen] = useState(false);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<div className={css.mainBox}>
			<div className={css.container}>
				<div className={clsx(css.text, css[theme])}>
					Before starting your project, it is essential{' '}
					<span className={clsx(css.span, css[theme])} onClick={openModal}>
						to create a board
					</span>{' '}
					to visualize and track all the necessary tasks and milestones. This
					board serves as a powerful tool to organize the workflow and ensure
					effective collaboration among team members.
				</div>

				<OurModal
					isOpen={modalIsOpen}
					closeModal={closeModal}
					title="New board"
				>
					<CreateBoardModal handelClose={closeModal} />
				</OurModal>
			</div>
		</div>
	);
}
