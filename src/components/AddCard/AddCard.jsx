// import React, { useState } from 'react';

// const TaskCardForm = ({ onAddTask }) => {
// 	const [title, setTitle] = useState('');
// 	const [description, setDescription] = useState('');
// 	const [priority, setPriority] = useState('without');
// 	const [deadline, setDeadline] = useState('');

// 	const handleSubmit = e => {
// 		e.preventDefault();
// 		onAddTask({
// 			title,
// 			description,
// 			priority,
// 			deadline,
// 			_id: Date.now().toString(), // Temporary ID for the task card
// 		});
// 		setTitle('');
// 		setDescription('');
// 		setPriority('without');
// 		setDeadline('');
// 	};

// 	return (
// 		<form onSubmit={handleSubmit} className="task-card-form">
// 			<input
// 				type="text"
// 				placeholder="Title"
// 				value={title}
// 				onChange={e => setTitle(e.target.value)}
// 				required
// 			/>
// 			<textarea
// 				placeholder="Description"
// 				value={description}
// 				onChange={e => setDescription(e.target.value)}
// 			/>
// 			<div>
// 				<label>
// 					<input
// 						type="radio"
// 						value="high"
// 						checked={priority === 'high'}
// 						onChange={e => setPriority(e.target.value)}
// 					/>
// 					High
// 				</label>
// 				<label>
// 					<input
// 						type="radio"
// 						value="medium"
// 						checked={priority === 'medium'}
// 						onChange={e => setPriority(e.target.value)}
// 					/>
// 					Medium
// 				</label>
// 				<label>
// 					<input
// 						type="radio"
// 						value="low"
// 						checked={priority === 'low'}
// 						onChange={e => setPriority(e.target.value)}
// 					/>
// 					Low
// 				</label>
// 				<label>
// 					<input
// 						type="radio"
// 						value="without"
// 						checked={priority === 'without'}
// 						onChange={e => setPriority(e.target.value)}
// 					/>
// 					Without
// 				</label>
// 			</div>
// 			<input
// 				type="date"
// 				value={deadline}
// 				onChange={e => setDeadline(e.target.value)}
// 				min={new Date().toISOString().split('T')[0]}
// 			/>
// 			<button type="submit">Add</button>
// 		</form>
// 	);
// };

// export default TaskCardForm;
