export const types = {
    normal: "normal",
    fire: "fire",
    water: "water",
    grass: "grass",
    electric: "electric",
    ice: "ice",
    fighting: "fighting",
    poison: "poison",
    ground: "ground",
    flying: "flying",
    psychic: "psychic",
    bug: "bug",
    rock: "rock",
    ghost: "ghost",
    dragon: "dragon"
}

const colorMap = {
    [types.normal]: '#9FA19F',
    [types.fire]: '#E62829',
    [types.water]: '#2980EF',
    [types.grass]: '#3FA129',
    [types.electric]: '#FAC000',
    [types.ice]: '#3DCEF3',
    [types.fighting]: '#FF8000',
    [types.poison]: '#9141CB ',
    [types.ground]: '#915121',
    [types.flying]: '#81B9EF',
    [types.psychic]: '#EF4179',
    [types.bug]: '#91A119',
    [types.rock]: '#AFA981',
    [types.ghost]: '#704170',
    [types.dragon]: '#5060E1',
}

const getColorByType = (type: string): string => {
    return colorMap[type] || colorMap[types.normal];
}

export default getColorByType;

/*
[
    "normal",
    "fire",
    "water",
    "grass",
    "electric",
    "ice",
    "fighting",
    "poison",
    "ground",
    "flying",
    "psychic",
    "bug",
    "rock",
    "ghost",
    "dragon"
]
*/