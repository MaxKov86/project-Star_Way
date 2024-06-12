import clsx from "clsx";
import sprite from "../../../assets/icons.svg"
import css from "./CreateBoard.module.css";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../redux/theme/selectors";
import CreateBoardModal from "./CreateBoardModal/CreateBoardModal";
import OurModal from "../../Modal/Modal";
import { useState } from "react";


export default function CreateCard() {

    const theme = useSelector(selectTheme);
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };



    return (
        <>
            <div className={clsx(css.box, css[theme])}>
                <p className={clsx(css.text, css[theme])}>Create a new board</p>

                <button className={clsx(css.btn, css[theme])} onClick={openModal} type="button">
                    <svg className={clsx(css.icon, css[theme])}>
                        <use href={`${sprite}#icon-plus`}></use>
                    </svg>
                </button>
            </div>

            <OurModal
                isOpen={modalIsOpen}
                closeModal={closeModal}
                title="New board">
                <CreateBoardModal handelClose={closeModal} />
            </OurModal>
        </>
    );
}