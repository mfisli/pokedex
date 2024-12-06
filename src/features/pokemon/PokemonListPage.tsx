import { Link } from "react-router";
import { useGetPokemonListQuery } from "./pokemonApiSlice";
import PokemonList from "./PokemonList";

const tabItems = {
    collection: "collection",
    caught: "caught"
}

const PokemonListPage = () => {
    const { data } = useGetPokemonListQuery();

    return (
        <>
            <h1>PokemonListPage</h1>
            <PokemonList />
        </>
    )
}

export default PokemonListPage;