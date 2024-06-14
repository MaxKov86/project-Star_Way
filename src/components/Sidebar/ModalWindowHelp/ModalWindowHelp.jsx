import { useState } from 'react';
import css from './ModalWindowHelp.module.css';
import clsx from 'clsx';
import { selectTheme } from '../../../redux/theme/selectors';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// validation
const schema = yup.object().shape({
	comment: yup
		.string()
		.min(2, 'Min. comment length is 2 symbol')
		.max(50, 'Max. comment length is 50 symbols')
		.required('Comment is required'),
});

export default function ModalWindowHelp({ onClose }) {
	const theme = useSelector(selectTheme);

	const [email, setEmail] = useState('');
	const [comment, setComment] = useState('');

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	const onSubmit = data => {
		console.log(data);
		onClose();
	};

	return (
		<form className={css.form} onSubmit={handleSubmit(onSubmit)}>
			<div className={css.inputBox}>
				<input
					className={clsx(css.input, css[theme])}
					{...register('email')}
					type="text"
					name="email"
					placeholder="Email address "
					id="email"
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>
			</div>
			<div className={css.inputBox}>
				<textarea
					className={clsx(css.input, css.textareaInput, css[theme])}
					{...register('text')}
					name="text"
					placeholder="Comment"
					id="textarea"
					value={comment}
					onChange={e => setComment(e.target.value)}
				/>
				{errors.comment && (
					<p className={css.errors}>{errors.comment.message}</p>
				)}
			</div>
			<button
				className={clsx(css.btn, css[theme])}
				type="submit"
				onClick={handleSubmit}
			>
				<p className={clsx(css.btnText, css[theme])}>Send</p>
			</button>
		</form>
	);
}
