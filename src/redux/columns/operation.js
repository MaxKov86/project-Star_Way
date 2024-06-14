import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://task-pro-api-763i.onrender.com/api';

export const getAllColumns = createAsyncThunk(
	'columns/getAllColumns',
	async (_, thunkAPI) => {
		try {
			const response = await axios.get('/columns');
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const createColumn = createAsyncThunk(
	'columns/createColumn',
	async (newColumn, thunkAPI) => {
		try {
			const response = await axios.post('/columns', newColumn);
			return response.data.column;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const deleteColumn = createAsyncThunk(
	'columns/deleteColumn',
	async (columnId, thunkAPI) => {
		try {
			const response = await axios.delete(`/columns/${columnId}`);
			return response.data.column;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
