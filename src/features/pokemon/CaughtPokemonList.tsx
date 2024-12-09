import { Button, Flex, Grid, Stack, Text } from "@mantine/core"
import {
    pokemonStatuses,
    useCreateGeneratedPokemonMutation,
    useDeletePokemonMutation,
    useGetPokemonListByStatusQuery,
    useUpdatePokemonMutation
} from "./pokemonApiSlice";
import PokemonCard from "./PokemonCard";

const CaughtPokemonList = () => {
    const { data, refetch } = useGetPokemonListByStatusQuery(
        { status: pokemonStatuses.caught }
    );
    const [createGeneratedPokemon] = useCreateGeneratedPokemonMutation();
    const [deletePokemon] = useDeletePokemonMutation();
    const [updatePokemon] = useUpdatePokemonMutation();

    const handleCatchMorePokemon = async () => {
        try {
            await createGeneratedPokemon().unwrap();
            refetch();
        } catch (error) {
            console.error('rejected', error);
        }
    }

    const handleAddPokemon = (id: string) => {
        if (id) {
            updatePokemon({ _id: id, status: pokemonStatuses.tame });
        }
    }

    const handleDeletePokemon = (id: string) => {
        if (id) {
            deletePokemon(id);
        }
    }

    return (
        <Stack>
            <Grid>
                {data && data?.map(item =>
                    <Grid.Col span={4} key={item._id}>
                        <PokemonCard data={item}>
                            <Button
                                variant='outline'
                                color='red'
                                onClick={() => handleDeletePokemon(item._id || "")}
                            >
                                Release
                            </Button>
                            <Button
                                onClick={() => handleAddPokemon(item._id || "")}
                            >
                                Add
                            </Button>
                        </PokemonCard>
                    </Grid.Col>
                )}
                {data && !data.length &&
                    <Grid.Col span={12}>
                        <Flex justify='center'>
                            <Text>
                                No caught pokemon to show.
                            </Text>
                        </Flex>
                    </Grid.Col>
                }
            </Grid>
            <Flex justify='center' my='md'>
                <Button variant="outline" onClick={handleCatchMorePokemon}>
                    Catch More Pokemon
                </Button>
            </Flex>
        </Stack>
    )
}

export default CaughtPokemonList;
