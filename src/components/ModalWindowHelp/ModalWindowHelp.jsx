import { useState } from 'react';
import css from './ModalWindowHelp.module.css';
import sprite from '../../assets/icons.svg';

const ModalWindowHelp = ({ onClose }) => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const handleSubmit = () => {
		console.log({ title, description });
		onClose();
	};

	return (
		<div className={css.modalContainer}>
			<button className={css.closeButton} onClick={onClose}>
				<svg id="icon-x-close" viewBox="0 0 32 32">
					<use href={`${sprite}#icon-x-close`} />
				</svg>
			</button>
			<h2 className={css.title}>Need help</h2>
			<div className={css.form}>
				<input
					className={css.formInput}
					type="text"
					placeholder="Email address"
					value={title}
					onChange={e => setTitle(e.target.value)}
				/>
				<textarea
					className={css.textareaInput}
					placeholder="Comment"
					value={description}
					onChange={e => setDescription(e.target.value)}
				></textarea>
				<button className={css.modalButton} onClick={handleSubmit}>
					Send
				</button>
			</div>
		</div>
	);
};

export default ModalWindowHelp;
