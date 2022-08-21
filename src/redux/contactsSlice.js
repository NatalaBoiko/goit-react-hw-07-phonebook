// https://62fce052b9e38585cd47e248.mockapi.io/api/v1

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contctsApi = createApi({
  reducerPath: 'contcts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62fce052b9e38585cd47e248.mockapi.io/api/v1',
  }),
  tagTypes: ['contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['contacts'],
    }),
  }),
});

export const { useGetContactsQuery } = contctsApi;
