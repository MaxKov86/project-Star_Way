import css from './Modal.module.css';

const Modal = ({ children }) => {
	return (
		<div className={css.backdrop}>
			<div className={css.content}>{children}</div>
		</div>
	);
};
export default Modal;
