import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const editUserInfo = createAsyncThunk(
	'users/editUserInfo',
	async (newInfo, thunkAPI) => {
		try {
			const response = await axios.patch('/users/edit', newInfo);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
