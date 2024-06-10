import React from 'react';
import css from './MoveModal.module.css';
import sprite from '../../assets/icons.svg';

const MoveModal = ({ show, handleClose, handleMove }) => {
	if (!show) return null;

	return (
		<div className={css.modalOverlay} onClick={handleClose}>
			<div className={css.modalContent} onClick={e => e.stopPropagation()}>
				<div className={css.buttonContainer}>
					<button
						className={css.btnSt}
						onClick={() => handleMove('InProgress')}
					>
						In Progress{' '}
						<svg className={css.iconMoove}>
							<use href={`${sprite}#icon-arrow-circle-broken-right`} />
						</svg>
					</button>
					<button className={css.btnSt} onClick={() => handleMove('Done')}>
						Done{' '}
						<svg className={css.iconMoove}>
							<use href={`${sprite}#icon-arrow-circle-broken-right`} />
						</svg>
					</button>
				</div>
				{/* <button onClick={handleClose} className={css.closeButton}>
					Close
				</button> */}
			</div>
		</div>
	);
};
const EditeModal = ({ show, handleClose, content }) => {
	if (!show) return null;

	return (
		<div className={css.modalOverlay} onClick={handleClose}>
			<div className={css.modalContent} onClick={e => e.stopPropagation()}>
				{content}
				<button onClick={handleClose} className={css.closeButton}>
					Close
				</button>
			</div>
		</div>
	);
};

// Експортуємо обидва компоненти
export { MoveModal, EditeModal };
