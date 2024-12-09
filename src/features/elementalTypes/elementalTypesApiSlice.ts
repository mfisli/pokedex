import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface IElementalType {
    _id: string;
    name: string;
    color: string;
}

const baseUrl = 'http://localhost:3000/api/';
const pathPrefix = 'elementalTypes';

export const elementalTypesApiSlice = createApi({
    reducerPath: "elementalTypesApi",
    baseQuery: fetchBaseQuery({
        baseUrl
    }),
    endpoints: (builder) => ({
        getElementalTypes: builder.query<IElementalType[], void>({
            query: () => pathPrefix
        })
    })
})

export const {
    useGetElementalTypesQuery
} = elementalTypesApiSlice