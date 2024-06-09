import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
	name: 'theme',
	initialState: { value: 'dark' },
	reducers: {
		changeTheme(state, action) {
			state.value = action.payload;
		},
	},
});

export const { changeTheme } = slice.actions;

export default slice.reducer;
