import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  name: '',
  email: '',
  password: '',
  avatar: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    editUserSuccess: (state, action) => {
      const { name, email, password, avatar } = action.payload;
      state.name = name;
      state.email = email;
      state.password = password;
      state.avatar = avatar;
    },
  },
});

export const { editUserSuccess } = userSlice.actions;

export const editUser = (formData) => async (dispatch) => {
  try {
    const response = await axios.post("/api/users/edit", formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    dispatch(editUserSuccess(response.data));
  } catch (error) {
    console.error('Failed to edit user:', error);
  }
};

export default userSlice.reducer;
