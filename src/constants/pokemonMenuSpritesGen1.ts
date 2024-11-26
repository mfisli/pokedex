import aquatic from "../assets/sprites/ms_aquatic.png"
import ball from "../assets/sprites/ms_ball.png"
import bird from "../assets/sprites/ms_bird.png"
import bug from "../assets/sprites/ms_bug.png"
import clefairy from "../assets/sprites/ms_clefairy.png"
import fossil from "../assets/sprites/ms_fossil.png"
import pikachu from "../assets/sprites/ms_pikachu.png"
import plant from "../assets/sprites/ms_plant.png"
import quadruped from "../assets/sprites/ms_quadruped.png"
import rhydon from "../assets/sprites/ms_rhydon.png"
import snake from "../assets/sprites/ms_snake.png"

export interface MenuSprite {
    type: string;
    pokemonIdList: number[];
    fileName: string;
}
export const defaultSprite = "ms_rhydon.png";

const menuSprites: MenuSprite[] = [
    {
        type: "aquatic",
        pokemonIdList: [7, 8, 9, 72, 73, 86, 87, 98, 99, 116, 117, 118, 119, 129, 131],
        fileName: aquatic

    },
    {
        type: "ball",
        pokemonIdList: [81, 82, 100, 101],
        fileName: ball

    },
    {
        type: "bird",
        pokemonIdList: [16, 17, 18, 21, 22, 83, 84, 85, 142, 144, 145, 146],
        fileName: bird

    },
    {
        type: "bug",
        pokemonIdList: [10, 11, 12, 13, 14, 15, 46, 47, 48, 49, 123, 127],
        fileName: bug

    },
    {
        type: "clefairy",
        pokemonIdList: [35, 36, 39, 40, 113],
        fileName: clefairy

    },
    {
        type: "fossil",
        pokemonIdList: [90, 91, 120, 121, 138, 139, 140, 141],
        fileName: fossil

    },
    {
        type: "pikachu",
        pokemonIdList: [25, 26],
        fileName: pikachu

    },
    {
        type: "plant",
        pokemonIdList: [1, 2, 3, 43, 44, 45, 69, 70, 71, 102, 103, 114],
        fileName: plant

    },
    {
        type: "quadruped",
        pokemonIdList: [19, 20, 37, 38, 57, 58, 59, 77, 78, 79, 11, 128, 133, 134, 135, 136],
        fileName: quadruped

    },
    {
        type: "rhydon",
        pokemonIdList: [4, 5, 6, 27, 28, 29, 30, 31, 32, 33, 34, 41, 42, 50, 51, 52, 53, 54, 55, 56, 60, 61, 62, 63, 64, 65, 66, 67, 68, 74, 75, 76, 80, 88, 89, 92, 93, 94, 96, 97, 104, 105, 106, 107, 108, 109, 110, 111, 112, 115, 122, 124, 125, 126, 132, 137, 143, 150, 151],
        fileName: rhydon

    },
    {
        type: "snake",
        pokemonIdList: [23, 24, 95, 130, 147, 148, 149],
        fileName: snake

    }
]

export default menuSprites;