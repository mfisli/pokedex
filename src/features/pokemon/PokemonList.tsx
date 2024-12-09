import { Flex, Grid, Text } from "@mantine/core"
import {
    pokemonStatuses,
    useGetPokemonListByStatusQuery
} from "./pokemonApiSlice";
import { Link } from "react-router";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
    const { data } = useGetPokemonListByStatusQuery(
        { status: pokemonStatuses.tame }
    );

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
                            Your pokemon collections is empty.
                            Find new pokemon in the caught tab.
                        </Text>
                    </Flex>
                </Grid.Col>
            }
        </Grid>
    )
}

export default PokemonList;