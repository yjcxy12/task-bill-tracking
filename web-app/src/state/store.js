import { configureStore } from '@reduxjs/toolkit';
import paymentsReducer from './payments';

const store = configureStore({
  reducer: {
    payments: paymentsReducer,
  },
});

export default store;
