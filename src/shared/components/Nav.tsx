import { useState } from "react";
import { Flex, Input, ScrollArea } from "@mantine/core";
import { useGetPokemonByNameQuery } from "../../features/pokemon/pokemonApiSlice";
import allNames from "../../constants/pokemonNamesGen1";
const Nav = () => {
    const [filteredNames, setFilteredNames] = useState([...allNames])
    const [value, setValue] = useState("");
    const [query, setQuery] = useState("");
    useGetPokemonByNameQuery(
        query,
        { skip: !query }
    );

    // Ivysaur 
    // Bulbasaur 
    const handleChange = (event) => {
        const searchQuery = event.currentTarget.value;
        setValue(searchQuery)
        setFilteredNames(
            [...allNames]
                .filter(item => item.includes(
                    searchQuery.trim()
                        .toLowerCase()
                ))
        )
    }

    const handleClick = (name: string) => {
        setQuery(name.trim().toLowerCase());
    };

    return (
        <>
            <Input
                value={value}
                onChange={handleChange}
                placeholder="Search ..."
            />
            search: {value}
            <ScrollArea h={'100%'}>
                <Flex direction={'column'}>
                    {filteredNames.length
                        ? filteredNames.map(item =>
                            <button onClick={() => handleClick(item)}>{item}</button>
                        )
                        : null}
                    {!filteredNames.length && <p>No Results</p>}
                </Flex>
            </ScrollArea>
        </>
    )
}

export default Nav;