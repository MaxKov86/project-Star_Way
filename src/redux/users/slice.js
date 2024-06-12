import { createSlice } from '@reduxjs/toolkit';
import { editUser } from './operations';

const initialState = {
  name: '',
  email: '',
  password: '',
  avatar: null,
  status: 'idle',
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(editUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(editUser.fulfilled, (state, action) => {
        const { name, email, password, avatar } = action.payload;
        state.name = name;
        state.email = email;
        state.password = password;
        state.avatar = avatar;
        state.status = 'succeeded';
      })
      .addCase(editUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
