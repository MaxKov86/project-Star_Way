import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import css from './RegisterForm.module.css';

import icons from '/src/assets/icons.svg';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '/src/redux/auth/operations';

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

export const RegisterForm = () => {
	const [showPassword, setShowPassword] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const navigate = useNavigate();

	const onSubmit = data => {
		console.log(data);
		dispatch(register(data));
		// Imitational registration & login
		navigate('/home');
	};

	const toggleShowPassword = () => {
		setShowPassword(prevState => !prevState);
	};

	const dispatch = useDispatch();

	return (
		<>
			<form className={css.form} onSubmit={handleSubmit(onSubmit)}>
				<div className={css.formTitle}>
					<h1>Registration</h1>
					<NavLink className={css.link} to="/auth/login">
						Log in
					</NavLink>
				</div>
				<div className={css.inputWrap}>
					<input
						className={`${css.formImput} ${errors.name ? css.error : ''}`}
						placeholder="Enter your name"
						type="text"
						name="name"
						{...register('name')}
					/>
					{errors.name && <p className={css.errors}>{errors.name.message}</p>}
				</div>
				<div className={css.inputWrap}>
					<input
						className={`${css.formImput} ${errors.name ? css.error : ''}`}
						type="email"
						name="email"
						placeholder="Enter your email"
						{...register('email')}
					/>
					{errors.email && <p className={css.errors}>{errors.email.message}</p>}
				</div>
				<div className={css.inputWrap} style={{ position: 'relative' }}>
					<input
						className={`${css.formImput} ${errors.name ? css.error : ''}`}
						type={showPassword ? 'text' : 'password'}
						{...register('password')}
						placeholder="Create a password"
					/>
					<svg
						className={css.icon}
						width="20"
						height="20"
						onClick={toggleShowPassword}
					>
						<use
							xlinkHref={`${icons}#${
								showPassword ? 'icon-eye' : 'icon-eye-off'
							}`}
						></use>
					</svg>
					{errors.password && (
						<p className={css.errors}>{errors.password.message}</p>
					)}
				</div>
				<button className={css.formBtn} type="submit">
					Register Now
				</button>
			</form>
		</>
	);
};

export default RegisterForm;
