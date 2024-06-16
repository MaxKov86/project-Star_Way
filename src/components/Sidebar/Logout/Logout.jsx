import clsx from "clsx";
import css from "./Logout.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "../../../redux/theme/selectors";
import { logOut } from "../../../redux/auth/operations";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import loadingToaster from "../../../helpers/loadingToast";


export default function Logout() {

    const theme = useSelector(selectTheme);
    const dispatch = useDispatch();
    const nav = useNavigate()

    const click = async () => {
        let toastId = toast.loading("Wait, please");
        try {
            await dispatch(logOut()).unwrap();
            loadingToaster(theme)
            nav("/");
        } catch (err) {
            toast.error("Sorry, something went wrong. Please, try again!")
        }
    }

    return (
        <button onClick={click} className={clsx(css.btn, css[theme])} type="button">

            <svg className={clsx(css.icon, css[theme])} width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.867 10.08c.413-4.8 2.88-6.76 8.28-6.76h.173c5.96 0 8.347 2.386 8.347 8.346v8.694c0 5.96-2.387 8.346-8.347 8.346h-.173c-5.36 0-7.827-1.933-8.267-6.653M2.667 16H19.84" />
                <path d="M16.867 11.533 21.333 16l-4.466 4.466" />
            </svg>

            <p className={clsx(css.text, css[theme])}>Log out</p>
        </button>
    );
}