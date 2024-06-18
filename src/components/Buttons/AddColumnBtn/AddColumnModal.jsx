import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import * as yup from 'yup';
import css from './AddColumnModal.module.css';
import staticIcons from '../../../assets/icons.svg';
import { selectTheme } from '../../../redux/theme/selectors';
import { createColumn } from '../../../redux/columns/operation';
import { useParams } from 'react-router-dom';
import loadingToaster from '../../../helpers/loadingToast';
import successToaster from '../../../helpers/successToast';
import errorToaster from '../../../helpers/errorToast';
import PrimeBtn from '../PrimeBtn';

const schema = yup.object().shape({
	title: yup.string().min(2, 'Too Short!').required('Title is required'),
});

const AddColumnModal = ({ handleCloseModal }) => {
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
	const { boardName } = useParams();

	const onSubmit = async data => {
		const toastId = loadingToaster(theme);

		try {
			await dispatch(createColumn({ ...data, boardId: boardName }));

			successToaster(theme, toastId);

			reset();
			handleCloseModal();
		} catch (err) {
			errorToaster(theme, toastId);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input
				type="text"
				name="title"
				{...register('title')}
				className={clsx(css.input, css[theme], { [css.error]: errors.title })}
				placeholder="Title"
			/>
			{errors.title && <p className={css.errorText}>{errors.title.message}</p>}
			<button type="submit" className={clsx(css.addButton, css[theme])}>
				<svg className={clsx(css.iconAddColumnBtn, css[theme])}>
					<use href={`${staticIcons}#icon-plus`}></use>
				</svg>
				<span className={clsx(css.textAddColumnBtn, css[theme])}>Add</span>
			</button>
		</form>
	);
};

export default AddColumnModal;
