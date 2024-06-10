import { useState, useEffect } from 'react';
import { Avatar } from '@mui/material';
import { Person as UserIcon } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import ModalForm from './Modal';
import { selectUserAvatar, selectUserName } from '../../../redux/users/selectors';

const UserInfo = () => {
    const userName = useSelector(selectUserName);
    const userAvatar = useSelector(selectUserAvatar);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        console.log("User name:", userName);
        console.log("User avatar:", userAvatar);
    }, [userName, userAvatar]);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Avatar onClick={handleOpen} src={userAvatar || ''}>
                {!userAvatar && <UserIcon />}
            </Avatar>
            <span>{userName}</span>
            <ModalForm open={open} handleClose={handleClose} user={{ name: userName, avatar: userAvatar }} />
        </div>
    );
};

export default UserInfo;
