import css from './EditCard.module.css';
import sprite from '../../../assets/icons.svg';
import PrimeBtn from '../../Buttons/PrimeBtn';
import { useDispatch, useSelector } from 'react-redux';
import { updateCard } from '../../../redux/cards/operations';
import { useForm, Controller } from 'react-hook-form';
import clsx from 'clsx';
import { selectTheme } from '../../../redux/theme/selectors';
import CustomDatepicker from '../CustomDatePicker/CustomDatePicker';

const EditCard = ({ card, closeModal }) => {
	const dispatch = useDispatch();
	const theme = useSelector(selectTheme);

	const {
		register,
		handleSubmit,
		reset,
		control,
		formState: { errors },
	} = useForm({
		defaultValues: {
			title: card.title,
			description: card.description,
			priority: card.priority,
			deadline: card.deadline ? card.deadline[0].split('T')[0] : null,
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

				<Controller
					name="deadline"
					control={control}
					render={({ field }) => (
						<CustomDatepicker value={field.value} onChange={field.onChange} />
					)}
				/>
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

export default EditCard;
