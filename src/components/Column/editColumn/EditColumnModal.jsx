import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import * as yup from 'yup';
import css from './EditColumnModal.module.css';
import staticIcons from '../../../assets/icons.svg';
import { selectTheme } from '../../../redux/theme/selectors';
import { updateColumn } from '../../../redux/columns/operation';

const schema = yup.object().shape({
	title: yup.string().min(2, 'Too Short!').required('Title is required'),
});

const EditColumnModal = ({ handleOpenModal, handleCloseModal, columnId }) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const theme = useSelector(selectTheme);
	const dispatch = useDispatch();

	const onSubmit = data => {
		dispatch(updateColumn({ columnId, ...data }));
		reset();
		handleCloseModal();
	};

	if (!handleOpenModal) return null;

	return (
		<div className={css.modalOverlay}>
			<div className={clsx(css.modal, css[theme])}>
				<h2 className={clsx(css.modalTitle, css[theme])}>Edit Column</h2>
				<button
					className={clsx(css.closeButton, css[theme])}
					onClick={handleCloseModal}
				>
					<svg className={clsx(css.btnCloseIcon, css[theme])}>
						<use href={`${staticIcons}#icon-x-close`}></use>
					</svg>
				</button>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input
						type="text"
						name="title"
						{...register('title')}
						className={clsx(css.input, css[theme], {
							[css.error]: errors.title,
						})}
						placeholder="Title"
					/>
					{errors.title && (
						<p className={css.errorText}>{errors.title.message}</p>
					)}
					<button type="submit" className={clsx(css.addButton, css[theme])}>
						<svg className={clsx(css.iconAddColumnBtn, css[theme])}>
							<use href={`${staticIcons}#icon-plus`}></use>
						</svg>
						<span className={clsx(css.textAddColumnBtn, css[theme])}>Add</span>
					</button>
				</form>
			</div>
		</div>
	);
};

export default EditColumnModal;
