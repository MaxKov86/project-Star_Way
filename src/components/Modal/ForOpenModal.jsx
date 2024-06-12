import { useState } from 'react';
import Modal from 'react-modal';
import css from './Modal.module.css';

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

//цей компонент створений для написання логіки  для модального вікна
const ForOpenModal = () => {
	//це потрібно скопіювати в Компоненти, в яких є кнопки для відкривання модального вікна ,а також імпорти вище
	const [modalIsOpen, setIsOpen] = useState(false);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<div>
			<button onClick={openModal}>Open Modal</button>

			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				contentLabel="Modal"
			>
				<div>Тут має потрібна форма передаватися як children</div>

				<button className={css.closeButton} onClick={closeModal}>
					Close
				</button>
			</Modal>
		</div>
	);
};

export default ForOpenModal;
