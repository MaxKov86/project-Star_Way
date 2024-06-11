import clsx from "clsx";
import sprite from "../../../assets/icons.svg"
import css from "./CreateBoard.module.css";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../redux/theme/selectors";
// import CreateBoardModal from "./CreateBoardModal/CreateBoardModal";

export default function CreateCard() {

    const theme = useSelector(selectTheme);



    return (
        <>
            <div className={clsx(css.box, css[theme])}>
                <p className={clsx(css.text, css[theme])}>Create a new board</p>

                <button className={clsx(css.btn, css[theme])} type="button">
                    <svg className={clsx(css.icon, css[theme])}>
                        <use href={`${sprite}#icon-plus`}></use>
                    </svg>
                </button>
            </div>

            {/* <CreateBoardModal /> */}
        </>
    );
}