import css from './AddCard.module.css';
import clsx from 'clsx';
import sprite from '../../../assets/icons.svg';
import { useDispatch, useSelector } from 'react-redux';
import { createCard } from '../../../redux/cards/operations';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { selectTheme } from '../../../redux/theme/selectors';
import * as yup from 'yup';

const AddCard = ({ columnId, closeModal }) => {
	const dispatch = useDispatch();

	const theme = useSelector(selectTheme);
	const schema = yup.object().shape({
		title: yup.string().min(2, 'Too Short!').required('Title is required'),
	});

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
		setValue,
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = data => {
		dispatch(createCard({ ...data, columnId }));
		reset();
		closeModal();
	};

	const handleRadioClick = value => {
		setValue('priority', value);
	};

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)} className={css.form}>
				<div className={css.inputBox}>
					<input
						className={css.input}
						type="text"
						name="title"
						placeholder="Title"
						{...register('title', { required: 'Title is required' })}
					/>
					{errors.title && <p className={css.error}>{errors.title.message}</p>}
				</div>
				<div className={css.textBox}>
					<textarea
						className={css.text}
						name="description"
						placeholder="Description"
						{...register('description')}
					/>
				</div>
				<div className={css.radioBox}>
					<h5 className={clsx(css.titleLabelColor, css[theme])}>Label color</h5>
					<div className={css.priorityBox}>
						<label>
							<input
								className={clsx(css.priorityBtn)}
								type="radio"
								name="priority"
								value="low"
								{...register('priority')}
							/>

							<div className={clsx(css.priorityCircle, css.active, css.low)}>
								<div
									className={clsx(
										css.priorityCircleInside,
										css.active,
										css.low
									)}
								></div>
							</div>
						</label>

						<label>
							<input
								className={clsx(css.priorityBtn)}
								type="radio"
								name="priority"
								value="medium"
								{...register('priority')}
							/>

							<div className={clsx(css.priorityCircle, css.active, css.medium)}>
								<div
									className={clsx(
										css.priorityCircleInside,
										css.active,
										css.medium
									)}
								></div>
							</div>
						</label>

						<label>
							<input
								className={clsx(css.priorityBtn)}
								type="radio"
								name="priority"
								value="high"
								{...register('priority')}
							/>

							<div className={clsx(css.priorityCircle, css.active, css.high)}>
								<div
									className={clsx(
										css.priorityCircleInside,
										css.active,
										css.high
									)}
								></div>
							</div>
						</label>

						<label>
							<input
								className={clsx(css.priorityBtn)}
								type="radio"
								name="priority"
								value="without"
								{...register('priority')}
							/>

							<div
								className={clsx(css.priorityCircle, css.without, css[theme])}
							>
								<div
									className={clsx(
										css.priorityCircleInside,
										css.active,
										css.without,
										css[theme]
									)}
								></div>
							</div>
						</label>
					</div>
				</div>
				<div className={css.deadlineBox}>
					<h5 className={clsx(css.titleLabelColor, css[theme])}>Deadline</h5>
					<input
						type="date"
						name="deadline"
						{...register('deadline', { required: 'Deadline is required' })}
						min={new Date().toISOString().split('T')[0]}
					/>
					{errors.deadline && (
						<p className={css.error}>{errors.deadline.message}</p>
					)}
				</div>

				<button className={clsx(css.btn, css[theme])} type="submit">
					<svg className={clsx(css.icon, css[theme])}>
						<use href={`${sprite}#icon-plus`}></use>
					</svg>
					<span className={clsx(css.textAdd, css[theme])}>Add</span>
				</button>
			</form>
		</div>
	);
};

export default AddCard;
