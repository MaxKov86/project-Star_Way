import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../redux/theme/selectors';
import staticIcons from '../../assets/icons.svg';
import css from './DashboardFilter.module.css';

const DashboardFilter = ({
	isFilterModalOpen,
	toggleFilterModal,
	onFilterChange,
}) => {
	const theme = useSelector(selectTheme);

	const handleRadioClick = e => {
		e.stopPropagation();
		onFilterChange(e.target.value);
	};

	const handleShowAllClick = e => {
		e.stopPropagation();
		onFilterChange(null);
	};

	return (
		<>
			<button
				className={clsx(css.filterBtnModal, css[theme])}
				onClick={toggleFilterModal}
			>
				<svg className={clsx(css.btnFilterIcon, css[theme])}>
					<use href={`${staticIcons}#icon-filter`}></use>
				</svg>
				<span className={clsx(css.filterBtnText, css[theme])}>Filter</span>
			</button>
			{isFilterModalOpen && (
				<div className={css.modalOverlay} onClick={toggleFilterModal}>
					<div className={clsx(css.content, css[theme])}>
						<div
							className={clsx(css.modalContent, css[theme])}
							onClick={e => e.stopPropagation()}
						>
							<div className={css.modalHeader}>
								<h4 className={clsx(css.titleModalFilter, css[theme])}>
									Filters
								</h4>
								<button className={css.closeButton} onClick={toggleFilterModal}>
									<svg className={clsx(css.btnCloseIcon, css[theme])}>
										<use href={`${staticIcons}#icon-x-close`}></use>
									</svg>
								</button>
							</div>
							<form className={css.filterForm}>
								<div className={css.formGroup}>
									<h5 className={clsx(css.titleLabelColor, css[theme])}>
										Label color
									</h5>
									<button
										className={css.showAllButton}
										onClick={handleShowAllClick}
									>
										Show all
									</button>
								</div>
								<div className={css.radioGroup}>
									<div className={css.radioOption}>
										<input
											type="radio"
											id="withoutPriority"
											name="priority"
											value="withoutPriority"
											onClick={handleRadioClick}
										/>
										<label
											className={clsx(css.labelModalFilter, css[theme])}
											htmlFor="withoutPriority"
										>
											Without priority
										</label>
									</div>
									<div className={`${css.radioOption} ${css.low}`}>
										<input
											type="radio"
											id="low"
											name="priority"
											value="low"
											onClick={handleRadioClick}
										/>
										<label
											className={clsx(css.labelModalFilter, css[theme])}
											htmlFor="low"
										>
											Low
										</label>
									</div>
									<div className={`${css.radioOption} ${css.medium}`}>
										<input
											type="radio"
											id="medium"
											name="priority"
											value="medium"
											onClick={handleRadioClick}
										/>
										<label
											className={clsx(css.labelModalFilter, css[theme])}
											htmlFor="medium"
										>
											Medium
										</label>
									</div>
									<div className={`${css.radioOption} ${css.high}`}>
										<input
											type="radio"
											id="high"
											name="priority"
											value="high"
											onClick={handleRadioClick}
										/>
										<label
											className={clsx(css.labelModalFilter, css[theme])}
											htmlFor="high"
										>
											High
										</label>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default DashboardFilter;
