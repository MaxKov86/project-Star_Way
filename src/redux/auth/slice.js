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
		},
		token: null,
		isLoggedIn: false,
		isRefreshing: false,
	},
	extraReducers: builder =>
		builder
			.addCase(registr.fulfilled, (state, action) => {
				state.user = action.payload.user;
				state.token = action.payload.token;
				state.isLoggedIn = true;
			})
			.addCase(logIn.fulfilled, (state, action) => {
				state.user = action.payload.user;
				state.token = action.payload.token;
				state.isLoggedIn = true;
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
				state.user = action.payload.user;
			}),
});

export default slice.reducer;
