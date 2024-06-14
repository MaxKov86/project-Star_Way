import { useSelector } from "react-redux";
import AddColumnBtn from "../Buttons/AddColumnBtn/AddColumnBtn";
import css from "./MainDashboard.module.css";
import { selectColumns } from "../../redux/columns/selectors";
import { useParams } from "react-router-dom";
// import Column from "../Column/Column";

export default function MainDashboard() {

    const { boardName } = useParams();

    const columns = useSelector(selectColumns);
    const boardColumns = columns.filter(column => column.boardId === boardName);


    return (
        <div className={css.box}>
            {/* 
            {boardColumns.map(column => {
                return <Column key={column._id} title={column.title} id={column._id} />
            })} */}
            <AddColumnBtn />
        </div>
    )
}