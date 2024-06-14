import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	filter: null,
};

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setFilter: (state, action) => {
			state.filter = action.payload;
		},
		clearFilter: state => {
			state.filter = null;
		},
	},
});

export const { setFilter, clearFilter } = filterSlice.actions;

export default filterSlice.reducer;