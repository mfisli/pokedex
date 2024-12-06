import { Flex, Grid, Text } from "@mantine/core"
import { useGetPokemonListQuery } from "./pokemonApiSlice";
import { Link } from "react-router";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
    const { data } = useGetPokemonListQuery();

    return (
        <Grid>
            {data && data?.map(item =>
                <Grid.Col span={4} key={item._id}>
                    <Link to={`/pokemon/${item._id}`}>
                        <PokemonCard data={item} />
                    </Link>
                </Grid.Col>
            )}
            {data && !data.length &&
                <Grid.Col span={12}>
                    <Flex justify='center'>
                        <Text>
                            No staff pokemon found. Find new pokemon in the candidates tab.
                        </Text>
                    </Flex>
                </Grid.Col>
            }
        </Grid>
    )
}

export default PokemonList;