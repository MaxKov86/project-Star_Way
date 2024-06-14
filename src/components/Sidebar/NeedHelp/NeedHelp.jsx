import { useState } from 'react';
//import clsx from 'clsx';
import css from './NeedHelp.module.css';
import ModalWindowHelp from '../ModalWindowHelp/ModalWindowHelp';
import OurModal from '../../Modal/Modal';

const NeedHelp = () => {
	//const theme = useSelector(selectTheme);
	const [modalIsOpen, setIsOpen] = useState(false);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<div className={css.helpBlock}>
			<img src="/kaktus-need-help.png" alt="Kaktus Need Help" />
			<p className={css.helpText}>
				If you need help with <br />
				<span className={css.taskProSpan}> TaskPro</span>, check out our support
				resources or contact our customer support team
			</p>

			<button className={css.helpBtn} onClick={openModal}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					fill="none"
				>
					<path
						d="M9.99996 18.3332C14.6023 18.3332 18.3333 14.6022 18.3333 9.99984C18.3333 5.39746 14.6023 1.6665 9.99996 1.6665C5.39759 1.6665 1.66663 5.39746 1.66663 9.99984C1.66663 14.6022 5.39759 18.3332 9.99996 18.3332Z"
						stroke="white"
						strokeWidth="1.8"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M7.57495 7.49999C7.77087 6.94304 8.15758 6.47341 8.66658 6.17426C9.17558 5.87512 9.77403 5.76577 10.3559 5.86558C10.9378 5.96539 11.4656 6.26792 11.8458 6.71959C12.2261 7.17126 12.4342 7.74292 12.4333 8.33332C12.4333 9.99999 9.93328 10.8333 9.93328 10.8333"
						stroke="white"
						strokeWidth="1.8"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M10 14.1665H10.0125"
						stroke="white"
						strokeWidth="1.8"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
				Need help?
			</button>

			<OurModal isOpen={modalIsOpen} closeModal={closeModal} title="Need help">
				<ModalWindowHelp onClose={closeModal} />
			</OurModal>
		</div>
	);
};

export default NeedHelp;
