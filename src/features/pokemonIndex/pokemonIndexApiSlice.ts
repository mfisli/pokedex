import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface IPokemonIndex {
    id: number,
    name: string;
    height: number;
    weight: number;
    sprites: {
        versions: {
            ['generation-i']: {
                yellow: {
                    front_default: string
                }
            }
        }
    }
    types: {
        slot: number,
        type: {
            name: string;
        }
    }[],
    cries: {
        legacy: string
    },
}

export const pokemonIndexApiSlice = createApi({
    reducerPath: 'pokemonIndexApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://pokeapi.co/api/v2/'
    }),
    endpoints: (builder) => ({
        getPokemonByName: builder.query<IPokemonIndex, string | null>({
            query: (name) => `pokemon/${name}`
        })
    })
});

export const { useGetPokemonByNameQuery } = pokemonIndexApiSlice;