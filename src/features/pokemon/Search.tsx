import { useState } from "react";
import { Button, CloseButton, Flex, Input, Text } from "@mantine/core";
import { useGetPokemonByNameQuery } from "../../features/pokemon/pokemonApiSlice";
import pokemonList from "../../utils/getPokemonList";
import { useNavigate, useParams } from "react-router";

const list = pokemonList();

const Search = () => {
    let { name } = useParams();
    const [filteredNames, setFilteredNames] = useState([...list])
    const [value, setValue] = useState("");
    const [query, setQuery] = useState("");
    useGetPokemonByNameQuery(
        query,
        { skip: !query }
    );
    const navigate = useNavigate();

    const handleChange = (event?: any) => {
        const searchQuery = event?.target?.value || "";
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
            <Input.Wrapper label="Search">
                <Input
                    value={value}
                    onChange={handleChange}
                    placeholder="Enter name ..."
                    mb='md'
                    rightSectionPointerEvents="all"
                    rightSection={
                        <CloseButton
                            aria-label="Clear input"
                            onClick={handleChange}
                            style={{ display: value ? undefined : 'none' }}
                        />}
                />
            </Input.Wrapper>
            <Flex direction={'column'}>
                {filteredNames.length
                    ? filteredNames.map(item =>
                        <Button
                            color={name === item.name ? 'dark' : 'gray'}
                            justify="start"
                            variant={name === item.name ? 'outline' : 'default'}
                            mb='2'
                            key={item.number}
                            onClick={() => handleClick(item.name)}
                        >
                            <img key={item.number} src={`${item.menuSpriteFile}`} alt={item.name} />
                            <Text ps="5" tt='capitalize'>
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