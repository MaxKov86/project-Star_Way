// import React, { useState } from 'react';
// import css from './TaskCard.module.css';
// import sprite from '../../assets/icons.svg';
// import Modal from './Modal.jsx';

// export default function TaskCard({ moveCard }) {
// 	const [showModal, setShowModal] = useState(false);
// 	const [selectedOption, setSelectedOption] = useState('default');

// 	const handleOptionChange = event => {
// 		setSelectedOption(event.target.value);
// 	};

// 	const getBorderClass = () => {
// 		switch (selectedOption) {
// 			case 'option1':
// 				return css.borderColor1;
// 			case 'option2':
// 				return css.borderColor2;
// 			case 'option3':
// 				return css.borderColor3;
// 			default:
// 				return css.borderDefault;
// 		}
// 	};

// 	const openModal = () => setShowModal(true);
// 	const closeModal = () => setShowModal(false);
// 	const handleMove = column => {
// 		moveCard(column);
// 		closeModal();
// 	};

// 	return (
// 		<div className={css.cardContainer}>
// 			<div className={`${css.border} ${getBorderClass()}`}></div>
// 			<div className={css.content}>
// 				<h3 className={css.title}>The Watch Spot Design</h3>
// 				<p className={css.text}>
// 					Create a visually stunning and eye-catching watch dial design that
// 					embodies our brands essence of sleek aesthetics and modern elegance.
// 					Your design should be unique, innovative, and reflective of the latest
// 					trends in watch design.
// 				</p>
// 			</div>
// 			<div className={css.line}></div>
// 			<div className={css.prioritiTimeBox}>
// 				<div className={css.priorityBox}>
// 					<h4 className={css.priorityTitle}>Priority</h4>
// 					<div>
// 						<label className={css.label}>
// 							<input
// 								type="radio"
// 								name="option"
// 								value="option1"
// 								onChange={handleOptionChange}
// 								className={css.radio}
// 							/>
// 							Low
// 						</label>
// 						<label className={css.label}>
// 							<input
// 								type="radio"
// 								name="option"
// 								value="option2"
// 								onChange={handleOptionChange}
// 								className={css.radio}
// 							/>
// 							Medium
// 						</label>
// 						<label className={css.label}>
// 							<input
// 								type="radio"
// 								name="option"
// 								value="option3"
// 								onChange={handleOptionChange}
// 								className={css.radio}
// 							/>
// 							High
// 						</label>
// 					</div>
// 				</div>
// 				<div>
// 					<h4 className={css.priorityTitle}>Deadline</h4>
// 					<div className={css.dateDedline}>09/06/2024</div>
// 					{/* <input type="date" className={css.dateInput} /> */}
// 				</div>
// 				<div className={css.iconBox}>
// 					<svg onClick={openModal}>
// 						<use href={`${sprite}#icon-ring`} />
// 					</svg>
// 					<svg onClick={openModal}>
// 						<use href={`${sprite}#icon-arrow-circle-broken-right`} />
// 					</svg>
// 					<svg>
// 						<use href={`${sprite}#icon-pencil`} />
// 					</svg>
// 					<svg>
// 						<use href={`${sprite}#icon-trash`} />
// 					</svg>
// 				</div>
// 			</div>
// 			<Modal
// 				show={showModal}
// 				handleClose={closeModal}
// 				handleMove={handleMove}
// 			/>
// 		</div>
// 	);
// }
import React, { useState } from 'react';
import sprite from '../../assets/icons.svg';
import { MoveModal, EditeModal } from './moveModal.jsx';
import css from './TaskCard.module.css';

export default function TaskCard({ moveCard }) {
	const [selectedPriority, setSelectedPriority] = useState('Low');
	const [isMoveModalOpen, setIsMoveModalOpen] = useState(false);
	const [isEditeModalOpen, setIsEditeModalOpen] = useState(false);

	const handlePriorityChange = priority => {
		setSelectedPriority(priority);
	};

	const handleMoveModalOpen = () => {
		setIsMoveModalOpen(true);
	};

	const handleMoveModalClose = () => {
		setIsMoveModalOpen(false);
	};

	const handleEditeModalOpen = () => {
		setIsEditeModalOpen(true);
	};

	const handleEditeModalClose = () => {
		setIsEditeModalOpen(false);
	};

	return (
		<div className={css.cardContainer}>
			<div className={css.content}>
				<h3 className={css.title}>The Watch Spot Design</h3>
				<p className={css.text}>
					Create a visually stunning and eye-catching watch dial design that
					embodies our brand's essence of sleek aesthetics and modern elegance.
					Your design should be unique, innovative, and reflective of the latest
					trends in watch design.
				</p>
			</div>
			<div className={css.line}></div>
			<div className={css.priorityTimeBox}>
				<div className={css.priorityBox}>
					<h4 className={css.priorityTitle}>Priority</h4>
					<div>
						<label className={css.label}>
							<input
								type="radio"
								name="priority"
								className={css.radio}
								checked={selectedPriority === 'Low'}
								onChange={() => handlePriorityChange('Low')}
							/>
							Low
						</label>
						<label className={css.label}>
							<input
								type="radio"
								name="priority"
								className={css.radio}
								checked={selectedPriority === 'Medium'}
								onChange={() => handlePriorityChange('Medium')}
							/>
							Medium
						</label>
						<label className={css.label}>
							<input
								type="radio"
								name="priority"
								className={css.radio}
								checked={selectedPriority === 'High'}
								onChange={() => handlePriorityChange('High')}
							/>
							High
						</label>
					</div>
				</div>
				<div>
					<h4 className={css.priorityTitle}>Deadline</h4>
					<div className={css.dateDedline}>09/06/2024</div>
				</div>
				<div className={css.iconBox}>
					<svg>
						<use href={`${sprite}#icon-ring`} />
					</svg>
					<svg onClick={handleMoveModalOpen}>
						<use href={`${sprite}#icon-arrow-circle-broken-right`} />
					</svg>
					<svg onClick={handleEditeModalOpen}>
						<use href={`${sprite}#icon-pencil`} />
					</svg>
					<svg>
						<use href={`${sprite}#icon-trash`} />
					</svg>
				</div>
			</div>
			<MoveModal
				show={isMoveModalOpen}
				handleClose={handleMoveModalClose}
				handleMove={moveCard}
			/>
			<EditeModal
				show={isEditeModalOpen}
				handleClose={handleEditeModalClose}
				content={<div>Content of Edite modal</div>}
			/>
		</div>
	);
}
