import { useState } from 'react';
import { Avatar } from '@mui/material';
// import { Person as UserIcon } from '@mui/icons-material';
import ModalForm from './Modal';
import css from './UserInfo.module.css';
import clsx from 'clsx';
import { selectTheme } from '../../../redux/theme/selectors';
import { selectUserProfile } from '../../../redux/users/selectors';
import { useSelector } from 'react-redux';

const UserInfo = () => {
	const { name, avatarURL } = useSelector(selectUserProfile);
	const [open, setOpen] = useState(false);
	const theme = useSelector(selectTheme);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const avaLink = theme => {
		switch (theme) {
			case 'dark':
				return `/public/darkUser.png`;
			case 'light':
				return `/public/whiteUser.png`;
			case 'violet':
				return `/public/violetUser.png`;
			default:
				return avatarURL;
		}
	};

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
					onClick={() => {
						handleOpen();
					}}
					src={avatarURL || avaLink(theme)}
				>
					{/* {!avatarURL && <UserIcon />} */}
				</Avatar>
				{open && (
					<ModalForm
						open={open}
						handleClose={handleClose}
						// user={{ name, avatarURL }}
					/>
				)}
			</div>
		</div>
	);
};

export default UserInfo;
