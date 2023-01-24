import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './CreateApiSlice';
import { contactsFilterSlice } from './FilterSlice';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: contactsFilterSlice.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
