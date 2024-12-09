import { IPokemon } from "../features/pokemon/pokemonApiSlice";
import { IPokemonIndex } from "../features/pokemonIndex/pokemonIndexApiSlice";

const getSimplePokemonJSON = (complex: IPokemonIndex): IPokemon => ({
    numberId: complex.id,
    name: complex.name,
    nickName: "",
    height: complex.height,
    weight: complex.weight,
    sound: complex.cries.legacy,
    image: complex.sprites.versions["generation-i"].yellow.front_default,
    status: 'wild',
    elementalTypeIdList: []
});

export default getSimplePokemonJSON;