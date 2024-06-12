import { createSlice } from '@reduxjs/toolkit';
import { editUser } from './operations';

const userSlice = createSlice({
	name: 'user',
	initialState: {
		user: {
			name: '',
			email: '',
			password: '',
			avatarUrl: '',
		},
		token: null,
	},
	extraReducers: builder => {
		builder.addCase(editUser.fulfilled, (state, action) => {
			const { name, email, password, avatarUrl } = action.payload;
			state.user.name = name;
			state.user.email = email;
			state.user.password = password;
			state.user.avatarUrl = avatarUrl;
		});
	},
});

export default userSlice.reducer;
