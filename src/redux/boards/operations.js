import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://task-pro-api-763i.onrender.com/api';

export const getAllBoards = createAsyncThunk(
	'boards/getAllBoards',
	async (_, thunkAPI) => {
		try {
			const response = await axios.get('/boards');
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
			const response = await axios.delete(`/boards/${boardId}`);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const updateBoard = createAsyncThunk(
	'boards/updateBoard',
	async (board, thunkAPI) => {
		try {
			const response = await axios.patch(`boards/${board.id}`, board);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const getOneBoard = createAsyncThunk(
	'boards/getOneBoard',
	async (boardId, thunkAPI) => {
		try {
			const response = await axios.get(`/boards/${boardId}`);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
