import { configureStore } from '@reduxjs/toolkit';
import { filterReduser } from './filterSlice';
import { contctsApi } from './contactsSlice';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    filter: filterReduser,
    [contctsApi.reducerPath]: contctsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contctsApi.middleware,
  ],
});

setupListeners(store.dispatch);
