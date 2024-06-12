import { useState } from 'react';
import OurModal from '../Modal/Modal';
import css from './EmptyScreenBoard.module.css';
import CreateBoardModal from "../Sidebar/CreateBoard/CreateBoardModal/CreateBoardModal"

export default function EmptyScreenBoard() {
	//для відкриття модального вікна
	const [modalIsOpen, setIsOpen] = useState(false);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<div className={css.container}>
			<div className={css.text}>
				Before starting your project, it is essential{' '}
				<span className={css.span} onClick={openModal}>
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
	);
}
