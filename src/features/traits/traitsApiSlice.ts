import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import httpMethods from '../../utils/httpMethods';

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
        }),
        getTrait: builder.query<Trait, string>({
            query: (id) => `${pathPrefix}/${id}`
        }),
        createTrait: builder.mutation<Trait, Trait>({
            query: (body) => ({
                url: pathPrefix,
                method: httpMethods.post,
                body
            })
        }),
        updateTrait: builder.mutation<Trait, Trait>({
            query: ({ _id, ...body }) => ({
                url: `${pathPrefix}/${_id}`,
                method: httpMethods.patch,
                body
            })
        }),
        deleteTrait: builder.mutation<void, string>({
            query: (id) => ({
                url: `${pathPrefix}/${id}`,
                method: httpMethods.delete
            })
        })
    })
});

export const {
    useGetTraitsListQuery,
    useGetTraitQuery,
    useCreateTraitMutation,
    useUpdateTraitMutation,
    useDeleteTraitMutation
} = traitsApiSlice;