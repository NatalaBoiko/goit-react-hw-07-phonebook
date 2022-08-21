import { configureStore } from '@reduxjs/toolkit';
import { filterReduser } from './slice';

export const store = configureStore({
  reducer: {
    filter: filterReduser,
  },
});
