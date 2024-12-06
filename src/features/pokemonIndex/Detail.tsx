import { Card, Flex, Group, Image, Title, Text, Badge } from "@mantine/core";
import { useParams } from "react-router";
import { useGetPokemonByNameQuery } from "./pokemonIndexApiSlice";
import Audio from "../../shared/components/Audio";
import getColorByType from "../../utils/getColorByType";
import getSimplePokemonJSON from "../../utils/getSimplePokemonJSON";

const Detail = () => {
    let { name } = useParams();
    const { data } = useGetPokemonByNameQuery(name || "", { skip: !name });

    const typeList = data?.types.map(item => (
        <Badge
            color={getColorByType(item.type.name)}
            key={item.type.name}
        >
            {item.type.name}
        </Badge>
    ))

    return (
        <>
            {data &&
                <Card withBorder radius="md">
                    <Card.Section p='md'>
                        <Image
                            fit="contain"
                            src={data?.sprites.versions["generation-i"].yellow.front_default}
                            alt={data?.name}
                            className="aspect-ratio-1-1"
                        />
                    </Card.Section>
                    <Card.Section px='md' py='sm'>
                        <Title
                            tt="capitalize"
                            ta="center"
                            order={1}
                            pb="mid"
                        >
                            {data?.name}
                        </Title>
                    </Card.Section>
                    <Card.Section px='md' py='xs'>
                        <Flex>
                            <Audio src={data.cries.legacy} />
                        </Flex>
                    </Card.Section>
                    <Card.Section px='md' py='sm'>
                        <Group gap={7}>
                            {typeList}
                        </Group>
                    </Card.Section>
                    <Card.Section px='md' pb='sm'>
                        <Group>
                            <Text>
                                Height: {data?.height / Math.pow(10, 1)} m
                            </Text>
                            <Text>
                                Weight: {data?.weight} kg
                            </Text>
                        </Group>
                    </Card.Section>
                    <Card.Section>
                        <pre>
                            {JSON.stringify(
                                getSimplePokemonJSON(data),
                                null,
                                4
                            )}
                        </pre>
                    </Card.Section>
                </Card>
            }
        </>
    )
}

export default Detail;