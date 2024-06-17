import { createSlice } from '@reduxjs/toolkit';
import { editUserInfo, needHelp } from './operation';
import {  refreshUser } from '../auth/operations';

const slice = createSlice({
	name: 'users',
	initialState: {
		profile: {
			name: '',
			email: '',
			password: '',
			avatarURL: '',
		},
		help: {
			email: '',
			comment: '',
		},
		token: null,
	},
	extraReducers: builder =>
		builder
			.addCase(editUserInfo.fulfilled, (state, action) => {
				state.profile = action.payload;
			})
			.addCase(needHelp.fulfilled, (state, action) => {
				state.needHelp = action.payload;
			})
			.addCase(logIn.fulfilled, (state, action) => {
				state.profile = action.payload.user;
			})
			.addCase(refreshUser.fulfilled, (state, action) => {
				state.profile = action.payload;
				state.isLoggedIn = true;
				state.isRefreshing = false;
			}),
});

export default slice.reducer;
