import { useNavigate, useParams } from "react-router";
import {
    useGetPokemonQuery,
    useUpdatePokemonMutation,
    useDeletePokemonMutation,
    IPokemon
} from "./pokemonApiSlice";
import PokemonCard from "./PokemonCard";
import { Button, Container, Group, Image, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useEffect } from "react";

const PokemonDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const { data } = useGetPokemonQuery(id || "", { skip: !id });
    const [updatePokemon] = useUpdatePokemonMutation();
    const [deletePokemon] = useDeletePokemonMutation();

    const form = useForm<Pick<IPokemon, 'nickName'>>({
        mode: 'uncontrolled',
        initialValues: {
            nickName: "",
        }
    });

    useEffect(() => {
        if (data) {
            form.setValues({
                nickName: data.nickName
            });
        }
    }, [data]);

    const handleSubmit = (values: typeof form.values) => {
        if (id) {
            updatePokemon({
                ...values,
                _id: id
            });
        }
    }

    const handleDelete = async () => {
        if (!id) {
            return;
        }
        try {
            await deletePokemon(id).unwrap();
            navigate('/pokemon/');
        } catch (error) {
            console.error('rejected', error);
        }
    }

    return (
        <>
            <h1>PokemonDetailPage</h1>
            <Container>
                <form onSubmit={form.onSubmit(handleSubmit)}>
                    {data && <Image src={data.image} w='200px' />}
                    <TextInput
                        label="Nick Name"
                        placeholder="Enter nick name ..."
                        key={form.key('nickName')}
                        {...form.getInputProps('nickName')}
                    />
                    <Group justify="flex-end" mt="md">
                        <Button color="red" variant="outline" onClick={handleDelete}>
                            Delete
                        </Button>
                        <Button type="submit">
                            Save
                        </Button>
                    </Group>
                </form>
            </Container>
        </>
    )
}

export default PokemonDetailPage;