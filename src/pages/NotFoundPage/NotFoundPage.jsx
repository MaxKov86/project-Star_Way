import { Link } from 'react-router-dom';
import css from './notFoundPage.module.css';

export default function NotFoundPage() {
	return (
		<div className={css.container}>
			<b className={css.title}>Page is not found!</b>
			<Link to="/">Back to Welcome page! </Link>
		</div>
	);
}
