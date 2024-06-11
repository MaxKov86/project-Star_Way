import { createSlice } from '@reduxjs/toolkit';
import { getAllBoards, createBoard, deleteBoard } from './operations';

const slice = createSlice({
	name: 'boards',
	initialState: {
		items: [],
		isLoading: false,
		error: false,
	},
	extraReducers: builder =>
		builder
			.addCase(getAllBoards.pending, state => {
				state.error = false;
				state.isLoading = true;
			})
			.addCase(getAllBoards.fulfilled, (state, action) => {
				state.items = action.payload;
				state.isLoading = false;
			})
			.addCase(getAllBoards.rejected, state => {
				state.error = true;
				state.isLoading = false;
			})
			.addCase(createBoard.pending, state => {
				state.error = false;
				state.isLoading = true;
			})
			.addCase(createBoard.fulfilled, (state, action) => {
				state.items.push(action.payload);
				state.isLoading = false;
			})
			.addCase(createBoard.rejected, state => {
				state.error = true;
				state.isLoading = false;
			})
			.addCase(deleteBoard.pending, state => {
				state.error = false;
				state.isLoading = true;
			})
			.addCase(deleteBoard.fulfilled, (state, action) => {
				state.items = state.items.filter(item => item.id !== action.payload.id);
				state.isLoading = false;
			})
			.addCase(deleteBoard.rejected, state => {
				state.error = true;
				state.isLoading = false;
			}),
});

export default slice.reducer;
