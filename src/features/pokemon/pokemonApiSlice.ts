import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pokemonApiSlice = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://pokeapi.co/api/v2/'
    }),
    endpoints: (builder) => ({
        getPokemonByName: builder.query<any, string>({ // TODO: replace any with Pokemon interface
            query: (name) => `pokemon/${name}`
        })
    })
});

export const { useGetPokemonByNameQuery } = pokemonApiSlice;