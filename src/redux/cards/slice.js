import { createSlice } from '@reduxjs/toolkit';
import { createCard, deleteCard, getAllCards } from './operations';

const slice = createSlice({
	name: 'cards',
	initialState: {
		items: [],
		isLoading: false,
		error: false,
	},
	extraReducers: builder => {
		builder
			.addCase(getAllCards.pending, state => {
				state.error = false;
				state.isLoading = true;
			})
			.addCase(getAllCards.fulfilled, (state, action) => {
				state.items = action.payload;
				state.isLoading = false;
			})
			.addCase(getAllCards.rejected, state => {
				state.error = true;
				state.isLoading = false;
			})
			.addCase(createCard.pending, state => {
				state.error = false;
				state.isLoading = true;
			})
			.addCase(createCard.fulfilled, (state, action) => {
				state.items.push(action.payload);
				state.isLoading = false;
			})
			.addCase(createCard.rejected, state => {
				state.error = true;
				state.isLoading = false;
			})
			.addCase(deleteCard.pending, state => {
				state.error = false;
				state.isLoading = true;
			})
			.addCase(deleteCard.fulfilled, (state, action) => {
				state.items = state.items.filter(
					item => item._id !== action.payload.id
				);
				state.isLoading = false;
			})
			.addCase(deleteCard.rejected, state => {
				state.error = false;
				state.isLoading = true;
			});
	},
});

export default slice.reducer;
