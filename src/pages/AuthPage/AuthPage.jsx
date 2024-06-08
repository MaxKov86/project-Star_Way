import RegisterForm from '../../components/RegisterForm/RegisterForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import { useParams } from 'react-router-dom';

const AuthPage = () => {
	const { id } = useParams();
	return <>{id === 'register' ? <RegisterForm /> : <LoginForm />}</>;
};

export default AuthPage;
