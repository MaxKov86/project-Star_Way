import { createSlice } from '@reduxjs/toolkit';
import { editUserInfo, needHelp } from './operation';
import { refreshUser, logIn, logOut, registr } from '../auth/operations';
import { changeTheme } from '../theme/operations';

const slice = createSlice({
	name: 'users',
	initialState: {
		profile: {
			name: null,
			email: null,
			password: null,
			avatarURL: null,
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
			.addCase(registr.fulfilled, (state, action) => {
				state.profile = action.payload.user;
			})
			.addCase(logIn.fulfilled, (state, action) => {
				state.profile = action.payload.user;
			})
			.addCase(refreshUser.fulfilled, (state, action) => {
				state.profile = action.payload;
				state.isLoggedIn = true;
				state.isRefreshing = false;
			})
			.addCase(logOut.fulfilled, state => {
				state.profile = {
					name: null,
					email: null,
					password: null,
					avatarURL: null,
				};
			})
			.addCase(changeTheme.fulfilled, (state, action) => {
				state.profile.avatarURL = action.payload.avatarURL;
			}),
});

export default slice.reducer;
