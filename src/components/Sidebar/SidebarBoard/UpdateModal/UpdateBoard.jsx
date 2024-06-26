import clsx from 'clsx';
import sprite from '../../../../assets/icons.svg';
import css from './UpdateBoard.module.css';
import { selectTheme } from '../../../../redux/theme/selectors';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { updateBoard } from '../../../../redux/boards/operations';
import { selectBoards } from '../../../../redux/boards/selectors';
import loadingToaster from '../../../../helpers/loadingToast';
import successToaster from '../../../../helpers/successToast';
import errorToaster from '../../../../helpers/errorToast';

// validation

const schema = yup.object().shape({
	title: yup
		.string()
		.min(2, 'Min. title length is 2 symbol')
		.max(50, 'Max. title length is 50 symbols')
		.required('Title is required'),
	icon: yup.string(),
	background: yup.string(),
});

export default function UpdateBoard({ id, handleClose }) {
	const theme = useSelector(selectTheme);
	const dispatch = useDispatch();
	const boards = useSelector(selectBoards);
	const board = boards.find(item => item._id === id);
	const { title, background, icon } = board;


	// array for icons and backgrounds
	const numbers = (num, start) => {
		let array = [];
		for (let i = start; i <= num; i++) {
			array.push(i);
		}
		return array;
	};

	// submit function
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		defaultValues: {
			title,
			icon,
			background: background ?? '',
		},
	});

	const onSubmit = async data => {
		let { background } = data;
		if (background === '') background = null;

		const toastId = loadingToaster(theme);
		try {
			await dispatch(updateBoard({ ...data, background, id }));

			successToaster(theme, toastId);
			handleClose();
		} catch (err) {
			errorToaster(theme, toastId);
		}
	};

	return (
		<form className={css.form} onSubmit={handleSubmit(onSubmit)}>
			<div className={css.inputBox}>
				<input
					className={clsx(css.input, css[theme])}
					name="title"
					{...register('title')}
					type="text"
					placeholder="Title"
				/>
				{errors.title && <p className={css.errors}>{errors.title.message}</p>}
			</div>

			{/* icons */}
			<h4 className={clsx(css.subtitle, css[theme])}>Icons</h4>

			<div className={css.iconBox}>
				{numbers(8, 1).map(i => {
					return (
						<label key={i + Math.random()}>
							<input
								className={css.radioBtn}
								type="radio"
								name="icon"
								{...register('icon')}
								value={`icon-icon-board-${i}`}
							/>
							<svg className={clsx(css.icon, css[theme])}>
								<use href={`${sprite}#icon-icon-board-${i}`}></use>
							</svg>
						</label>
					);
				})}
			</div>

			{/* backgrounds */}
			<h4 className={clsx(css.subtitle, css[theme])}>Backgrounds</h4>

			<div className={css.bgBox}>
				{numbers(15, 0).map(i => {
					if (i === 0) {
						return (
							<label key={i + Math.random()}>
								<input
									className={css.radioBtn}
									type="radio"
									name="background"
									{...register('background')}
									value=""
								/>
								<div className={clsx(css.nullIconBox, css[theme])}>
									<svg
										className={clsx(css.nullIcon, css[theme])}
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M12.6667 14H13.3403C13.9877 14 14.3114 14 14.4899 13.865C14.6453 13.7474 14.7415 13.5677 14.7531 13.3731C14.7665 13.1497 14.5869 12.8804 14.2278 12.3417L12.2209 9.33128C11.9241 8.88616 11.7757 8.66359 11.5887 8.58604C11.4252 8.51823 11.2415 8.51823 11.078 8.58604C10.8909 8.66359 10.7426 8.88616 10.4458 9.33128L9.94969 10.0755M12.6667 14L7.54368 6.60012C7.24905 6.17455 7.10174 5.96176 6.91773 5.88696C6.75676 5.82152 6.5766 5.82152 6.41562 5.88696C6.23161 5.96176 6.0843 6.17455 5.78967 6.60012L1.82548 12.3262C1.45013 12.8684 1.26245 13.1394 1.27314 13.3649C1.28244 13.5612 1.37792 13.7435 1.53406 13.8629C1.71335 14 2.04306 14 2.70248 14H12.6667ZM14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2C13.1046 2 14 2.89543 14 4Z" />
									</svg>
								</div>
							</label>
						);
					}
					return (
						<label key={i + Math.random()}>
							<input
								className={css.radioBtn}
								type="radio"
								name="background"
								{...register('background')}
								value={`${i}`}
							/>
							<img
								className={clsx(css.bgIcon, css[theme])}
								src={`https://res.cloudinary.com/daqlrgzqj/image/upload/task-bg-tablet-${i}.jpg`}
								width="28"
								height="28"
								alt=""
							/>
						</label>
					);
				})}
			</div>

			<button className={clsx(css.btn, css[theme])} type="submit">
				<div className={clsx(css.btnIconBox, css[theme])}>
					<svg className={clsx(css.btnIcon, css[theme])}>
						<use href={`${sprite}#icon-plus`}></use>
					</svg>
				</div>

				<p className={clsx(css.btnText, css[theme])}>Edit</p>
			</button>
		</form>
	);
}
