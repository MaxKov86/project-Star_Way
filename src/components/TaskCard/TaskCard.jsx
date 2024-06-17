import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from '../../redux/theme/selectors';
import sprite from '../../assets/icons.svg';
import EditCard from './EditCard/EditCard';
import clsx from 'clsx';
import css from './TaskCard.module.css';
import OurModal from '../Modal/Modal';
import { deleteCard } from '../../redux/cards/operations';
import loadingToaster from '../../helpers/loadingToast';
import successToaster from '../../helpers/successToast';
import errorToaster from '../../helpers/errorToast';
import ColumnSelector from './moveModal/ColumnSelector';
import { selectColumns } from '../../redux/columns/selectors';
import { useParams } from 'react-router-dom';

export default function TaskCard({
	title,
	description,
	id,
	priority,
	deadline,
	columnId,
	isMoveModalOpen,
	setMoveModalOpen,
}) {
	const dispatch = useDispatch();
	const theme = useSelector(selectTheme);
	const card = { id, title, description, priority, deadline };
	const oneDay = 24 * 60 * 60 * 1000;

	const renderedDeadline = deadline
		? new Date(deadline).toLocaleDateString().split('.').join('/')
		: 'No deadline';

	const ring = new Date(deadline) - new Date();

	const [editIsOpen, setEditIsOpen] = useState(false);
	const openEditModal = () => setEditIsOpen(true);
	const closeEditModal = () => setEditIsOpen(false);

	// Function to toggle the modal open/close
	const handleMoveCardModal = () => {
		setMoveModalOpen(prevState => (prevState === id ? null : id));
	};

	const modalRef = useRef(null);

	const handleDelete = async () => {
		const toastId = loadingToaster(theme);

		try {
			await dispatch(deleteCard(id));
			successToaster(theme, toastId);
		} catch (err) {
			errorToaster(theme, toastId);
		}
	};

	const { boardName } = useParams();
	const columns = useSelector(selectColumns);
	const boardColumns = columns.filter(column => column.boardId === boardName);

	return (
		<div className={clsx(css.cardContainer, css[`cardContainer_${theme}`])}>
			<div className={clsx(css.stick, css[priority], css[theme])}></div>

			<h3 className={clsx(css.title, css[`title_${theme}`])}>{title}</h3>

			<p className={clsx(css.text, css[`text_${theme}`])}>{description}</p>

			<div className={clsx(css.bottomBox, css[theme])}>
				<div className={css.priorityDeadlineBox}>
					<div className={css.priorityBox}>
						<h4 className={clsx(css.bottomTitle, css[`bottomTitle_${theme}`])}>
							Priority
						</h4>

						<div className={css.priorityFlexbox}>
							<div
								className={clsx(css.priorityCircle, css[priority], css[theme])}
							></div>
							<p
								className={clsx(css.priorityText, css[`priorityText_${theme}`])}
							>
								{priority}
							</p>
						</div>
					</div>

					<div className={css.deadlineBox}>
						<h4 className={clsx(css.bottomTitle, css[`bottomTitle_${theme}`])}>
							Deadline
						</h4>

						<p className={clsx(css.deadlineText, css[`deadlineText_${theme}`])}>
							{renderedDeadline}
						</p>
					</div>
				</div>

				<div className={css.iconBox}>
					{deadline && ring <= oneDay && (
						<div className={css.iconRingBox}>
							<div className={clsx(css.filter, css[theme])}></div>
							<svg className={clsx(css.iconRing, css[theme])}>
								<use href={`${sprite}#icon-ring`} />
							</svg>
						</div>
					)}

					<button
						className={css.btn}
						onClick={handleMoveCardModal}
						type="button"
						data-toggle-id={id}
						disabled={boardColumns.length === 1}
					>
						<svg className={clsx(css.icon, css[`icon_${theme}`])}>
							<use href={`${sprite}#icon-arrow-circle-broken-right`} />
						</svg>
					</button>

					<button className={css.btn} onClick={openEditModal} type="button">
						<svg className={clsx(css.icon, css[`icon_${theme}`])}>
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

			{isMoveModalOpen === id && (
				<div style={{ position: 'relative' }} ref={modalRef} data-modal-id={id}>
					<ColumnSelector
						cardId={card.id}
						columnId={columnId}
						handleClose={() => setMoveModalOpen(null)}
					/>
				</div>
			)}

			{editIsOpen && (
				<OurModal
					isOpen={editIsOpen}
					closeModal={closeEditModal}
					title="Edit card"
				>
					<EditCard card={card} closeModal={closeEditModal} />
				</OurModal>
			)}
		</div>
	);
}
