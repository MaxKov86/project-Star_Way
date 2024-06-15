import css from './EditCard.module.css';
import sprite from '../../../assets/icons.svg';
import PrimeBtn from '../../Buttons/PrimeBtn';
import { useDispatch, useSelector } from 'react-redux';
import { createCard } from '../../../redux/cards/operations';
import { useForm } from 'react-hook-form';
// import PropTypes from 'prop-types';
import clsx from 'clsx';
import { selectTheme } from '../../../redux/theme/selectors';

const EditCard = ({ card, closeModal }) => {
	const dispatch = useDispatch();
	const theme = useSelector(selectTheme);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {
			title: card.title,
			description: card.description,
			priority: card.priority,
			deadline: card.deadline,
		},
	});

	const onSubmit = async data => {
		const formData = { ...data, id: card.id };
		console.log('Form data before dispatch:', formData);

		try {
			const response = await dispatch(createCard(formData)).unwrap();
			console.log('Card updated:', response);
			reset();
			closeModal();
		} catch (error) {
			console.error('Error in API call:', error);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={css.form}>
			<input
				className={clsx(css.input, css[theme])}
				type="text"
				name="title"
				placeholder="Title"
				{...register('title', { required: 'Title is required' })}
			/>
			{errors.title && <p className={css.error}>{errors.title.message}</p>}

			<textarea
				className={clsx(css.textarea)}
				name="description"
				placeholder="Description"
				{...register('description')}
			/>
			{/* 
			<div>
				<select
					name="priority"
					{...register('priority', { required: 'Priority is required' })}
				>
					<option value="low">Low</option>
					<option value="medium">Medium</option>
					<option value="high">High</option>
				</select>
			</div> */}

			<p className={clsx(css.priorityTitle, css[theme])}>Label color</p>
			<div className={css.priorityBox}>
				<label>
					<button
						className={clsx(css.priorityBtn)}
						type="radio"
						name="priority"
						value="low"
					></button>
					<div className={clsx(css.priorityCircle, css.active, css.low)}>
						<div
							className={clsx(css.priorityCircleInside, css.active, css.low)}
						></div>
					</div>
				</label>

				<label>
					<button
						className={clsx(css.priorityBtn)}
						type="radio"
						name="priority"
						value="medium"
					></button>
					<div className={clsx(css.priorityCircle, css.active, css.medium)}>
						<div
							className={clsx(css.priorityCircleInside, css.active, css.medium)}
						></div>
					</div>
				</label>

				<label>
					<button
						className={clsx(css.priorityBtn)}
						type="radio"
						name="priority"
						value="high"
					></button>
					<div className={clsx(css.priorityCircle, css.active, css.high)}>
						<div
							className={clsx(css.priorityCircleInside, css.active, css.high)}
						></div>
					</div>
				</label>

				<label>
					<button
						className={clsx(css.priorityBtn)}
						type="radio"
						name="priority"
						value="without"
					></button>
					<div className={clsx(css.priorityCircle, css.without, css[theme])}>
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

			<div>
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

			<PrimeBtn className={css.btn}>
				<div className={css.iconWrapper}>
					<svg className={css.icon}>
						<use href={`${sprite}#icon-check`}></use>
					</svg>
				</div>
				Save
			</PrimeBtn>
		</form>
	);
};

// EditCard.propTypes = {
// 	card: PropTypes.shape({
// 		id: PropTypes.string.isRequired,
// 		title: PropTypes.string.isRequired,
// 		description: PropTypes.string,
// 		priority: PropTypes.oneOf(['low', 'medium', 'high']).isRequired,
// 		deadline: PropTypes.string.isRequired,
// 	}).isRequired,
// 	closeModal: PropTypes.func.isRequired,
// };

export default EditCard;
