import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import httpMethods from '../../utils/httpMethods';
import { IPokemon } from '../pokemon/pokemonApiSlice';

export interface Trainer {
    _id?: string;
    firstName: string,
    lastName: string,
    image?: string,
    bio?: string,
    pokemonIdList?: string[],
    traitIdList?: string[],
    flaws?: any[]
}

const baseUrl = 'http://localhost:3000/api/';
const pathPrefix = 'trainers';
const trainerCacheTags = {
    trainer: 'trainer',
    candidate: 'candidate'
}

export const trainersApiSlice = createApi({
    reducerPath: 'trainersApi',
    baseQuery: fetchBaseQuery({
        baseUrl
    }),
    tagTypes: [trainerCacheTags.trainer, trainerCacheTags.trainer],
    endpoints: (builder) => ({
        getTrainer: builder.query<Trainer, string>({
            query: (id) => `${pathPrefix}/${id}`,
            providesTags: (result) => [trainerCacheTags.trainer, result?._id || ""]
        }),
        getGeneratedTrainersList: builder.query<Trainer[], void>({
            query: () => `${pathPrefix}/generate`,
            providesTags: [trainerCacheTags.candidate]
        }),
        getTrainersList: builder.query<Trainer[], void>({
            query: () => pathPrefix,
            providesTags: [trainerCacheTags.trainer]
        }),
        createTrainer: builder.mutation<{}, Trainer>({
            query: (body) => ({
                url: pathPrefix,
                method: httpMethods.post,
                body: body
            }),
            invalidatesTags: [trainerCacheTags.trainer]
        }),
        updateTrainer: builder.mutation<{}, Trainer>({
            query: ({ _id, ...body }) => ({
                url: `${pathPrefix}/${_id}`,
                method: httpMethods.patch,
                body
            }),
            invalidatesTags: [trainerCacheTags.trainer]
        }),
        deleteTrainer: builder.mutation<void, string>({
            query: (id) => ({
                url: `${pathPrefix}/${id}`,
                method: httpMethods.delete
            }),
            invalidatesTags: [trainerCacheTags.trainer]
        })
    })
});

export const {
    useGetTrainerQuery,
    useGetTrainersListQuery,
    useCreateTrainerMutation,
    useUpdateTrainerMutation,
    useDeleteTrainerMutation,
    useGetGeneratedTrainersListQuery
} = trainersApiSlice