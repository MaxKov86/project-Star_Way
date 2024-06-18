import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import * as yup from 'yup';
import css from './EditColumnModal.module.css';
import staticIcons from '../../../assets/icons.svg';
import { selectTheme } from '../../../redux/theme/selectors';
import { updateColumn } from '../../../redux/columns/operation';
import loadingToaster from '../../../helpers/loadingToast';
import successToaster from '../../../helpers/successToast';
import errorToaster from '../../../helpers/errorToast';

const schema = yup.object().shape({
	title: yup.string().min(2, 'Too Short!').required('Title is required'),
});

const EditColumnModal = ({ handleCloseModal, columnId, value }) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		defaultValues: { title: value },
	});

	const theme = useSelector(selectTheme);
	const dispatch = useDispatch();

	const onSubmit = async data => {
		const toastId = loadingToaster(theme);

		try {
			await dispatch(updateColumn({ columnId, ...data }));

			successToaster(theme, toastId);
			reset();
			handleCloseModal();
		} catch (err) {
			errorToaster(theme, toastId);
		}
	};

	return (
		<div>
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
	);
};

export default EditColumnModal;
