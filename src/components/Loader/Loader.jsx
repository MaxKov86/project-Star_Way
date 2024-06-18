import { ThreeCircles } from 'react-loader-spinner';
import css from './Loader.module.css';

const color = 'white';

const Loader = () => {
	return (
		<div className={css.loaderContainer}>
			<ThreeCircles
				visible={true}
				height="100"
				width="100"
				color={color}
				ariaLabel="three-circles-loading"
				wrapperStyle={{}}
				wrapperClass=""
			/>
			<p>PLEASE WAITE...</p>
		</div>
	);
};

export default Loader;
