// export const EditModal = ({ show, handleClose, content }) => {
// 	if (!show) return null;

// 	return (
// 		<div className={css.modal}>
// 			<div className={css.modalContent}>
// 				<h2>Edit Task</h2>
// 				{content}
// 				<button onClick={handleClose}>Close</button>
// 			</div>
// 		</div>
// 	);
// };

// EditModal.propTypes = {
// 	show: PropTypes.bool.isRequired,
// 	handleClose: PropTypes.func.isRequired,
// 	content: PropTypes.node.isRequired,
// };
import PropTypes from 'prop-types';
import css from './EditModal.module.css';
import { useForm } from 'react-hook-form';
import PrimeBtn from '../../Buttons/PrimeBtn';
import sprite from '../../../assets/icons.svg';

export const EditModal = ({ show, handleClose, card, editCard }) => {
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
			deadline: card.deadline.split('T')[0],
		},
	});

	const onSubmit = async data => {
		const updatedCard = { ...card, ...data };
		try {
			await editCard(updatedCard);
			reset();
			handleClose();
		} catch (error) {
			console.error('Error updating card:', error);
		}
	};

	if (!show) return null;

	return (
		<div className={css.modalOverlay} onClick={handleClose}>
			<div className={css.modalContent} onClick={e => e.stopPropagation()}>
				<h2>Edit Task</h2>
				<form onSubmit={handleSubmit(onSubmit)} className={css.form}>
					<div className={css.inputBox}>
						<input
							className={css.input}
							type="text"
							name="title"
							placeholder="Title"
							{...register('title', { required: 'Title is required' })}
						/>
						{errors.title && (
							<p className={css.error}>{errors.title.message}</p>
						)}
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
								<use href={`${sprite}#icon-plus`}></use>
							</svg>
						</div>
						Save
					</PrimeBtn>
				</form>
				<button onClick={handleClose}>Close</button>
			</div>
		</div>
	);
};

EditModal.propTypes = {
	show: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired,
	card: PropTypes.shape({
		_id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		description: PropTypes.string,
		priority: PropTypes.string.isRequired,
		deadline: PropTypes.string.isRequired,
	}).isRequired,
	editCard: PropTypes.func.isRequired,
};
