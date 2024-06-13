import css from './Modal.module.css';
import Modal from 'react-modal';
import sprite from "../../assets/icons.svg"
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../redux/theme/selectors';


const OurModal = ({ children, isOpen, closeModal, title }) => {

	const theme = useSelector(selectTheme);

	return (
		<Modal
			className={clsx(css.modal, css[theme])}
			overlayClassName={clsx(css.backdrop, css[theme])}
			isOpen={isOpen}
			onRequestClose={closeModal}
			contentLabel="Modal"
		>
			<button className={css.closeBtn} onClick={closeModal}>
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
