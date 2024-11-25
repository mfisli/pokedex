import { useParams } from "react-router";
import { useGetPokemonByNameQuery } from "./pokemonApiSlice";

const Image = ({ url, alt }) => {

    if (!url) {
        return null;
    }

    return (
        <>
            <img src={url} alt={alt || ""} />
            {/* <pre>{JSON.stringify(data)}</pre> */}
        </>
    )
}

export default Image;