import css from './AddCard.module.css';
import clsx from 'clsx';
import sprite from '../../../assets/icons.svg';
import PrimeBtn from '../../Buttons/PrimeBtn';
import { useDispatch, useSelector } from 'react-redux';
import { createCard } from '../../../redux/cards/operations';
import { useForm } from 'react-hook-form';
import { selectTheme } from '../../../redux/theme/selectors';

const AddCard = ({ columnId, closeModal }) => {
	const dispatch = useDispatch();

	const theme = useSelector(selectTheme);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
		setValue,
	} = useForm();

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
					<div className={css.radioGroup}>
						<div className={css.radioOption}>
							<input
								type="radio"
								id="withoutPriority"
								name="priority"
								value="withoutPriority"
								{...register('priority', { required: 'Priority is required' })}
								onClick={() => handleRadioClick('withoutPriority')}
							/>
						</div>
						<div className={`${css.radioOption} ${css.low}`}>
							<input
								type="radio"
								id="low"
								name="priority"
								value="low"
								{...register('priority')}
								onClick={() => handleRadioClick('low')}
							/>
						</div>
						<div className={`${css.radioOption} ${css.medium}`}>
							<input
								type="radio"
								id="medium"
								name="priority"
								value="medium"
								{...register('priority')}
								onClick={() => handleRadioClick('medium')}
							/>
						</div>
						<div className={`${css.radioOption} ${css.high}`}>
							<input
								type="radio"
								id="high"
								name="priority"
								value="high"
								{...register('priority')}
								onClick={() => handleRadioClick('high')}
							/>
						</div>
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
				<PrimeBtn className={css.btn}>
					<div className={css.iconWrapper}>
						<svg className={css.icon}>
							<use href={`${sprite}#icon-plus`}></use>
						</svg>
					</div>
					Add
				</PrimeBtn>
			</form>
		</div>
	);
};

export default AddCard;
