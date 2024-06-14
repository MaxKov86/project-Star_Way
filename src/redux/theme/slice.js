import { createSlice } from '@reduxjs/toolkit';
import { changeTheme } from './operations';

const slice = createSlice({
	name: 'theme',
	initialState: { value: 'dark' },
	extraReducers: builder =>
		builder.addCase(changeTheme.fulfilled, (state, action) => {
			state.value = action.payload.theme;
		}),
});

export default slice.reducer;
