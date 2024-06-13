import TaskCard from '../TaskCard/TaskCard';
import css from './Column.module.css';
import sprite from '../../assets/icons.svg';
import PrimeBtn from '../Buttons/PrimeBtn';
import AddCard from './AddCard/AddCard';
import { useSelector } from 'react-redux';
import { selectCards } from '../../redux/cards/selectors';
import { useState } from 'react';
import OurModal from '../Modal/Modal';

const Column = ({ columnId, columnName }) => {
	const [modalIsOpen, setIsOpen] = useState(false);
	const tasks = useSelector(selectCards).filter(
		task => task.columnId === columnId
	);

	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);

	return (
		<div>
			<h1>{columnName}</h1>
			<ul>
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
			<PrimeBtn onBtnClick={openModal} className={css.btn}>
				<div className={css.iconWrapper}>
					<svg className={css.icon}>
						<use href={`${sprite}#icon-plus`}></use>
					</svg>
				</div>
				Add another card
			</PrimeBtn>
			{modalIsOpen && (
				<OurModal isOpen={modalIsOpen} closeModal={closeModal} title="Add card">
					<AddCard columnId={columnId} closeModal={closeModal} />
				</OurModal>
			)}
		</div>
	);
};

export default Column;
