import { useState, useEffect } from 'react';
import {
	Modal,
	Button,
	TextField,
	IconButton,
	InputAdornment,
	Avatar,
	Box,
} from '@mui/material';
import {
	Person as UserIcon,
	Visibility,
	VisibilityOff,
	Add as AddIcon,
	Close as CloseIcon,
} from '@mui/icons-material';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { editUser } from '../../../redux/users/operations';
import css from './Modal.module.css'

const ModalForm = ({ open, handleClose, user }) => {
	const dispatch = useDispatch();
	const [showPassword, setShowPassword] = useState(false);
	const [userAvatar, setUserAvatar] = useState(user.avatar);

	useEffect(() => {
		setUserAvatar(user.avatar);
	}, [user.avatar]);

	const {
		handleSubmit,
		control,
		register,
		formState: { errors },
	} = useForm({
		defaultValues: {
			name: user.name,
			email: user.email,
			password: '',
			avatar: ''
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
		}
	};

	const onSubmit = data => {
		const formData = new FormData();
		formData.append('name', data.name);
		formData.append('email', data.email);
		formData.append('password', data.password);

		if (data.avatar.length) {
			formData.append('avatar', data.avatar[0]);
		}

		dispatch(editUser(formData));
		handleClose();
	};

	return (
		<Modal open={open} onClose={handleClose}>
			<Box className={css.modalBox}>
				<div className={css.closeBtn}>
				<IconButton onClick={handleClose} className={css.closeBtn}>
					<CloseIcon />
				</IconButton>
				</div>
				<h2 className={css.text}>Edit profile</h2>
				<form onSubmit={handleSubmit(onSubmit)} className={css.form}>
					<div className={css.photoUpload}>
						<Avatar src={userAvatar || ''} className={css.avatar}>
							{!userAvatar && <UserIcon />}
						</Avatar>
						<IconButton component="label" className={css.plusBtn}>
							<input
								type="file"
								hidden
								accept="image/*"
								{...register('avatar')}
								onChange={handleAvatarChange}
							/>
							<AddIcon />
						</IconButton>
					</div>
					<div className={css.form}>
					<Controller
						name="name"
						control={control}
						render={({ field }) => (
							<TextField
								{...field}
								label="Name"
								error={!!errors.name}
								helperText={errors.name ? 'Invalid name' : ''}
							/>
						)}
					/>
					<Controller
						name="email"
						control={control}
						render={({ field }) => (
							<TextField
								{...field}
								label="Email"
								error={!!errors.email}
								helperText={errors.email ? 'Invalid email' : ''}
							/>
						)}
					/>
					<Controller
						name="password"
						control={control}
						render={({ field }) => (
							<TextField
								{...field}
								label="Password"
								type={showPassword ? 'text' : 'password'}
								error={!!errors.password}
								helperText={errors.password ? 'Invalid password' : ''}
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<IconButton onClick={handleClickShowPassword}>
												{showPassword ? <VisibilityOff /> : <Visibility />}
											</IconButton>
										</InputAdornment>
									),
								}}
							/>
						)}
					/>
					</div>
					<Button type="submit" className={css.btn}>Edit</Button>
				</form>
			</Box>
		</Modal>
	);
};

export default ModalForm;
