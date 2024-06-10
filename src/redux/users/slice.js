import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Test User',
  email: '',
  password: '',
  avatar: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    editUserSuccess: (state, action) => {
      const { name, email, password, avatar } = action.payload;
      console.log('Payload:', action.payload);
      state.name = name;
      state.email = email;
      state.password = password;
      state.avatar = avatar;
    },
  },
});

export const { editUserSuccess } = userSlice.actions;
export default userSlice.reducer;
