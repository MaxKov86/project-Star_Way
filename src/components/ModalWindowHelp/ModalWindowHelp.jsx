import { useState } from 'react';
import css from './ModalWindowHelp.module.css';

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
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="18"
					viewBox="0 0 18 18"
					fill="none"
				>
					<path
						d="M13.5 4.5L4.5 13.5"
						stroke="white"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M4.5 4.5L13.5 13.5"
						stroke="white"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
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
