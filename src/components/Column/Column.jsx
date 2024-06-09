import TaskCard from '../TaskCard/TaskCard';

const Column = () => {
	const tasks = [{ id: 1, title: 'Title', description: 'New task' }];
	return (
		<ul>
			<h1>Column</h1>
			{tasks.map(task => (
				<li key={task.id}>
					<TaskCard
						title={task.title}
						description={task.description}
						id={task.id}
					/>
				</li>
			))}
		</ul>
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
