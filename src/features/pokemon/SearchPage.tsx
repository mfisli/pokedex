import { Container, Flex, Group, ScrollArea, Stack } from "@mantine/core";
import Search from "./Search";
import Image from "./Image";
import { useParams } from "react-router";
import { useGetPokemonByNameQuery } from "./pokemonApiSlice";

const SearchPage = () => {
    let { id } = useParams();
    const { data } = useGetPokemonByNameQuery(id || "", { skip: !id });

    return (
        <Group>
            <ScrollArea h={'100vh'}>
                <Search />
            </ScrollArea>
            <Container>
                <Flex justify={{ sm: 'center' }} direction={'column'}>
                    {data &&
                        <>
                            <Image url={data?.sprites.front_default} alt={data?.name} />
                            <h2>{data?.name}</h2>
                            <p>Height: {data?.height}</p>
                            <p>Height: {data?.weight}</p>
                            <p>Types</p>
                            <ul>
                                {data?.types.map(item =>
                                    <li key={item.type.name}>{item.type.name}</li>)
                                }
                            </ul>
                        </>
                    }
                    {!data && <p>Choose something...</p>}
                </Flex>
            </Container>
        </Group>
    )
}

export default SearchPage;