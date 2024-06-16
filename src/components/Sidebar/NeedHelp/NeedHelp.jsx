import { useState } from 'react';
import clsx from 'clsx';
import icons from '/src/assets/icons.svg';
import css from './NeedHelp.module.css';
import ModalWindowHelp from '../ModalWindowHelp/ModalWindowHelp';
import OurModal from '../../Modal/Modal';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../../redux/theme/selectors';

const NeedHelp = () => {
	const theme = useSelector(selectTheme);
	const [modalIsOpen, setIsOpen] = useState(false);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<div className={clsx(css.helpBlock, css[theme])}>
			<img src="/kaktus-need-help.png" alt="Kaktus Need Help" />
			<p className={clsx(css.helpText, css[theme])}>
				If you need help with <br />
				<span className={clsx(css.taskProSpan, css[theme])}> TaskPro</span>,
				check out our support resources or reach out to our customer support
				team
			</p>

			<button className={clsx(css.helpBtn, css[theme])} onClick={openModal}>
				<svg
					className={clsx(css.iconHelpCircle, css[theme])}
					width="20"
					height="20"
					// onClick={toggleShowPassword}
				>
					<use xlinkHref={`${icons}#${'icon-help-circle'}`}></use>
				</svg>
				Need help?
			</button>

			{modalIsOpen && (
				<OurModal
					isOpen={modalIsOpen}
					closeModal={closeModal}
					title="Need help"
				>
					<ModalWindowHelp onClose={closeModal} />
				</OurModal>
			)}
		</div>
	);
};

export default NeedHelp;
