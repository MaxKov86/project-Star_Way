import clsx from 'clsx';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../../redux/theme/selectors';
import staticIcons from '../../../assets/icons.svg';
import css from './AddColumnBtn.module.css';
import AddColumnModal from './AddColumnModal';
import OurModal from '../../Modal/Modal';

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
		<div className={clsx(css.container, css[theme])}>
			<button className={css.addColumnBtn} onClick={handleOpenModal}>
				<svg className={css.iconAddColumnBtn}>
					<use href={`${staticIcons}#icon-plus`}></use>
				</svg>
				<span className={css.textAddColumnBtn}>Add another column</span>
			</button>
			{showModal && (
				<OurModal
					isOpen={showModal}
					closeModal={handleCloseModal}
					title="Add column"
				>
					<AddColumnModal handleCloseModal={handleCloseModal} />
				</OurModal>
			)}
		</div>
	);
};

export default AddColumnBtn;
