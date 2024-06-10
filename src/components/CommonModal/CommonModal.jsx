import css from './CommonModal.module.css';

const Modal = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null;

	return (
		<div className={css.overlay} onClick={onClose}>
			<div className={css.content} onClick={e => e.stopPropagation()}>
				{children}
			</div>
		</div>
	);
};

export default Modal;
