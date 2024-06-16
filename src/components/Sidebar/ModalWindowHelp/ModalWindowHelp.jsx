import css from './ModalWindowHelp.module.css';
import clsx from 'clsx';
import { selectTheme } from '../../../redux/theme/selectors';
import { useForm } from 'react-hook-form';

import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { selectUser } from '../../../redux/auth/selectors';
import { needHelp } from '../../../redux/users/operation';
import loadingToaster from '../../../helpers/loadingToast';
import successToaster from '../../../helpers/successToast';
import errorToaster from '../../../helpers/errorToast';

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

	//const token = useSelector(selectToken);
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	const {
		register,
		handleSubmit,
		formState: { errors },
		trigger,

		reset,
	} = useForm({
		defaultValues: {
			email: user.email,
		},
		resolver: yupResolver(schema),
		reValidateMode: 'onChange',
	});

	const onSubmit = async (data) => {
		const toastId = loadingToaster(theme);

		try {
			await dispatch(needHelp(data));
			successToaster(theme, toastId);
			onClose();
			reset();

		} catch (err) {
			errorToaster(theme, toastId);
		}
	};

	return (
		<form
			className={clsx(css.form, css[theme])}
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className={css.inputBox}>
				<input
					className={clsx(css.input, css[theme])}
					{...register('email', { onChange: () => trigger('email') })}
					type="text"
					name="email"
					placeholder="Email address "
					id="email"
				// value={email}
				// onChange={e => setEmail(e.target.value)}
				/>
			</div>
			<div className={css.inputBox}>
				<textarea
					className={clsx(css.input, css.textareaInput, css[theme])}
					{...register('comment')}
					name="comment"
					placeholder="Comment"
				/>
				{errors.comment && (
					<p className={css.errors}>{errors.comment.message}</p>
				)}
			</div>

			<button className={clsx(css.btn, css[theme])} type="submit">
				<p className={clsx(css.btnText, css[theme])}>Send</p>
			</button>
		</form>
	);
}
