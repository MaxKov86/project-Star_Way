import TaskCard from '../TaskCard/TaskCard';
import css from './Column.module.css';
import sprite from '../../assets/icons.svg';
import PrimeBtn from '../Buttons/PrimeBtn';
import AddCard from './AddCard/AddCard';
import { useSelector } from 'react-redux';
import { selectCards } from '../../redux/cards/selectors';
import { useState } from 'react';
import OurModal from '../Modal/Modal';
import clsx from 'clsx';
import { selectTheme } from '../../redux/theme/selectors';

const Column = ({ id, title }) => {
	const [modalIsOpen, setIsOpen] = useState(false);
	const tasks = useSelector(selectCards).filter(task => task.columnId === id);

	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);

	const theme = useSelector(selectTheme);

	return (
		<div className={clsx(css.columnWrap, css[theme])}>
			{/* шапка колонки */}
			<div className={clsx(css.columnHead, css[theme])}>
				<h1 className={clsx(css.title, css[theme])}>{title}</h1>
				<div className={css.columnHeadIconsWrap}></div>
			</div>

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
			<PrimeBtn onBtnClick={openModal} className={css.btn}>
				<div className={css.iconWrapper}>
					<svg className={css.icon}>
						<use href={`${sprite}#icon-plus`}></use>
					</svg>
				</div>
				Add another card
			</PrimeBtn>
			{/* {modalIsOpen && (
				<OurModal isOpen={modalIsOpen} closeModal={closeModal} title="Add card">
					<AddCard columnId={columnId} closeModal={closeModal} />
				</OurModal>
			)} */}
		</div>
	);
};

export default Column;
