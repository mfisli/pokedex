import { useAppSelector } from "../../app/hooks";
import { store } from "../../app/store";
import { pokemonApiSlice, selectPokemon, useGetPokemonByNameQuery } from "./pokemonApiSlice";

const Image = ({ name }) => {
    // const data = useAppSelector(store.getState().pokemonApi.queries);
    const { data, error, isLoading } = useGetPokemonByNameQuery(name, { skip: !name });
    // const data = null;

    return (
        <>
            {/* <p>Image {data?.sprites.front_default}</p> */}
            <img src={data?.sprites.front_default} alt="" />
            {/* <pre>{JSON.stringify(data)}</pre> */}
        </>
    )
}

export default Image;