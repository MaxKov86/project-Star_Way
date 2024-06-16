import TaskCard from '../TaskCard/TaskCard';
import css from './Column.module.css';
import sprite from '../../assets/icons.svg';
import AddCard from './AddCard/AddCard';
import { useSelector } from 'react-redux';
import { selectCards } from '../../redux/cards/selectors';
import { useState } from 'react';
import OurModal from '../Modal/Modal';
import clsx from 'clsx';
import { selectTheme } from '../../redux/theme/selectors';
import ColumnHead from './ColumnHead/ColumnHead';

const Column = ({ id, title }) => {
	const [modalIsOpen, setIsOpen] = useState(false);
	const tasks = useSelector(selectCards).filter(task => task.columnId === id);

	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);

	const theme = useSelector(selectTheme);

	return (
		<div className={clsx(css.columnWrap, css[theme])}>
			<ColumnHead title={title} id={id} />

			{/* список карток */}
			{tasks && tasks.length > 0 && (
				<ul className={css.cardList}>
					{tasks.map(task => (
						<li key={task._id}>
							<TaskCard
								title={task.title}
								description={task.description}
								priority={task.priority}
								deadline={task.deadline}
								id={task._id}
							/>
						</li>
					))}
				</ul>
			)}

			{/* add another card button*/}
			<button
				onClick={openModal}
				className={clsx(css.btn, css[theme])}
				type="button"
			>
				<svg className={clsx(css.icon, css[theme])}>
					<use href={`${sprite}#icon-plus`}></use>
				</svg>
				<span className={clsx(css.textAddCard, css[theme])}>
					Add another card
				</span>
			</button>

			{modalIsOpen && (
				<OurModal isOpen={modalIsOpen} closeModal={closeModal} title="Add card">
					<AddCard columnId={id} closeModal={closeModal} />
				</OurModal>
			)}
		</div>
	);
};

export default Column;
