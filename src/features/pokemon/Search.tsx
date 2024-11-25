import { useState } from "react";
import { Button, CloseButton, Flex, Input, Text } from "@mantine/core";
import { useGetPokemonByNameQuery } from "../../features/pokemon/pokemonApiSlice";
import allNames from "../../constants/pokemonNamesGen1";
import getPokemonList from "../../utils/getPokemonList";
import { useNavigate } from "react-router";

const list = getPokemonList();

const Search = () => {
    const [filteredNames, setFilteredNames] = useState([...list])
    const [value, setValue] = useState("");
    const [query, setQuery] = useState("");
    useGetPokemonByNameQuery(
        query,
        { skip: !query }
    );
    const navigate = useNavigate();

    // Ivysaur 
    // Bulbasaur 
    const handleChange = (event?) => {
        const searchQuery = event?.currentTarget?.value || "";
        setValue(searchQuery)
        setFilteredNames(
            [...list]
                .filter(item => item.name.includes(
                    searchQuery.trim()
                        .toLowerCase()
                ))
        )
    }

    const handleClick = (name: string) => {
        setQuery(name.trim().toLowerCase());
        navigate('/search/' + name);
    };

    return (
        <>
            <Input
                value={value}
                onChange={handleChange}
                placeholder="Search ..."
                mb='md'
                rightSectionPointerEvents="all"
                rightSection={
                    <CloseButton
                        aria-label="Clear input"
                        onClick={handleChange}
                        style={{ display: value ? undefined : 'none' }}
                    />}
            />
            <Flex direction={'column'}>
                {filteredNames.length
                    ? filteredNames.map(item =>
                        <Button
                            color="gray"
                            justify="start"
                            mb='2'
                            key={item.number}
                            onClick={() => handleClick(item.name)}
                        >
                            <img key={item.number} src={`${item.menuSpriteFile}`} />
                            <Text ps="5">
                                {`#${item.number} ${item.name}`}
                            </Text>
                        </Button>
                    )
                    : null}
                {!filteredNames.length && <p>No Results</p>}
            </Flex>
        </>
    )
}

export default Search;