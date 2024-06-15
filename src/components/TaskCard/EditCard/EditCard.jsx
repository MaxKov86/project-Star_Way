import css from './EditCard.module.css';
import sprite from '../../../assets/icons.svg';
import PrimeBtn from '../../Buttons/PrimeBtn';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCards, updateCard } from '../../../redux/cards/operations';
import { useForm } from 'react-hook-form';
// import PropTypes from 'prop-types';
import clsx from 'clsx';
import { selectTheme } from '../../../redux/theme/selectors';
import CustomDatepicker from '../CustomDatePicker/CustomDatePicker';

const EditCard = ({ card, closeModal }) => {
	const dispatch = useDispatch();
	const theme = useSelector(selectTheme);
	const deadline = card.deadline.split('T')[0];

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
			deadline: deadline,
		},
	});

	const onSubmit = async data => {
		const formData = { ...data, id: card.id };

		try {
			dispatch(updateCard(formData));
			reset();
			closeModal();
		} catch (error) {
			console.error('Error in API call:', error);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={css.form}>
			<div className={css.inputBox}>
				<input
					className={clsx(css.input, css[theme])}
					type="text"
					name="title"
					placeholder="Title"
					{...register('title', { required: 'Title is required' })}
				/>
				{errors.title && <p className={css.error}>{errors.title.message}</p>}
			</div>

			<textarea
				className={clsx(css.textarea, css[theme])}
				name="description"
				placeholder="Description"
				{...register('description')}
			/>

			<p className={clsx(css.title, css[theme])}>Label color</p>
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
							className={clsx(css.priorityCircleInside, css.active, css.low)}
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
							className={clsx(css.priorityCircleInside, css.active, css.medium)}
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
							className={clsx(css.priorityCircleInside, css.active, css.high)}
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

			<div className={css.deadlineBox}>
				<p className={clsx(css.title, css[theme])}>Deadline</p>

				{/* <input
					type="date"
					name="deadline"
					{...register('deadline', { required: 'Deadline is required' })}
					min={new Date().toISOString().split('T')[0]}
				/>
				{errors.deadline && (
					<p className={css.error}>{errors.deadline.message}</p>
				)} */}
				<CustomDatepicker />
			</div>

			<PrimeBtn>
				<div className={clsx(css.iconWrapper, css[theme])}>
					<svg className={clsx(css.icon, css[theme])}>
						<use href={`${sprite}#icon-plus`}></use>
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
