import { createSlice } from '@reduxjs/toolkit';
import {
	registr,
	logIn,
	logOut,
	refreshUser,
	getCurrentUser,
} from './operations';

const slice = createSlice({
	name: 'auth',
	initialState: {
		user: {
			name: null,
			email: null,
			avatarURL: null,
		},
		token: null,
		isLoggedIn: false,
		isRefreshing: false,
		isLoginError: false,
	},
	extraReducers: builder =>
		builder
			.addCase(registr.pending, state => {
				state.isRefreshing = true;
			})
			.addCase(registr.fulfilled, (state, action) => {
				state.user = action.payload.user;
				state.token = action.payload.token;
				state.isLoggedIn = true;
				state.isRefreshing = false;
			})
			.addCase(registr.rejected, state => {
				state.isLoggedIn = false;
				state.isRefreshing = false;
			})
			.addCase(logIn.pending, state => {
				state.isRefreshing = true;
				state.isLoginError = false;
			})
			.addCase(logIn.fulfilled, (state, action) => {
				state.user = action.payload.user;
				state.token = action.payload.token;
				state.isRefreshing = false;
				state.isLoggedIn = true;
				state.isLoginError = false;
			})
			.addCase(logIn.rejected, state => {
				state.isLoggedIn = false;
				state.isRefreshing = false;
				state.isLoginError = true;
			})
			.addCase(logOut.fulfilled, state => {
				state.user = {
					name: null,
					email: null,
				};
				state.token = null;
				state.isLoggedIn = false;
			})
			.addCase(refreshUser.pending, state => {
				state.isRefreshing = true;
			})
			.addCase(refreshUser.fulfilled, (state, action) => {
				state.user = action.payload;
				state.isLoggedIn = true;
				state.isRefreshing = false;
			})
			.addCase(getCurrentUser.fulfilled, (state, action) => {
				state.user = action.payload;
			}),
});

export default slice.reducer;
