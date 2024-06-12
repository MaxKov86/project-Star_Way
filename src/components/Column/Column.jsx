import TaskCard from '../TaskCard/TaskCard';
import css from './Column.module.css';
import sprite from '../../assets/icons.svg';
import PrimeBtn from '../Buttons/PrimeBtn';

const tasks = [
	{
		_id: '6665d226efd6a7cb8aa7cbc4',
		title: 'Зробити документацію API',
		description: 'Детально розписати кожен ендпоінт',
		priority: 'high',
		deadline: '2024-10-06T00:00:00.000Z',
		columnId: '6665ce97efd6a7cb8aa7cbae',
	},
	{
		_id: '6665d561efd6a7cb8aa7cbc9',
		title: 'Зробити state Redux',
		description: 'Детально розписати кожен ендпоінт',
		priority: 'high',
		deadline: '2024-10-06T00:00:00.000Z',
		columnId: '6665ce97efd6a7cb8aa7cbae',
	},
];
const Column = () => {
	return (
		<div>
			<h1>Column</h1>
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
			<PrimeBtn className={css.btn}>
				<div className={css.iconWrapper}>
					<svg className={css.icon}>
						<use href={`${sprite}#icon-plus`}></use>
					</svg>
				</div>
				Add another card
			</PrimeBtn>
		</div>
	);
};

export default Column;

// import { useState } from 'react';
// import TaskCard from '../TaskCard/TaskCard';
// import Modal from '../Modal/Modal';
// import TaskCardForm from '../AddCard/AddCard';

// const Column = ({ column, addTask }) => {
// 	const [showForm, setShowForm] = useState(false);

// 	const toggleForm = () => {
// 		setShowForm(!setShowForm);
// 	};

// 	const handleAddTask = task => {
// 		addTask(column._id, task);
// 		setShowForm(false);
// 	};
// 	return (
// 		<div>
// 			<h2>{column.title}</h2>
// 			<ul>
// 				{column.tasks.map(task => (
// 					<li key={task._id}>
// 						<TaskCard task={task} />
// 					</li>
// 				))}
// 			</ul>
// 			<button onClick={toggleForm}>Add another card</button>
// 			{showForm && (
// 				<Modal onClose={toggleForm}>
// 					<TaskCardForm onAddTask={handleAddTask} />
// 				</Modal>
// 			)}
// 		</div>
// 	);
// };

// export default Column;
