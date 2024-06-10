import { useState } from 'react';
import { Avatar } from '@mui/material';
import { Person as UserIcon } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import ModalForm from './Modal';

const UserInfo = () => {
    const user = useSelector((state) => state.user);
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Avatar onClick={handleOpen} src={user.avatar || ''}>
                {!user.avatar && <UserIcon />}
            </Avatar>
            <span>{user.name}</span>
            <ModalForm open={open} handleClose={handleClose} user={user} />
        </div>
    );
};

export default UserInfo;
