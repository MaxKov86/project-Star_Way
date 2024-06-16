import clsx from 'clsx';
import { selectTheme } from '../../../redux/theme/selectors';
import { useDispatch, useSelector } from 'react-redux';
import css from './ColumnHead.module.css';
import sprite from '../../../assets/icons.svg';
import { deleteColumn, updateColumn } from '../../../redux/columns/operation';
import EditColumnModal from '../editColumn/EditColumnModal';
import { useState } from 'react';
import loadingToaster from '../../../helpers/loadingToast';
import successToaster from '../../../helpers/successToast';
import errorToaster from '../../../helpers/errorToast';

const ColumnHead = ({ title, id }) => {
	const theme = useSelector(selectTheme);
	const dispatch = useDispatch();

	const [showModal, setShowModal] = useState(false);
	const handleModal = () => {
		setShowModal(!showModal);
	};

	const handleDelete = async () => {
		const toastId = loadingToaster(theme);

		try {
			await dispatch(deleteColumn(id));
			successToaster(theme, toastId)
		} catch (err) {
			errorToaster(theme, toastId);
		}
	};

	const handleUpdate = () => {
		dispatch(updateColumn(id));
	};

	return (
		<div className={clsx(css.columnHead, css[theme])}>
			<h1 className={clsx(css.title, css[theme])}>{title}</h1>
			<div className={css.columnHeadIconsWrap}>
				{/* icon buttons */}
				<button className={css.btn} onClick={handleModal} type="button">
					<svg className={clsx(css.icon, css[`icon_${theme}`])}>
						<use href={`${sprite}#icon-pencil`} />
					</svg>
				</button>

				<button className={css.btn} onClick={handleDelete} type="button">
					<svg className={clsx(css.icon, css[`icon_${theme}`])}>
						<use href={`${sprite}#icon-trash`} />
					</svg>
				</button>
				{showModal && (
					<EditColumnModal
						handleOpenModal={showModal}
						handleCloseModal={handleModal}
						columnId={id}
						value={title}
					/>
				)}
			</div>
		</div>
	);
};

export default ColumnHead;
