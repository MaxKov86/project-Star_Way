import { useState, useEffect } from 'react';
import {
	Modal,
	Button,
	TextField,
	IconButton,
	InputAdornment,
	Avatar,
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
			<div>
				<IconButton onClick={handleClose}>
					<CloseIcon />
				</IconButton>
				<h2>Edit profile</h2>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div>
						<Avatar src={userAvatar || ''}>
							{!userAvatar && <UserIcon />}
						</Avatar>
						<IconButton component="label">
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
					<Button type="submit">Edit</Button>
				</form>
			</div>
		</Modal>
	);
};

export default ModalForm;
