import names from "../constants/pokemonNamesGen1";
import menuSprites, { defaultSprite } from "../constants/pokemonMenuSpritesGen1";

export interface PokemonList {
    number: number;
    name: string;
    menuSpriteFile: string;
}

const getPokemonList = (): PokemonList[] => {
    return names.map((name, index) => {
        return {
            name,
            number: index + 1,
            menuSpriteFile: menuSprites
                .find(item => item.pokemonIdList.includes(index + 1))?.fileName || defaultSprite
        }
    })
    
}

export default getPokemonList;