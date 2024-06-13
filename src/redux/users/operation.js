import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const editUser = createAsyncThunk(
	'users/editUser',
	async (newInfo, thunkAPI) => {
		try {
			const response = await axios.patch('/users/edit', newInfo);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
