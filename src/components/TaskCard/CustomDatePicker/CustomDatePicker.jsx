import css from './CustomDatePicker.module.css';
import React, { forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import { format, isToday, isTomorrow } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import './custom-date-picker.css';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../../redux/theme/selectors';
import clsx from 'clsx';

// v2
const CustomDatePicker = () => {
	// перенести стейт в модалку, передавать пропом
	const [startDate, setStartDate] = useState(null);
	const theme = useSelector(selectTheme);

	const formatDate = date => {
		if (isToday(date)) {
			return `Today, ${format(date, 'd MMMM')}`;
		} else if (isTomorrow(date)) {
			return `Tomorrow, ${format(date, 'd MMMM')}`;
		} else {
			return format(date, 'dd/MM/yyyy');
		}
	};

	const DateButton = forwardRef(({ value, onClick }, ref) => (
		<button
			className={clsx(css.dateButton, css[theme])}
			onClick={e => {
				e.preventDefault();
				e.stopPropagation();
				onClick(e);
			}}
			ref={ref}
		>
			{value ? formatDate(new Date(value)) : 'No deadline'}
		</button>
	));

	return (
		<div className={clsx('datepicker-wrapper', theme)}>
			<DatePicker
				selected={startDate}
				onChange={date => {
					console.log(date);
					setStartDate(date);
				}}
				customInput={<DateButton />}
				popperPlacement="center"
				isClearable
				minDate={new Date()}
				className={css[theme]}
			/>
		</div>
	);
};

export default CustomDatePicker;
