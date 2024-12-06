import { Container, Flex, Group, ScrollArea, Text, Button, Image, TextInput, Select, MultiSelect } from "@mantine/core";
import { Trainer, useCreateTrainerMutation, useDeleteTrainerMutation, useGetTrainerQuery, useUpdateTrainerMutation } from "./trainersApiSlice";
import { useNavigate, useParams } from "react-router";
import { useForm } from "@mantine/form";
import { useEffect } from "react";
import { useGetTraitsListQuery } from "../traits/traitsApiSlice";

const TrainerDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const { data } = useGetTrainerQuery(id || "", { skip: !id || id === 'new' });
    const { data: traitsData } = useGetTraitsListQuery();
    const selectTraitsOptions = traitsData
        ?.map(item => ({
            value: item._id || "",
            label: item.name
        }));
    console.log("selectTraitsOptions", selectTraitsOptions);

    const [createTrainer] = useCreateTrainerMutation();
    const [updateTrainer] = useUpdateTrainerMutation();
    const [deleteTrainer] = useDeleteTrainerMutation();

    const form = useForm<Trainer>({
        mode: 'uncontrolled',
        initialValues: {
            firstName: "",
            lastName: "",
            traitIdList: []
        }
    });

    useEffect(() => {
        console.log("useEffect", data);
        if (data) {
            form.setValues({
                firstName: data.firstName,
                lastName: data.lastName,
                traitIdList: data.traitIdList || []
            });
        }
    }, [data]);

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
            <pre>{JSON.stringify(data)}</pre>
            <form onSubmit={form.onSubmit(handleSubmit)}>
                {data && <Image src={"http://localhost:3000" + data.image} w='200px' />}
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
                <MultiSelect
                    label="Traits"
                    placeholder="Pick value"
                    key={form.key('traitIdList')}
                    data={selectTraitsOptions || []}
                    searchable
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