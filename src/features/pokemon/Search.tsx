import { useState } from "react";
import { CloseButton, Flex, Input, ScrollArea } from "@mantine/core";
import { useGetPokemonByNameQuery } from "../../features/pokemon/pokemonApiSlice";
import allNames from "../../constants/pokemonNamesGen1";
import { useNavigate } from "react-router";
const Search = () => {
    const [filteredNames, setFilteredNames] = useState([...allNames])
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
            [...allNames]
                .filter(item => item.includes(
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
                        <button key={item} onClick={() => handleClick(item)}>{item}</button>
                    )
                    : null}
                {!filteredNames.length && <p>No Results</p>}
            </Flex>
        </>
    )
}

export default Search;