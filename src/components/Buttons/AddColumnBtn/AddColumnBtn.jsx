import clsx from 'clsx';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../../redux/theme/selectors';
import staticIcons from '../../../assets/icons.svg';
import css from './AddColumnBtn.module.css';
import AddColumnModal from './AddColumnModal';

const AddColumnBtn = () => {
	const theme = useSelector(selectTheme);
	const [showModal, setShowModal] = useState(false);

	const handleOpenModal = () => {
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	return (
		<>
			<button
				className={clsx(css.addColumnBtn, css[theme])}
				onClick={handleOpenModal}
			>
				{' '}
				<svg className={clsx(css.iconAddColumnBtn, css[theme])}>
					<use href={`${staticIcons}#icon-plus`}></use>
				</svg>
				<span className={clsx(css.textAddColumnBtn, css[theme])}>
					Add another column
				</span>
			</button>
			{showModal && (
				<AddColumnModal
					handleOpenModal={showModal}
					handleCloseModal={handleCloseModal}
				/>
			)}
		</>
	);
};

export default AddColumnBtn;
