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
