import { createSlice } from '@reduxjs/toolkit';
import {
	getAllColumns,
	createColumn,
	deleteColumn,
	updateColumn,
} from './operation';
import { logOut } from '../auth/operations';

const slice = createSlice({
	name: 'columns',
	initialState: {
		items: [],
		error: false,
		isLoading: false,
	},
	extraReducers: builder => {
		builder
			.addCase(getAllColumns.pending, state => {
				state.error = false;
				state.isLoading = true;
			})
			.addCase(getAllColumns.fulfilled, (state, action) => {
				state.items = action.payload;
				state.isLoading = false;
			})
			.addCase(getAllColumns.rejected, state => {
				state.error = true;
				state.isLoading = false;
			})
			.addCase(createColumn.pending, state => {
				state.error = false;
				state.isLoading = true;
			})
			.addCase(createColumn.fulfilled, (state, action) => {
				state.items.push(action.payload);
				state.isLoading = false;
			})
			.addCase(createColumn.rejected, state => {
				state.error = true;
				state.isLoading = false;
			})
			.addCase(deleteColumn.pending, state => {
				state.error = false;
				state.isLoading = true;
			})
			.addCase(deleteColumn.fulfilled, (state, action) => {
				const index = state.items.findIndex(
					item => item._id === action.payload._id
				);
				state.items.splice(index, 1);
				state.isLoading = false;
			})
			.addCase(deleteColumn.rejected, state => {
				state.error = false;
				state.isLoading = true;
			})

			.addCase(updateColumn.pending, state => {
				state.error = false;
				state.isLoading = true;
			})
			.addCase(updateColumn.fulfilled, (state, action) => {
				state.error = false;
				state.isLoading = false;
				const index = state.items.findIndex(
					item => item._id === action.payload._id
				);
				state.items.splice(index, 1, action.payload);
			})
			.addCase(updateColumn.rejected, state => {
				state.error = true;
				state.isLoading = false;
			})
			.addCase(logOut.fulfilled, state => {
				state.items = [];
				state.error = false;
				state.isLoading = false;
			});
	},
});
export default slice.reducer;
