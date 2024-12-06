import { Link } from "react-router";
import { useGetPokemonListQuery } from "./pokemonApiSlice";

const tabItems = {
    collection: "collection",
    caught: "caught"
}

const PokemonListPage = () => {
    const { data } = useGetPokemonListQuery();

    return (
        <>
            <h1>PokemonListPage</h1>
            {data?.map(item => <Link to={`/pokemon/${item._id}`}>{item.name}</Link>)}
        </>
    )
}

export default PokemonListPage;