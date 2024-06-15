import css from './Modal.module.css';
import Modal from 'react-modal';
import sprite from "../../assets/icons.svg";
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../redux/theme/selectors';
import { useState } from 'react';

Modal.setAppElement("#root");

const OurModal = ({ children, isOpen, closeModal, title }) => {
	const theme = useSelector(selectTheme);
	const [shouldAnimate, setShouldAnimate] = useState(false);

	const handleAfterOpen = () => {
		setShouldAnimate(true);
	};

	const handleRequestClose = () => {
		setShouldAnimate(false);
		setTimeout(closeModal, 300); // Duration should match the animation duration
	};

	return (
		<Modal
			className={clsx(css.modal, css[theme], { [css.animateOut]: !shouldAnimate })}
			overlayClassName={clsx(css.backdrop, css[theme], { [css.fadeOut]: !shouldAnimate })}
			isOpen={isOpen}
			onAfterOpen={handleAfterOpen}
			onRequestClose={handleRequestClose}
			contentLabel="Modal"
		>
			<button className={css.closeBtn} onClick={handleRequestClose}>
				<svg className={clsx(css.iconBtn, css[theme])}>
					<use href={`${sprite}#icon-x-close`}></use>
				</svg>
			</button>

			<h4 className={clsx(css.title, css[theme])}>{title}</h4>

			{children}
		</Modal>
	);
};

export default OurModal;
