import clsx from "clsx";
import css from "./LogoComponent.module.css";
import { useSelector } from "react-redux";
import { selectTheme } from "../../redux/theme/selectors";
import LightningIcon from "../../assets/LightningIcon.jsx"


const LogoComponent = () => {

	const theme = useSelector(selectTheme);

	return (<div className={css.box}>

		<div className={clsx(css.iconBox, css[`iconBox_${theme}`])}>
			<LightningIcon color={theme === "violet" ? "#5255BC" : "#FFFFFF"} />
		</div>

		<p className={clsx(css.text, css[`text_${theme}`])}>Task Pro</p>

	</div>);
};

export default LogoComponent;
