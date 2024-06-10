import { createSlice } from '@reduxjs/toolkit';
import { getAllColumns, createColumn, deleteColumn } from './operation';

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
				state.items = state.items.filter(item => item.id !== action.payload.id);
				state.isLoading = false;
			})
			.addCase(deleteColumn.rejected, state => {
				state.error = false;
				state.isLoading = true;
			});
	},
});
export default slice.reducer;
