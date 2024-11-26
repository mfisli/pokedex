import { Container, Flex, Group, ScrollArea, Text, Button, Grid } from "@mantine/core";
import Search from "./Search";
import { useNavigate, useParams } from "react-router";
import { useGetPokemonByNameQuery } from "./pokemonApiSlice";
import Detail from "./Detail";
import { getNeighborsByName } from "../../utils/getPokemonList";

const SearchPage = () => {
    const navigate = useNavigate();
    let { name } = useParams();
    const { data } = useGetPokemonByNameQuery(name || "", { skip: !name });
    const [prev, next] = getNeighborsByName(name || "");

    const handlePrev = () => {
        if (prev) {
            navigate('/search/' + prev.name);
        }
    };

    const handleNext = () => {
        if (next) {
            navigate('/search/' + next.name);
        }
    };

    return (
        <Group>
            <ScrollArea h={'100vh'}>
                <Search />
            </ScrollArea>
            <Container>
                <Flex justify='start' align='top'>
                    {data &&
                        <Grid>
                            <Grid.Col span={3}>
                                <Button onClick={handlePrev} variant="outline" color='gray'>
                                    <Text component="span" tt="capitalize">
                                        {`← #${prev?.number} ${prev?.name}`}
                                    </Text>
                                </Button>
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <Detail />
                            </Grid.Col>
                            <Grid.Col span={3}>
                                <Button onClick={handleNext} variant="outline" color='gray'>
                                    <Text component="span" tt="capitalize">
                                        {`#${next?.number} ${next?.name} →`}
                                    </Text>
                                </Button>
                            </Grid.Col>
                        </Grid>
                    }
                    {!data && <Text>Select an item ...</Text>}
                </Flex>
            </Container>
        </Group>
    )
}

export default SearchPage;