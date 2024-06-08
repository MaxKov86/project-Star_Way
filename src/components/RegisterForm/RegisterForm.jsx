// import { SubmitHandler, useForm } from 'react-hook-form';

import { useForm } from 'react-hook-form';

import css from './RegisterForm.module.css';

const RegisterForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	// const onSubmit: SubmitHandler = data => {
	// 	alert(`Your name is ${data.name}`);
	// };
	return (
		<div className={css.bodyArea}>
			<form onSubmit={handleSubmit()}>
				<input {...(register('name'), { required: true })} type="text" />
				{errors?.name && <div className={css.error}>{errors.name.message}</div>}
				<input {...register('email')} type="email" />
				<button>Submit</button>
			</form>
		</div>
	);
};

export default RegisterForm;
