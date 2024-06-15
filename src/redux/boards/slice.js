import { createSlice } from '@reduxjs/toolkit';
import {
	getAllBoards,
	createBoard,
	deleteBoard,
	updateBoard,
	getOneBoard,
} from './operations';
import { logOut } from '../auth/operations';

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
				const index = state.items.findIndex(
					item => item._id === action.payload._id
				);
				state.items.splice(index, 1);
				state.isLoading = false;
			})
			.addCase(deleteBoard.rejected, state => {
				state.error = true;
				state.isLoading = false;
			})
			.addCase(updateBoard.pending, state => {
				state.error = false;
				state.isLoading = true;
			})
			.addCase(updateBoard.fulfilled, (state, action) => {
				const index = state.items.findIndex(
					item => item._id === action.payload._id
				);
				state.items.splice(index, 1, action.payload);
				state.isLoading = false;
			})
			.addCase(updateBoard.rejected, state => {
				state.error = true;
				state.isLoading = false;
			})
			.addCase(getOneBoard.fulfilled, (state, action) => {
				state.items.find(item => item._id === action.payload.id);
				state.isLoading = false;
			})
			.addCase(logOut.fulfilled, state => {
				state.items = [];
				state.error = false;
				state.isLoading = false;
			}),
});

export default slice.reducer;
