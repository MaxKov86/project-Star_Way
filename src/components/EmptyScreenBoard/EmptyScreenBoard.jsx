import { useState } from 'react';
import Modal from 'react-modal';
import css from './EmptyScreenBoard.module.css';

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

			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				contentLabel="Modal"
			>
				<div>
					Тут має потрібна форма передаватися як children, в форму перенести
					кнопку закриття модалки або функцію на onClick
				</div>

				<button onClick={closeModal}>Close</button>
			</Modal>
		</div>
	);
}
