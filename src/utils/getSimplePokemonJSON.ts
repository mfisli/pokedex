import { IPokemon } from "../features/pokemonCollection/pokemonCollectionApiSlice";
import { IPokemonIndex } from "../features/pokemonIndex/pokemonIndexApiSlice";

const getSimplePokemonJSON = (complex: IPokemonIndex): IPokemon => ({
    numberId: complex.id,
    name: complex.name,
    height: complex.height,
    weight: complex.weight,
    sound: complex.cries.legacy,
    image: complex.sprites.versions["generation-i"].yellow.front_default,
    elementalTypeIdList: []
});

export default getSimplePokemonJSON;