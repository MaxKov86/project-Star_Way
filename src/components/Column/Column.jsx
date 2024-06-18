import TaskCard from '../TaskCard/TaskCard';
import css from './Column.module.css';
import sprite from '../../assets/icons.svg';
import AddCard from './AddCard/AddCard';
import { useSelector } from 'react-redux';
import { selectFilteredCards } from '../../redux/cards/selectors';
import { useState, useEffect } from 'react';
import OurModal from '../Modal/Modal';
import clsx from 'clsx';
import { selectTheme } from '../../redux/theme/selectors';
import ColumnHead from './ColumnHead/ColumnHead';
import PrimeBtn from '../Buttons/PrimeBtn';

const Column = ({ id, title }) => {
	const theme = useSelector(selectTheme);
	const [modalIsOpen, setIsOpen] = useState(false);
	const [isMoveModalOpen, setMoveModalOpen] = useState(null);

	const tasks = useSelector(selectFilteredCards).filter(
		task => task.columnId === id
	);

	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);

	// Handle clicks outside of the modal
	const handleClickOutside = event => {
		if (
			isMoveModalOpen &&
			!event.target.closest(`[data-modal-id="${isMoveModalOpen}"]`) &&
			!event.target.closest(`[data-toggle-id="${isMoveModalOpen}"]`)
		) {
			setMoveModalOpen(null);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isMoveModalOpen]);

	return (
		<div className={clsx(css.columnWrap, css[theme])}>
			<ColumnHead title={title} id={id} />

			{/* список карток */}
			{tasks && tasks.length > 0 && (
				<ul className={clsx(css.cardList, css[theme])}>
					{tasks.map(task => (
						<li key={task._id}>
							<TaskCard
								title={task.title}
								description={task.description}
								priority={task.priority}
								deadline={task.deadline}
								id={task._id}
								columnId={id}
								isMoveModalOpen={isMoveModalOpen}
								setMoveModalOpen={setMoveModalOpen}
							/>
						</li>
					))}
				</ul>
			)}

			{/* add another card button*/}
			<PrimeBtn onBtnClick={openModal} additionalClass={css.addCardBtn}>
				<div className={clsx(css.iconWrapper, css[theme])}>
					<svg className={clsx(css.icon, css[theme])}>
						<use href={`${sprite}#icon-plus`}></use>
					</svg>
				</div>
				Add another card
			</PrimeBtn>

			{modalIsOpen && (
				<OurModal isOpen={modalIsOpen} closeModal={closeModal} title="Add card">
					<AddCard columnId={id} closeModal={closeModal} />
				</OurModal>
			)}
		</div>
	);
};

export default Column;
