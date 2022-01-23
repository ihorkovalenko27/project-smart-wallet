import { createAsyncThunk } from '@reduxjs/toolkit';
// import { setBalance } from '../../api/reportApi';

import axios from 'axios';

axios.defaults.baseURL = 'https://project-smart-finance.herokuapp.com/api/v1';

const pushBalance = createAsyncThunk(
  'users/balance',
  async ({ defaultValue, userToken }, thunkAPI) => {
    const AuthStr = 'Bearer '.concat(userToken);
    try {
      const { data } = await axios.patch(`/users/${defaultValue}`, {
        headers: { Authorization: AuthStr },
        body: defaultValue,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
console.log(pushBalance);
export default pushBalance;
