import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Trait {
    _id?: string,
    name: string,
    elementalTypeIdList: string[],
}


const baseUrl = 'http://localhost:3000/api/';
const pathPrefix = 'traits';

export const traitsApiSlice = createApi({
    reducerPath: 'traitsApi',
    baseQuery: fetchBaseQuery({
        baseUrl
    }),
    endpoints: (builder) => ({
        getTraitsList: builder.query<Trait[], void>({
            query: () => pathPrefix
        })
    })
});

export const {
    useGetTraitsListQuery
} = traitsApiSlice;