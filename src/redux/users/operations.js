import axios from 'axios';
import { editUserSuccess } from './slice';


axios.defaults.baseURL = 'https://task-pro-api-763i.onrender.com/api';

export const editUser = async (formData) => {
    try {
      const response = await axios.post("/users/edit", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Response data:', response.data);
      editUserSuccess(response.data);
    } catch (error) {
      console.error('Failed to edit user:', error);
    }
  };