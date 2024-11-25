import { Container, Flex, Group, ScrollArea, Stack } from "@mantine/core";
import Search from "./Search";
import Image from "./Image";
import { useParams } from "react-router";
import { useGetPokemonByNameQuery } from "./pokemonApiSlice";
import Audio from "../../shared/components/Audio";

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
                            <Audio src={data.cries.legacy} />
                            <p>Height: {data?.height}</p>
                            <p>Weight: {data?.weight}</p>
                            <span>Types</span>
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