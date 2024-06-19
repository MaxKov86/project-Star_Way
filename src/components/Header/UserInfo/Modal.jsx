import { useState, useEffect } from 'react';
import {
	Modal,
	TextField,
	IconButton,
	InputAdornment,
	Avatar,
	Box,
} from '@mui/material';
import {
	// Person as UserIcon,
	Visibility,
	VisibilityOff,
	Add as AddIcon,
	Close as CloseIcon,
} from '@mui/icons-material';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { editUserInfo } from '../../../redux/users/operation';
import { selectUserProfile } from '../../../redux/users/selectors';

import css from './Modal.module.css';
import clsx from 'clsx';
// import icons from '/src/assets/icons.svg';
import { selectTheme } from '../../../redux/theme/selectors';
// import sound from '../../../assets/bell.mp3';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
	name: yup.lazy(value => {
		if (value !== undefined && value !== '') {
			return yup
				.string()
				.min(2, 'Name must be at least 2 characters')
				.lowercase();
		}
		return yup.string().nullable().optional();
	}),

	// yup
	// 	.string()
	// 	.min(2, 'Name must be at least 2 characters')
	// 	.nullable()
	// 	.notRequired(),
	// .required('Name is required'),
	email: yup.lazy(value => {
		if (value !== undefined && value !== '') {
			return yup.string().email('Invalid email').lowercase();
		}
		return yup.string().nullable().optional();
	}),
	// yup.string().email('Invalid email').nullable().notRequired(),
	// .required('Email is required'),
	password: yup.lazy(value => {
		if (value !== undefined && value !== '') {
			return yup.string().min(8).lowercase();
		}
		return yup.string().nullable().optional();
	}),

	// yup.string().when('password', (val, schema) => {
	// 	if (val?.length > 0) {
	// 		return yup.string().min(8, 'min 8').required('Required');
	// 	} else {
	// 		return yup.string().notRequired();
	// 	}
	// }),

	// yup
	// 	.string()
	// 	// .min(8, 'Password must be at least 8 characters')
	// 	.nullable()
	// 	.notRequired()
	// 	.optional()
	// 	.length(8),
	// .required('Password is required'),
	// [
	// 	["name", "email"],
	// 	["password"],
	//    ]
});

const ModalForm = ({ open, handleClose }) => {
	const dispatch = useDispatch();
	const user = useSelector(selectUserProfile);
	const theme = useSelector(selectTheme);
	const [showPassword, setShowPassword] = useState(false);
	const [userAvatar, setUserAvatar] = useState(user.avatarURL);

	useEffect(() => {
		setUserAvatar(user.avatarURL);
	}, [user.avatarURL]);

	const {
		handleSubmit,
		control,
		register,
		trigger,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		mode: 'all',
		reValidateMode: 'onChange',
		defaultValues: {
			name: user.name || '',
			email: user.email || '',
			password: user.password || '',
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
			trigger('avatarURL');
		}
	};

	const onSubmit = data => {
		const formData = new FormData();
		// formData.append('name', data.name);
		// formData.append('email', data.email);
		// formData.append('password', data.password);
		if (data.name) {
			formData.append('name', data.name);
		}
		if (data.email) {
			formData.append('email', data.email);
		}
		if (data.password) {
			formData.append('password', data.password);
		}
		if (data.avatarURL && data.avatarURL[0]) {
			formData.append('avatar', data.avatarURL[0]);
		}

		dispatch(editUserInfo({ formData }))
			.unwrap()
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

	// const playSound = () => {
	// 	const audio = new Audio(sound);
	// 	audio.play();
	// };
	// const avaLink = theme => {
	// 	switch (theme) {
	// 		case 'dark':
	// 			return `/public/darkUser.png`;
	// 		case 'light':
	// 			return `/public/whiteUser.png`;
	// 		case 'violet':
	// 			return `/public/violetUser.png`;
	// 	}
	// };

	return (
		<Modal open={open} onClose={handleClose}>
			<Box className={clsx(css.modalBox, css[theme])}>
				<div className={clsx(css.wrap, css[theme])}>
					<IconButton onClick={handleClose}>
						<CloseIcon className={clsx(css.closeBtn, css[theme])} />
					</IconButton>
				</div>
				<h2 className={clsx(css.title, css[theme])}>Edit profile</h2>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className={clsx(css.form, css[theme])}
					noValidate
				>
					<div className={css.userBlock}>
						<div className={clsx(css.photoUpload, css[theme])}>
							<Avatar
								style={{ width: '68px', height: '68px', borderRadius: '8px' }}
								src={userAvatar}
								// className={clsx(css.userAvatar, css[theme])}
								// src={
								// 	userAvatar ||
								// 	`${icons}#${
								// 		theme === 'light' ? 'icon-user-light' : 'icon-user-violet'
								// 	}`
								// }
							>
								{/* {!userAvatar && <UserIcon />} */}
							</Avatar>
							<IconButton component="label">
								<input
									type="file"
									hidden
									accept="image/*"
									{...register('avatarURL')} // Реєстрація файлу в react-hook-form
									onChange={handleAvatarChange}
								/>
								<AddIcon className={clsx(css.plusBtn, css[theme])} />
							</IconButton>
						</div>
					</div>
					<div className={clsx(css.formFields, css[theme])}>
						<div className={css.inputArea}>
							<Controller
								name="name"
								control={control}
								render={({ field }) => (
									<TextField
										fullWidth
										InputProps={{
											className: clsx(css.formInput, css[theme]),
											// onClick: playSound,
											sx: {
												'&.Mui-focused fieldset': {
													borderColor: 'green', // Set the border color when focused
													borderWidth: 8, // Increase the border width when focused
												},
											},
										}}
										type="text"
										{...field}
										placeholder={user.name}
										onChange={e => {
											field.onChange(e);
											trigger('name');
										}}
									/>
								)}
							/>
							{errors.name && (
								<p className={css.errors}>{errors.name.message}</p>
							)}
						</div>
						<div className={css.inputArea}>
							<Controller
								name="email"
								control={control}
								render={({ field }) => (
									<TextField
										fullWidth
										type="email"
										{...field}
										placeholder={user.email}
										onChange={e => {
											field.onChange(e);
											trigger('email');
										}}
										InputProps={{
											className: clsx(css.formInput, css[theme]),
										}}
									/>
								)}
							/>
							{errors.email && (
								<p className={css.errors}>{errors.email.message}</p>
							)}
						</div>
						<div className={css.inputArea}>
							<Controller
								name="password"
								control={control}
								render={({ field }) => (
									<TextField
										fullWidth
										{...field}
										type={showPassword ? 'text' : 'password'}
										placeholder="Password"
										onChange={e => {
											field.onChange(e);
											trigger('password');
										}}
										InputProps={{
											endAdornment: (
												<InputAdornment position="end">
													<IconButton
														onClick={handleClickShowPassword}
														className={clsx(css.showPasswordBtn, css[theme])}
													>
														{showPassword ? <Visibility /> : <VisibilityOff />}
													</IconButton>
												</InputAdornment>
											),
											className: clsx(css.formInput, css[theme]),
										}}
									/>
								)}
							/>
							{errors.password && (
								<p className={css.errors}>{errors.password.message}</p>
							)}
						</div>
					</div>
					<button type="submit" className={clsx(css.submitBtn, css[theme])}>
						Send
					</button>
				</form>
			</Box>
		</Modal>
	);
};

export default ModalForm;
