import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import httpMethods from '../../utils/httpMethods';

export interface IPokemon {
    _id?: string,
    numberId: number;
    name: string;
    nickName: string;
    height: number;
    weight: number;
    sound: string;
    image: string;
    elementalTypeIdList: string[];
    // moveIdList: Types.ObjectId[];
}

const baseUrl = 'http://localhost:3000/api/';
const pathPrefix = 'pokemon';

// TODO tags
export const pokemonApiSlice = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({
        baseUrl
    }),
    endpoints: (builder) => ({
        getPokemonList: builder.query<IPokemon[], void>({
            query: () => pathPrefix
        }),
        getPokemon: builder.query<IPokemon, string>({
            query: (id) => `${pathPrefix}/${id}`
        }),
        createPokemon: builder.mutation<IPokemon, IPokemon>({
            query: (pokemon) => ({
                url: pathPrefix,
                method: httpMethods.post,
                body: pokemon
            })
        }),
        updatePokemon: builder.mutation<IPokemon, { nickName: string, _id: string}>({
            query: ({_id, ...body}) => ({
                url: `${pathPrefix}/${_id}`,
                method: httpMethods.patch,
                body
            })
        }),
        deletePokemon: builder.mutation<void, string>({
            query: (id) => ({
                url: `${pathPrefix}/${id}`,
                method:  httpMethods.delete
            })
        })
    })
});

export const {
    useGetPokemonListQuery,
    useGetPokemonQuery,
    useCreatePokemonMutation,
    useUpdatePokemonMutation,
    useDeletePokemonMutation
} = pokemonApiSlice;