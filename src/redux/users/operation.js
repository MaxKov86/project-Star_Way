import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const needHelp = createAsyncThunk(
	'users/needHelp',
	async (help, thunkAPI) => {
		try {
			await axios.put('/users/help', help);
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const editUserInfo = createAsyncThunk(
	'users/editUserInfo',
	async ({ formData, token }, thunkAPI) => {
		try {
			const response = await axios.patch('/users/edit', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
					Authorization: `Bearer ${token}`,
				},
			});
			
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
