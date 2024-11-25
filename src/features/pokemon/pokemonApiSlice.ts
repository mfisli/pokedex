import { createSelector } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



export interface Pokemon {
    name: string;
    height: number;
    sprites: {
        front_default: string;
    }
    types: {
        slot: number,
        type: {
            name: string;
        }
    }[]
}

export const pokemonApiSlice = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://pokeapi.co/api/v2/'
    }),
    endpoints: (builder) => ({
        getPokemonByName: builder.query<Pokemon, string | null>({
            query: (name) => `pokemon/${name}`
        })
    })
});

export const { useGetPokemonByNameQuery } = pokemonApiSlice;