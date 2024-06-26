import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://task-pro-api-763i.onrender.com/api';

const setAuthHeader = token => {
	axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const clearAuthHeader = () => {
	axios.defaults.headers.common['Authorization'] = '';
};

export const registr = createAsyncThunk(
	'auth/registr',
	async (userInfo, thunkAPI) => {
		try {
			const response = await axios.post('/users/register', userInfo);
			setAuthHeader(response.data.token);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const logIn = createAsyncThunk(
	'auth/login',
	async (userInfo, thunkAPI) => {
		try {
			const response = await axios.post('/users/login', userInfo);
			setAuthHeader(response.data.token);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
	try {
		await axios.post('users/logout');
		clearAuthHeader();
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

export const getCurrentUser = createAsyncThunk(
	'auth/getCurrentUser',
	async (_, thunkAPI) => {
		try {
			const response = await axios.get('/users/current');
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const refreshUser = createAsyncThunk(
	'auth/refreshUser',
	async (_, thunkAPI) => {
		const {
			auth: { token },
		} = thunkAPI.getState();
		setAuthHeader(token);
		const response = await axios.get('/users/current');
		return response.data;
	},
	{
		condition: (_, { getState }) => {
			const {
				auth: { token },
			} = getState();
			return token !== null;
		},
	}
);
