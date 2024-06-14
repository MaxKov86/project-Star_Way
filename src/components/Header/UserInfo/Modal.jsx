import { useState, useEffect } from 'react';
import {
	Modal,
	TextField,
	IconButton,
	InputAdornment,
	Avatar,
	Box,
	Button,
} from '@mui/material';
import {
	Person as UserIcon,
	Visibility,
	VisibilityOff,
	Add as AddIcon,
	Close as CloseIcon,
} from '@mui/icons-material';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { editUserInfo } from '../../../redux/users/operation';
import { selectUser, selectToken } from '../../../redux/auth/selectors';
import css from './Modal.module.css';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

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

const ModalForm = ({ open, handleClose }) => {
	const dispatch = useDispatch();
	const token = useSelector(selectToken);
	console.log(token);
	const user = useSelector(selectUser);
	const [showPassword, setShowPassword] = useState(false);
	const [userAvatar, setUserAvatar] = useState(user.avatarURL);

	useEffect(() => {
		setUserAvatar(user.avatarURL);
	}, [user.avatarURL]);

	const {
		handleSubmit,
		control,
		register,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		mode: 'onBlur',
		reValidateMode: 'onChange',
		defaultValues: {
			name: user.name,
			email: user.email,
			password: '',
			avatarURL: '',
		},
	});

	const handleClickShowPassword = () => setShowPassword(!showPassword);

	const handleAvatarChange = e => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setUserAvatar(reader.result);
			};
			reader.readAsDataURL(file);
			register('avatarURL').onChange(e); // Реєстрація зміни файлу
		}
	};

	const onSubmit = data => {
		const formData = new FormData();
		formData.append('name', data.name);
		formData.append('email', data.email);
		formData.append('password', data.password);

		if (data.avatarURL && data.avatarURL[0]) {
			formData.append('avatar', data.avatarURL[0]);
		}

		// if (data.avatarURL && data.avatarURL.length > 0) {
		// 	formData.append('avatar', data.avatarURL[0]);
		// }

		// if (data.avatar.length > 0) {
		// 	formData.append('avatar', data.avatarURL[0]);
		// }

		dispatch(editUserInfo({ formData, token }))
			.then(response => {
				if (response.error) {
					console.error('Error updating user:', response.error);
				} else {
					handleClose();
				}
			})
			.catch(error => {
				console.error('Error dispatching editUser:', error);
			});
	};

	return (
		<Modal open={open} onClose={handleClose}>
			<Box className={css.modalBox}>
				<div className={css.wrap}>
					<IconButton
						onClick={handleClose}
						className={css.closeBtn}
						style={{ color: 'white' }}
					>
						<CloseIcon />
					</IconButton>
				</div>
				<h2 className={css.text}>Edit profile</h2>
				<form onSubmit={handleSubmit(onSubmit)} className={css.form}>
					<div className={css.photoUpload}>
						<Avatar
							src={userAvatar || ''}
							style={{
								width: '68px',
								height: '68px',
								borderRadius: '4px',
							}}
						>
							{!userAvatar && <UserIcon />}
						</Avatar>
						<IconButton component="label">
							<input
								type="file"
								hidden
								accept="image/*"
								{...register('avatarURL')} // Реєстрація файлу в react-hook-form
								onChange={handleAvatarChange}
							/>
							<AddIcon className={css.plusBtn} />
						</IconButton>
					</div>
					<div className={css.form}>
						<Controller
							name="name"
							control={control}
							rules={{
								minLength: { value: 1, message: 'Too Short' },
								maxLength: { value: 64, message: 'Too Long' },
							}}
							render={({ field }) => (
								<TextField
									{...field}
									placeholder={user.name}
									error={!!errors.name}
									helperText={errors.name ? 'Invalid name' : ''}
									InputProps={{
										className: css.formInput,
										style: { color: 'white' },
									}}
								/>
							)}
						/>
						<Controller
							name="email"
							control={control}
							rules={{
								pattern: {
									value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
									message: 'Must be a valid email',
								},
							}}
							render={({ field }) => (
								<TextField
									{...field}
									placeholder={user.email}
									error={!!errors.email}
									helperText={errors.email ? 'Invalid email' : ''}
									InputProps={{
										className: css.formInput,
										style: { color: 'white' },
									}}
								/>
							)}
						/>
						<Controller
							name="password"
							control={control}
							rules={{
								minLength: { value: 8, message: 'Too Short' },
								maxLength: { value: 64, message: 'Too Long' },
							}}
							render={({ field }) => (
								<TextField
									{...field}
									type={showPassword ? 'text' : 'password'}
									error={!!errors.password}
									helperText={errors.password ? 'Invalid password' : ''}
									InputProps={{
										endAdornment: (
											<InputAdornment position="end">
												<IconButton
													onClick={handleClickShowPassword}
													style={{
														backgroundColor: 'transparent',
														border: 'none',
														color: 'white',
													}}
												>
													{showPassword ? <VisibilityOff /> : <Visibility />}
												</IconButton>
											</InputAdornment>
										),
										className: css.formInput,
										style: { color: 'white' },
									}}
								/>
							)}
						/>
					</div>
					<Button
						type="submit"
						style={{
							fontSize: '14px',
							fontWeight: 600,
							fontStyle: 'normal',
							alignItems: 'center',
							backgroundColor: '#bedbb0',
							border: 'none',
							borderRadius: '8px',
							color: '#161616',
							lineHeight: '21px',
							paddingBottom: '11px',
							paddingTop: '10px',
							width: '100%',
							marginTop: '14px',
						}}
					>
						Edit
					</Button>
				</form>
			</Box>
		</Modal>
	);
};

export default ModalForm;
