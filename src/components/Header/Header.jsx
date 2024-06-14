import { useState } from 'react';
import css from './Header.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import UserInfo from './UserInfo/UserInfo';
import ThemeSelector from './ThemeSelector/ThemeSelector';
import svg from '../../assets/icons.svg';

const Header = ({ isOpen, toggle }) => {
    const [showModal, setShowModal] = useState(false);

    const closeMenuModal = () => {
        setShowModal(false);
    };

    const handleThemeButtonClick = () => {
        setShowModal(!showModal);
    };

    return (
        <div className={css.header}>
            {window.innerWidth < 1440 && (
                <button
                    className={css.burgerBtn}
                    onClick={() => toggle(!isOpen)}
                    type="button"
                >
                    <MenuIcon className={css.userIcon} />
                </button>
            )}
            <div className={css.rightSection}>
                <button
                    className={css.btnTheme}
                    onClick={handleThemeButtonClick}
                >
                    Theme
                    <svg width="16" height="16" stroke="currentColor">
                        <use href={svg + '#icon-chevron-down'}></use>
                    </svg>
                </button>
                <UserInfo />
            </div>
			{showModal && <ThemeSelector closeMenuModal={closeMenuModal} />}
        </div>
    );
};

export default Header;
