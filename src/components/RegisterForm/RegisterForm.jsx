import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import css from './RegisterForm.module.css';
import icons from '/src/assets/icons.svg';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registr } from '../../redux/auth/operations';

const schema = yup.object().shape({
	name: yup
		.string()
		.min(2, 'Name must be at least 2 characters')
		.required('Name is required'),
	email: yup.string().email('Invalid email').required('Email is required'),
	password: yup
		.string()
		.min(8, 'Password must be at least 8 characters')
		.required('Password is required'),
});

const RegisterForm = () => {
	const [showPassword, setShowPassword] = useState(false);
	const dispatch = useDispatch();

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		trigger,
	} = useForm({
		resolver: yupResolver(schema),
		mode: 'onBlur',
		reValidateMode: 'onChange',
	});

	const navigate = useNavigate();

	const onSubmit = data => {
		dispatch(registr(data));
		navigate('/home');
	};

	const toggleShowPassword = () => {
		setShowPassword(prevState => !prevState);
	};

	return (
		<form className={css.form} onSubmit={handleSubmit(onSubmit)}>
			<div className={css.formTitle}>
				<h1>Registration</h1>
				<NavLink className={css.link} to="/auth/login">
					Log in
				</NavLink>
			</div>
			<div className={css.inputWrap}>
				<input
					className={`${css.formInput} ${errors.name ? css.error : ''}`}
					placeholder="Enter your name"
					type="text"
					{...register('name', {
						onBlur: () => trigger('name'),
						onChange: () => trigger('name'),
					})}
				/>
				{errors.name && <p className={css.errors}>{errors.name.message}</p>}
			</div>
			<div className={css.inputWrap}>
				<input
					className={`${css.formInput} ${errors.email ? css.error : ''}`}
					type="text"
					placeholder="Enter your email"
					{...register('email', {
						onBlur: () => trigger('email'),
						onChange: () => trigger('email'),
					})}
				/>
				{errors.email && <p className={css.errors}>{errors.email.message}</p>}
			</div>
			<div className={css.inputWrap}>
				<input
					className={`${css.formInput} ${errors.password ? css.error : ''}`}
					type={showPassword ? 'text' : 'password'}
					{...register('password', {
						onBlur: () => trigger('password'),
						onChange: () => trigger('password'),
					})}
					placeholder="Create a password"
				/>
				<svg
					className={css.icon}
					width="20"
					height="20"
					onClick={toggleShowPassword}
				>
					<use
						xlinkHref={`${icons}#${showPassword ? 'icon-eye' : 'icon-eye-off'}`}
					></use>
				</svg>
				{errors.password && (
					<p className={css.errors}>{errors.password.message}</p>
				)}
			</div>
			<button className={css.formBtn} type="submit" disabled={!isValid}>
				Register Now
			</button>
		</form>
	);
};

export default RegisterForm;
