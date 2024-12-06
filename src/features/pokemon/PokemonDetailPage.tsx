import { useParams } from "react-router";
import { useGetPokemonQuery } from "./pokemonApiSlice";

const PokemonDetailPage = () => {
    const { id } = useParams();
    const { data } = useGetPokemonQuery(id || "", { skip: !id });

    return (
        <>
            <h1>PokemonDetailPage</h1>
            <pre>
                {JSON.stringify(data, null, 2)}
            </pre>
        </>
    )
}

export default PokemonDetailPage;