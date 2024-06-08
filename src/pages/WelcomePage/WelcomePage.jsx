// import React from 'react';
import css from './WelcomePage.module.css';
import { NavLink } from 'react-router-dom';
// import sprite from '/src/assets/icon-logo.svg';
import logo from '/src/assets/icon-logo.svg';

const WelcomePage = () => {
	return (
		<div className={css.bodyArea}>
			<div className={css.homeArea}>
				<div className={css.homeImg}>
					<img src="/src/assets/Logo-image/Image-desktop.png" alt="" />
				</div>
				<div className={css.logoName}>
					<img src={logo} alt="Logo " />
					<h1>Task Pro</h1>
				</div>
				<div className={css.homeText}>
					Supercharge your productivity and take control of your tasks with Task
					Pro - Don&apos;t wait, start achieving your goals now!
				</div>
				<NavLink to="/auth/register" className={css.linkBtn}>
					<button type="button">Registration</button>
				</NavLink>
				<NavLink className={css.link} to="/auth/login">
					Log in
				</NavLink>
			</div>
		</div>
	);
};

export default WelcomePage;
