import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../redux/theme/selectors';
import sprite from '../../assets/icons.svg';
import { MoveModal } from './moveModal/moveModal';
import EditCard from './EditCard/EditCard';
import clsx from 'clsx';
import css from './TaskCard.module.css';
import PropTypes from 'prop-types';
import OurModal from '../Modal/Modal';

export default function TaskCard(
	// 	{
	// 	// title,
	// 	// description,
	// 	// id,
	// 	// priority,
	// 	// deadline,
	// }
) {

	const title = "Title"
	const description = "description"
	const id = "id"
	const priority = "low"
	const deadline = "09/06/2024"

	//для відкриття модального вікна
	const [editIsOpen, setEditIsOpen] = useState(false);

	const openEditModal = () => {
		setEditIsOpen(true);
	};

	const closeEditModal = () => {
		setEditIsOpen(false);
	};


	const [isMoveModalOpen, setIsMoveModalOpen] = useState(false);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const theme = useSelector(selectTheme);

	const handleMoveModalOpen = () => {
		setIsMoveModalOpen(true);
	};

	const handleMoveModalClose = () => {
		setIsMoveModalOpen(false);
	};

	const handleEditModalOpen = () => {
		setIsEditModalOpen(true);
	};

	const handleEditModalClose = () => {
		setIsEditModalOpen(false);
	};

	const handleDelete = () => {
		// Напишіть функцію видалення картки
	};

	const card = { id, title, description, priority, deadline };

	return (
		<div className={clsx(css.cardContainer, css[`cardContainer_${theme}`])}>
			<div className={clsx(css.stick, css[priority], css[theme])}></div>

			<h3 className={clsx(css.title, css[`title_${theme}`])}>
				{title}
			</h3>

			<p className={clsx(css.text, css[`text_${theme}`])}>
				{description}
			</p>

			<div className={clsx(css.bottomBox, css[theme])}>
				<div className={css.priorityDeadlineBox}>

					<div className={css.priorityBox}>
						<h4 className={clsx(css.bottomTitle, css[`bottomTitle_${theme}`])}>
							Priority
						</h4>

						<div className={css.priorityFlexbox}>
							<div className={clsx(css.priorityCircle, css[priority], css[theme])}></div>
							<p className={clsx(css.priorityText, css[`priorityText_${theme}`])}>
								{priority}
							</p>
						</div>

					</div>


					<div className={css.deadlineBox}>

						<h4 className={clsx(css.bottomTitle, css[`bottomTitle_${theme}`])}>
							Deadline
						</h4>

						<p className={clsx(css.deadlineText, css[`deadlineText_${theme}`])}>
							{deadline}
						</p>

					</div>

				</div>

				<div className={css.iconBox}>

					<div className={css.iconRingBox}>
						<div className={clsx(css.filter, css[theme])}></div>
						<svg className={clsx(css.iconRing, css[theme])}>
							<use href={`${sprite}#icon-ring`} />
						</svg>
					</div>

					<button className={css.btn} type="button">
						<svg
							className={clsx(css.icon, css[`icon_${theme}`])}
							onClick={handleMoveModalOpen}
						>
							<use href={`${sprite}#icon-arrow-circle-broken-right`} />
						</svg>
					</button>

					<button className={css.btn} onClick={openEditModal} type="button">
						<svg
							className={clsx(css.icon, css[`icon_${theme}`])}
						>
							<use href={`${sprite}#icon-pencil`} />
						</svg>
					</button>

					<button className={css.btn} type="button">
						<svg
							className={clsx(css.icon, css[`icon_${theme}`])}
							onClick={handleDelete}
						>
							<use href={`${sprite}#icon-trash`} />
						</svg>
					</button>
				</div>
			</div>

			{/* <MoveModal
				show={isMoveModalOpen}
				handleClose={handleMoveModalClose}
				handleMove={newColumnId => moveCard(id, newColumnId)}
			/> */}

			{/* <EditModal
				show={isEditModalOpen}
				handleClose={handleEditModalClose}
				card={card}
				editCard={editCard}
			/> */}

			<OurModal
				isOpen={editIsOpen}
				closeModal={closeEditModal}
				title="Edit card"
			>
				<EditCard card={card} closeModal={closeEditModal} />
			</OurModal>
		</div>
	);
}

// TaskCard.propTypes = {
// 	title: PropTypes.string.isRequired,
// 	description: PropTypes.string,
// 	id: PropTypes.string.isRequired,
// };
