import { useState } from 'react';
import { Avatar } from '@mui/material';
import { Person as UserIcon } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import ModalForm from './Modal';
import { selectUser } from '../../../redux/auth/selectors';
import css from './UserInfo.module.css';
import clsx from 'clsx';
import { selectTheme } from '../../../redux/theme/selectors';

const UserInfo = () => {
	const { name, avatarURL } = useSelector(selectUser);
	const [open, setOpen] = useState(false);
	const theme = useSelector(selectTheme);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div className={css.wrap}>
			<div className={css.userinfo}>
				<span className={clsx(css.name, css[theme])}>{name}</span>
				<Avatar
					style={{
						width: '32px',
						height: '32px',
						borderRadius: '4px',
						cursor: 'pointer',
					}}
					onClick={handleOpen}
					src={avatarURL || ''}
				>
					{!avatarURL && <UserIcon />}
				</Avatar>
				<ModalForm
					open={open}
					handleClose={handleClose}
					user={{ name, avatarURL }}
				/>
			</div>
		</div>
	);
};

export default UserInfo;
