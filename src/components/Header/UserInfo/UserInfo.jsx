import { useState } from 'react';
import {
    Avatar,
    Modal,
    Box,
    Button,
    TextField,
    IconButton,
    InputAdornment,
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
import { updateUser } from '../../../redux/user/userSlice';

const UserInfo = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    const [open, setOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [userPhoto, setUserPhoto] = useState(user.photo);

    const { handleSubmit, control, formState: { errors } } = useForm({
        defaultValues: {
            name: user.name,
            email: user.email,
            password: user.password,
            photo: user.photo,
        },
    });

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleClickShowPassword = () => setShowPassword(!showPassword);

    const onSubmit = (data) => {
        if (data.photo.length) {
            const reader = new FileReader();
            reader.onload = () => {
                dispatch(updateUser({
                    ...data,
                    photo: reader.result,
                }));
                setUserPhoto(reader.result);
            };
            reader.readAsDataURL(data.photo[0]);
        } else {
            dispatch(updateUser(data));
        }
        handleClose();
    };

    return (
        <div>
            <Avatar onClick={handleOpen} src={userPhoto || ''}>
                {!userPhoto && <UserIcon />}
            </Avatar>
            <span>{user.name}</span>
            <Modal open={open} onClose={handleClose}>
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <IconButton onClick={handleClose} sx={{ alignSelf: 'flex-end' }}>
                        <CloseIcon />
                    </IconButton>
                    <h2>Edit profile</h2>
                    <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                            <Avatar src={userPhoto || ''} sx={{ width: 56, height: 56 }}>
                                {!userPhoto && <UserIcon />}
                            </Avatar>
                            <IconButton component="label" style={{ marginLeft: '-16px', zIndex: 1 }}>
                                <input
                                    type="file"
                                    hidden
                                    accept="image/*"
                                    {...control.register("photo")}
                                />
                                <AddIcon />
                            </IconButton>
                        </div>
                        <Controller
                            name="name"
                            control={control}
                            rules={{
                                required: true,
                                minLength: 2,
                                maxLength: 32,
                                pattern: /^[A-Za-z0-9]+$/i,
                            }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Name"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    error={!!errors.name}
                                    helperText={errors.name ? 'Invalid name' : ''}
                                />
                            )}
                        />
                        <Controller
                            name="email"
                            control={control}
                            rules={{
                                required: true,
                                pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                                validate: {
                                    singleAtSymbol: value =>
                                        (value.match(/@/g) || []).length === 1 ||
                                        'Email must contain a single "@"',
                                    validHost: value =>
                                        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9]+\.[A-Za-z]{2,4}$/.test(
                                            value
                                        ) || 'Invalid host in email',
                                },
                            }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    error={!!errors.email}
                                    helperText={errors.email ? 'Invalid email' : ''}
                                />
                            )}
                        />
                        <Controller
                            name="password"
                            control={control}
                            rules={{
                                required: true,
                                minLength: 8,
                                maxLength: 64,
                                pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                            }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Password"
                                    type={showPassword ? 'text' : 'password'}
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    error={!!errors.password}
                                    helperText={errors.password ? 'Invalid password' : ''}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            )}
                        />
                        <Button type="submit" variant="contained">
                            Send
                        </Button>
                    </form>
                </Box>
            </Modal>
        </div>
    );
};

export default UserInfo;
