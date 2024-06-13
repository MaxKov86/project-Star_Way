import { createSlice } from '@reduxjs/toolkit';
import { editUser } from './operation';

const slice = createSlice({
	name: 'users',
	initialState: {
		user: {
			name: '',
			email: '',
			password: '',
			avatarUrl: '',
		},
		token: null,
	},
	extraReducers: builder =>
		builder.addCase(editUser.fulfilled, (state, action) => {
			state.user = action.payload.user;
			state.token = action.payload.token;
		}),
});

export default slice.reducer;
