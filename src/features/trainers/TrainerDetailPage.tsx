import { Container, Flex, Group, ScrollArea, Text, Button, Image, TextInput, Select, MultiSelect } from "@mantine/core";
import { Trainer, useCreateTrainerMutation, useDeleteTrainerMutation, useGetTrainerQuery, useUpdateTrainerMutation } from "./trainersApiSlice";
import { useNavigate, useParams } from "react-router";
import { useForm } from "@mantine/form";
import { useEffect } from "react";
import { useGetTraitsListQuery } from "../traits/traitsApiSlice";
import { pokemonStatuses, useGetPokemonListByStatusQuery } from "../pokemon/pokemonApiSlice";

const TrainerDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const { data: dataTrainer } = useGetTrainerQuery(id || "", { skip: !id || id === 'new' });
    const { data: dataTamePokemon } = useGetPokemonListByStatusQuery(
        { status: pokemonStatuses.tame }
    );

    const [createTrainer] = useCreateTrainerMutation();
    const [updateTrainer] = useUpdateTrainerMutation();
    const [deleteTrainer] = useDeleteTrainerMutation();

    const pokemonSelection = (dataTamePokemon || []).map(item => ({
        value: item._id || "",
        label: `${item.name}${item.nickName ? ` (${item.nickName})` : ""}`
    }))

    const form = useForm<Trainer>({
        mode: 'uncontrolled',
        initialValues: {
            firstName: "",
            lastName: "",
            bio: "",
            traitIdList: [],
            pokemonIdList: []
        }
    });

    useEffect(() => {
        console.log("useEffect", dataTrainer);
        if (dataTrainer) {
            form.setValues({
                firstName: dataTrainer.firstName,
                lastName: dataTrainer.lastName,
                bio: dataTrainer.bio,
                pokemonIdList: dataTrainer.pokemonIdList || []
            });
        }
    }, [dataTrainer]);

    const handleSubmit = (values: typeof form.values) => {
        console.log("values", values);
        if (id === 'new') {
            createTrainer(values);
        } else {
            updateTrainer({
                ...values,
                _id: id
            });
        }
    }

    const handleDelete = async () => {
        console.log("delete");
        if (!id) {
            return;
        }
        try {
            await deleteTrainer(id).unwrap();
            navigate('/trainers/');
        } catch (error) {
            console.error('rejected', error);
        }
    }

    return (
        <>
            <h1>Trainer Detail Page</h1>
            <pre>{JSON.stringify(dataTrainer, null, 2)}</pre>
            <form onSubmit={form.onSubmit(handleSubmit)}>
                {dataTrainer && <Image src={"http://localhost:3000" + dataTrainer.image} w='200px' />}
                <TextInput
                    label="First Name"
                    placeholder="Enter first name ..."
                    key={form.key('firstName')}
                    {...form.getInputProps('firstName')}
                />
                <TextInput
                    label="Last Name"
                    placeholder="Enter last name ..."
                    key={form.key('lastName')}
                    {...form.getInputProps('lastName')}
                />
                <TextInput
                    label="Bio"
                    placeholder=""
                    key={form.key('bio')}
                    {...form.getInputProps('bio')}
                />
                {/* <MultiSelect
                    label="Traits"
                    placeholder="Pick value"
                    key={form.key('traitIdList')}
                    data={selectTraitsOptions || []}
                    searchable
                /> */}
                <MultiSelect
                    label="Pokemon"
                    placeholder="Pick pokemon"
                    key={form.key('pokemonIdList')}
                    data={pokemonSelection}
                    searchable
                    {...form.getInputProps('pokemonIdList')}
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
        </>
    )
}

export default TrainerDetailPage;