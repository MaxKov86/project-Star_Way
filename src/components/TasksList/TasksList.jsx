import React, { useState } from 'react';
import TaskCard from '../TaskCard/TaskCard';

const TasksList = () => {
	const [columns, setColumns] = useState({
		todo: [],
		inProgress: [],
		done: [],
	});

	const moveCard = (card, column) => {
		setColumns(prevColumns => {
			const newColumns = { ...prevColumns };
			// Видаляємо картку з її поточної колонки
			Object.keys(newColumns).forEach(key => {
				newColumns[key] = newColumns[key].filter(c => c.id !== card.id);
			});
			// Додаємо картку до нової колонки
			newColumns[column].push(card);
			return newColumns;
		});
	};
	return (
		<>
			<h1>TasksList</h1>
			<div>
				{/* Ваші колонки тут */}
				<div>
					<h2>Todo</h2>
					{columns.todo.map(card => (
						<TaskCard
							key={card.id}
							card={card}
							moveCard={column => moveCard(card, column)}
						/>
					))}
				</div>
				<div>
					<h2>In Progress</h2>
					{columns.inProgress.map(card => (
						<TaskCard
							key={card.id}
							card={card}
							moveCard={column => moveCard(card, column)}
						/>
					))}
				</div>
				<div>
					<h2>Done</h2>
					{columns.done.map(card => (
						<TaskCard
							key={card.id}
							card={card}
							moveCard={column => moveCard(card, column)}
						/>
					))}
				</div>
			</div>
			<TaskCard />
		</>
	);
};
export default TasksList;
