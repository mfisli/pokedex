import { Card, Flex, Group, Title, Text, Image } from "@mantine/core"
import { IPokemon } from "./pokemonApiSlice"
import Audio from "../../shared/components/Audio"

const PokemonCard = ({ data }: { data: IPokemon }) => {
    return (
        <Card withBorder radius="md">
            <Card.Section p='md'>
                <Image
                    fit="contain"
                    src={data?.image}
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
                    {data?.nickName || data?.name}
                </Title>
            </Card.Section>
            <Card.Section px='md' py='xs'>
                <Flex>
                    <Audio src={data.sound} />
                </Flex>
            </Card.Section>
            <Card.Section px='md' py='sm'>
                <Group gap={7}>
                    {JSON.stringify(data.elementalTypeIdList)}
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
        </Card>
    )
}

export default PokemonCard;