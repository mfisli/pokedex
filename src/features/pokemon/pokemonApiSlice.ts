import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import httpMethods from '../../utils/httpMethods';
import getPokemonList from '../../utils/getPokemonList';

export const pokemonStatuses = {
    wild: "wild",
    caught: "caught",
    tame: "tame",
    feral: "feral"
} as const;

export interface IPokemon {
    _id?: string,
    numberId: number;
    name: string;
    nickName: string;
    height: number;
    weight: number;
    sound: string;
    image: string;
    status: typeof pokemonStatuses[keyof typeof pokemonStatuses];
    elementalTypeIdList: string[];
    // moveIdList: Types.ObjectId[];
}

export interface IPokemonStatusQuery {
    status: typeof pokemonStatuses[keyof typeof pokemonStatuses];
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
            query: () => pathPrefix,
        }),
        getPokemonListByStatus: builder.query<IPokemon[], IPokemonStatusQuery>({
            query: (status) => ({
                url: pathPrefix,
                params: status
            })
        }),
        getPokemon: builder.query<IPokemon, string>({
            query: (id) => `${pathPrefix}/${id}`
        }),
        createGeneratedPokemon: builder.mutation<IPokemon[], void>({
            query: () => ({
                url: `${pathPrefix}/generate`,
                method: httpMethods.post
            })
        }),
        createPokemon: builder.mutation<IPokemon, IPokemon>({
            query: (pokemon) => ({
                url: pathPrefix,
                method: httpMethods.post,
                body: pokemon
            })
        }),
        updatePokemon: builder.mutation<IPokemon, { status?: string, nickName?: string, _id: string }>({
            query: ({ _id, ...body }) => ({
                url: `${pathPrefix}/${_id}`,
                method: httpMethods.patch,
                body
            })
        }),
        deletePokemon: builder.mutation<void, string>({
            query: (id) => ({
                url: `${pathPrefix}/${id}`,
                method: httpMethods.delete
            })
        })
    })
});

export const {
    useGetPokemonListQuery,
    useGetPokemonQuery,
    useCreateGeneratedPokemonMutation,
    useCreatePokemonMutation,
    useUpdatePokemonMutation,
    useDeletePokemonMutation,
    useGetPokemonListByStatusQuery
} = pokemonApiSlice;