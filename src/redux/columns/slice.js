import { createSlice } from '@reduxjs/toolkit';
import { getAllColumns, createColumn, deleteColumn } from './operation';

const slice = createSlice({
	name: 'columns',
	initialState: {
		items: [],
		error: false,
		IsLoading: false,
	},
	extraReducers: builder => {
		builder
			.addCase(getAllColumns.pending, state => {
				state.error = false;
				state.IsLoading = true;
			})
			.addCase(getAllColumns.fulfilled, (state, action) => {
				state.items = action.payload;
				state.IsLoading = false;
			})
			.addCase(getAllColumns.rejected, state => {
				state.error = true;
				state.IsLoading = false;
			})
			.addCase(createColumn.pending, state => {
				state.error = false;
				state.IsLoading = true;
			})
			.addCase(createColumn.fulfilled, (state, action) => {
				state.items.push(action.payload);
				state.IsLoading = false;
			})
			.addCase(createColumn.rejected, state => {
				state.error = true;
				state.IsLoading = false;
			})
			.addCase(deleteColumn.pending, state => {
				state.error = false;
				state.IsLoading = true;
			})
			.addCase(deleteColumn.fulfilled, (state, action) => {
				state.items = state.items.filter(item => item.id !== action.payload.id);
				state.IsLoading = false;
			})
			.addCase(deleteColumn.rejected, state => {
				state.error = false;
				state.IsLoading = true;
			});
	},
});
export default slice.reducer;
