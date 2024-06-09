import React from 'react';
import css from './Modal.module.css';
import sprite from '../../assets/icons.svg';

const Modal = ({ show, handleClose, handleMove }) => {
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

export default Modal;
