import css from './TaskCard.module.css';
import sprite from '../../assets/icons.svg';

// export default function TaskCard() {
// 	return (
// 		<div className={css.cardContainer}>
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
// 							<input type="radio" name="option" className={css.radio} />
// 							Low
// 						</label>
// 					</div>
// 				</div>
// 				<div>
// 					<h4 className={css.priorityTitle}>Deadline</h4>
// 					<input type="date" className={css.dateInput} />
// 				</div>
// 				<div className={css.iconBox}>
// 					<svg>
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
// 		</div>
// 	);
// }
import React, { useState } from 'react';
// import css from './TaskCard.module.css';
// import sprite from '../../assets/icons.svg';
import Modal from './Modal.jsx';

export default function TaskCard({ moveCard }) {
	const [showModal, setShowModal] = useState(false);
	const [selectedOption, setSelectedOption] = useState('default');

	const handleOptionChange = event => {
		setSelectedOption(event.target.value);
	};

	const getBorderClass = () => {
		switch (selectedOption) {
			case 'option1':
				return css.borderColor1;
			case 'option2':
				return css.borderColor2;
			case 'option3':
				return css.borderColor3;
			default:
				return css.borderDefault;
		}
	};

	const openModal = () => setShowModal(true);
	const closeModal = () => setShowModal(false);
	const handleMove = column => {
		moveCard(column);
		closeModal();
	};

	return (
		<div className={css.cardContainer}>
			<div className={`${css.border} ${getBorderClass()}`}></div>
			<div className={css.content}>
				<h3 className={css.title}>The Watch Spot Design</h3>
				<p className={css.text}>
					Create a visually stunning and eye-catching watch dial design that
					embodies our brands essence of sleek aesthetics and modern elegance.
					Your design should be unique, innovative, and reflective of the latest
					trends in watch design.
				</p>
			</div>
			<div className={css.line}></div>
			<div className={css.prioritiTimeBox}>
				<div className={css.priorityBox}>
					<h4 className={css.priorityTitle}>Priority</h4>
					<div>
						<label className={css.label}>
							<input
								type="radio"
								name="option"
								value="option1"
								onChange={handleOptionChange}
								className={css.radio}
							/>
							Low
						</label>
						<label className={css.label}>
							<input
								type="radio"
								name="option"
								value="option2"
								onChange={handleOptionChange}
								className={css.radio}
							/>
							Medium
						</label>
						<label className={css.label}>
							<input
								type="radio"
								name="option"
								value="option3"
								onChange={handleOptionChange}
								className={css.radio}
							/>
							High
						</label>
					</div>
				</div>
				<div>
					<h4 className={css.priorityTitle}>Deadline</h4>
					<input type="date" className={css.dateInput} />
				</div>
				<div className={css.iconBox}>
					<svg onClick={openModal}>
						<use href={`${sprite}#icon-arrow-circle-broken-right`} />
					</svg>
					<svg>
						<use href={`${sprite}#icon-pencil`} />
					</svg>
					<svg>
						<use href={`${sprite}#icon-trash`} />
					</svg>
				</div>
			</div>
			<Modal
				show={showModal}
				handleClose={closeModal}
				handleMove={handleMove}
			/>
		</div>
	);
}
