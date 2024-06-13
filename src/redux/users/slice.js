import { createSlice } from '@reduxjs/toolkit';
import { editUserInfo, needHelp } from './operation';

const slice = createSlice({
	name: 'users',
	initialState: {
		profile: {
			name: '',
			email: '',
			password: '',
			avatarUrl: '',
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
				state.profile = action.payload.profile;
				state.token = action.payload.token;
			})
			.addCase(needHelp.fulfilled, (state, action) => {
				state.needHelp = action.payload.help;
			}),
});

export default slice.reducer;
