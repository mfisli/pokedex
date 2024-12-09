import { Link } from "react-router";
import { useGetPokemonListQuery } from "./pokemonApiSlice";
import PokemonList from "./PokemonList";
import { Container, Tabs, Text } from "@mantine/core";
import CaughtPokemonList from "./CaughtPokemonList";

const tabItems = {
    tame: "tame",
    caught: "caught"
}

const PokemonListPage = () => {
    return (
        <>
            <Text>Trainers Page</Text>
            <Tabs defaultValue={tabItems.tame}>
                <Tabs.List>
                    <Tabs.Tab value={tabItems.tame}>
                        {tabItems.tame}
                    </Tabs.Tab>
                    <Tabs.Tab value={tabItems.caught}>
                        {tabItems.caught}
                    </Tabs.Tab>
                </Tabs.List>
                <Container pt='md'>
                    <Tabs.Panel value={tabItems.tame}>
                        <PokemonList />
                    </Tabs.Panel>
                    <Tabs.Panel value={tabItems.caught}>
                        <CaughtPokemonList />
                    </Tabs.Panel>
                </Container>
            </Tabs>
        </>
    )
}

export default PokemonListPage;