import css from './CustomDatePicker.module.css';
import React, { forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

// V1
// const CustomDatePicker = () => {
// 	const [selectedDate, setSelectedDate] = useState(new Date());
// 	const [isOpen, setIsOpen] = useState(false);

// 	const handleDateChange = date => {
// 		setIsOpen(!isOpen);
// 		setSelectedDate(date);
// 	};

// 	const handleClick = e => {
// 		e.preventDefault();
// 		setIsOpen(!isOpen);
// 	};

// 	return (
// 		<>
// 			<button className={css.dateButton} onClick={handleClick}>
// 				{format(selectedDate, 'dd-MM-yyyy')}
// 			</button>
// 			{isOpen && (
// 				<DatePicker
// 					selected={selectedDate}
// 					onChange={handleDateChange}
// 					inline
// 				/>
// 			)}
// 		</>
// 	);
// };

// export default CustomDatePicker;

// v2
const CustomDatePicker = () => {
	const [startDate, setStartDate] = useState(null);

	const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
		<button
			className={css.dateButton}
			onClick={e => {
				e.preventDefault();
				e.stopPropagation();
				onClick(e);
			}}
			ref={ref}
		>
			{value ? value : 'No deadline'}
		</button>
	));

	return (
		<DatePicker
			selected={startDate}
			onChange={date => setStartDate(date)}
			customInput={<ExampleCustomInput />}
		/>
	);
};

export default CustomDatePicker;
