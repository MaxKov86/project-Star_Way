import React, { forwardRef } from 'react';
import { useSelector } from 'react-redux';
import { format, isToday, isTomorrow } from 'date-fns';
import DatePicker from 'react-datepicker';
import { selectTheme } from '../../../redux/theme/selectors';
import clsx from 'clsx';
import css from './CustomDatePicker.module.css';
import 'react-datepicker/dist/react-datepicker.css';
import './custom-date-picker.css';

const CustomDatePicker = ({ value, onChange }) => {
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
				selected={value}
				onChange={onChange}
				customInput={<DateButton />}
				popperPlacement="right-top"
				isClearable
				minDate={new Date()}
				className={css[theme]}
			/>
		</div>
	);
};

export default CustomDatePicker;
