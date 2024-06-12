import { createSlice } from '@reduxjs/toolkit';
import { editUserInfo } from './operation';

const slice = createSlice({
	name: 'users',
	initialState: {
		profile: {
			name: '',
			email: '',
			password: '',
			avatarUrl: '',
		},
		token: null,
	},
	extraReducers: builder =>
		builder.addCase(editUserInfo.fulfilled, (state, action) => {
			state.profile = action.payload.profile;
			state.token = action.payload.token;
		}),
});

export default slice.reducer;
