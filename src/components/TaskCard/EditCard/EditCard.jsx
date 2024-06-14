import css from './EditCard.module.css';
import sprite from '../../../assets/icons.svg';
import PrimeBtn from '../../Buttons/PrimeBtn';
import { useDispatch } from 'react-redux';
import { createCard } from '../../../redux/cards/operations';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';


const EditCard = ({ card, closeModal }) => {
	const dispatch = useDispatch();

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

			<div>
				<textarea
					className={css.text}
					name="description"
					placeholder="Description"
					{...register('description')}
				/>
			</div>

			<div>
				<select
					name="priority"
					{...register('priority', { required: 'Priority is required' })}
				>
					<option value="low">Low</option>
					<option value="medium">Medium</option>
					<option value="high">High</option>
				</select>
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
