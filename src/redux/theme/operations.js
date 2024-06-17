import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const changeTheme = createAsyncThunk(
	'theme/changeTheme',
	async (newTheme, thunkAPI) => {
		try {
			const response = await axios.patch(
				'/users/theme',
				{ theme: newTheme },
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);
			console.log(response.data);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(
				error.response.data.message || error.message
			);
		}
	}
);
