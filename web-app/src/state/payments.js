import { createSlice } from '@reduxjs/toolkit';

const paymentsSlice = createSlice({
  name: 'payments',
  initialState: [],
  reducers: {
    setPayments: (_, action) => {
      return action.payload;
    },
  },
});

const { actions, reducer } = paymentsSlice;
export const { setPayments } = actions;
export default reducer;
