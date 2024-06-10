import RegisterForm from '../../components/RegisterForm/RegisterForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import { useParams } from 'react-router-dom';
import css from './AuthPage.module.css';

const AuthPage = () => {
	const { id } = useParams();
	return (
		<>
			<div className={css.bodyArea}>
				{id === 'register' ? <RegisterForm /> : <LoginForm />}
			</div>
		</>
	);
};

export default AuthPage;
