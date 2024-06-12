import TaskCard from '../TaskCard/TaskCard';
import css from './Column.module.css';
import sprite from '../../assets/icons.svg';
import PrimeBtn from '../Buttons/PrimeBtn';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import Modal from 'react-modal';

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
	const [modalIsOpen, setIsOpen] = useState(false);
	const [newTask, setNewTask] = useState({
		title: '',
		description: '',
		priority: 'low',
		deadline: '',
	});

	// const dispatch = useDispatch();

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	const handleInputChange = e => {
		const { name, value } = e.target;
		setNewTask({ ...newTask, [name]: value });
	};

	// const handleSubmit = e => {
	// 	e.prevent.default();
	// 	dispatch(createCard(newTask));
	// 	closeModal;
	// };

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
			<PrimeBtn onBtnClick={openModal} className={css.btn}>
				<div className={css.iconWrapper}>
					<svg className={css.icon}>
						<use href={`${sprite}#icon-plus`}></use>
					</svg>
				</div>
				Add another card
			</PrimeBtn>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				contentLabel="Add Task"
			>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						name="title"
						placeholder="Title"
						value={newTask.title}
						onChange={handleInputChange}
						required
					/>
					<textarea
						name="description"
						placeholder="Description"
						value={newTask.description}
						onChange={handleInputChange}
					/>
					<select
						name="priority"
						value={newTask.priority}
						onChange={handleInputChange}
					>
						<option value="low">Low</option>
						<option value="medium">Medium</option>
						<option value="high">High</option>
					</select>
					<input
						type="date"
						name="deadline"
						value={newTask.deadline}
						onChange={handleInputChange}
						required
					/>
					<button type="submit">Add Task</button>
				</form>
				<button className={css.closeButton} onClick={closeModal}>
					Close
				</button>
			</Modal>
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
