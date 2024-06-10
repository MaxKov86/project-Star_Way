import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://task-pro-api-763i.onrender.com/api';

export const getAllBoards = createAsyncThunk(
	'boards/getAllBoards',
	async (_, thunkAPI) => {
		try {
			const response = axios.get('/boards');
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const createBoard = createAsyncThunk(
	'boards/createBoard',
	async (newBoard, thunkAPI) => {
		try {
			const response = await axios.post('/boards', newBoard);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const deleteBoard = createAsyncThunk(
	'boards/deleteBoard',
	async (boardId, thunkAPI) => {
		try {
			const response = axios.delete(`/boards/${boardId}`);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
