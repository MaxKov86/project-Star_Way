import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://task-pro-api-763i.onrender.com/api';

export const getAllCards = createAsyncThunk(
	'cards/getAllCards',
	async (_, thunkApi) => {
		try {
			const response = await axios.get('/cards/all');
			return response.data;
		} catch (error) {
			return thunkApi.rejectWithValue(error.message);
		}
	}
);

export const createCard = createAsyncThunk(
	'cards/createCard',
	async (newCard, thunkAPI) => {
		try {
			const response = await axios.post('/cards', newCard);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const deleteCard = createAsyncThunk(
	'cards/deleteCard',
	async (cardId, thunkAPI) => {
		try {
			const response = await axios.delete(`/cards/${cardId}`);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
