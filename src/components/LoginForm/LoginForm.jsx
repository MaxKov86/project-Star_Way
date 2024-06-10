import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

import icons from '/src/assets/icons.svg';
import css from './LoginForm.module.css';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { registr } from '../../redux/auth/operations';

const schema = yup.object().shape({
	email: yup.string().email('Invalid email').required('Email is required'),
	password: yup
		.string()
		.min(8, 'Password must be at least 8 characters')
		.required('Password is required'),
});

const LoginForm = () => {
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
		const reg = registr(data);
		dispatch(reg);
		// Imitational registration & login
		navigate('/home');
	};

	const toggleShowPassword = () => {
		setShowPassword(prevState => !prevState);
	};

	const dispatch = useDispatch();

	return (
		<form className={css.form} onSubmit={handleSubmit(onSubmit)}>
			<div className={css.formTitle}>
				<NavLink className={css.link} to="/auth/register">
					Registration
				</NavLink>
				<h1>Log in</h1>
			</div>
			<div className={css.inputWrap}>
				<input
					className={`${css.formInput} ${errors.email ? css.error : ''}`}
					type="email"
					name="email"
					placeholder="Enter your email"
					{...register('email')}
				/>
				{errors.email && <p className={css.errors}>{errors.email.message}</p>}
			</div>
			<div className={css.inputWrap}>
				<input
					className={`${css.formInput} ${errors.password ? css.error : ''}`}
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
						xlinkHref={`${icons}#${showPassword ? 'icon-eye' : 'icon-eye-off'}`}
					></use>
				</svg>
				{errors.password && (
					<p className={css.errors}>{errors.password.message}</p>
				)}
			</div>
			<button className={css.formBtn} type="submit">
				Log In Now
			</button>
		</form>
	);
};

export default LoginForm;
