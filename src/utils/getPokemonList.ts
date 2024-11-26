import names from "../constants/pokemonNamesGen1";
import menuSprites, { defaultSprite } from "../constants/pokemonMenuSpritesGen1";

export interface PokemonList {
    number: number;
    name: string;
    menuSpriteFile: string;
}

let pokemonList: PokemonList[] = [];

const getPokemonList = (): PokemonList[] => {
    const getList = () => {
        pokemonList = names.map((name, index) => {
            return {
                name,
                number: index + 1,
                menuSpriteFile: menuSprites
                    .find(item => item.pokemonIdList
                        .includes(index + 1)
                    )?.fileName
                    || defaultSprite
            }});
        };
    if (!pokemonList.length) {
        getList();
    }
    return pokemonList;
}

// Returns a tuple of prev and next neighbors or null if not found
export const getNeighborsByName = (name: string) => { 
    const list = getPokemonList();
    const index = list.findIndex(item => item.name === name);
    if (index === -1) {
        return [null, null];
    }
    return [
        index === 0 ? list[list.length - 1] : list[index - 1],
        index === list.length - 1 ? list[0] : list[index + 1]
    ]
}

export default getPokemonList;