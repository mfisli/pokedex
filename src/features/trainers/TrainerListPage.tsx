import { Tabs, Flex, Group, ScrollArea, Text, Button, Image, Stack, Title, Card, Grid, Container } from "@mantine/core";
import { Trainer, useCreateTrainerMutation, useGetGeneratedTrainersListQuery, useGetTrainersListQuery } from "./trainersApiSlice";
import { Link } from "react-router";
import { useGetTraitsListQuery } from "../traits/traitsApiSlice";
import TrainerCard from "./TrainerCard";
import TrainersList from "./TrainersList";
import CandidateTrainerList from "./CandidateTrainerList";

const tabItems = {
    staff: "staff",
    candidates: "candidates"
}

const TrainerListPage = () => {
    const { data } = useGetTrainersListQuery();
    const { data: generatedData } = useGetGeneratedTrainersListQuery();
    const { data: traitsData } = useGetTraitsListQuery();
    const [createTrainer] = useCreateTrainerMutation();

    let traitsMap = null;
    traitsMap = traitsData?.reduce((acc: any, curr) => {
        if (curr._id) {
            acc[curr._id] = curr.name
        }
        return acc;
    }, {});

    return (
        <>
            <h1>Trainers Page</h1>
            <Tabs defaultValue={tabItems.staff}>
                <Tabs.List>
                    <Tabs.Tab value={tabItems.staff}>
                        {tabItems.staff}
                    </Tabs.Tab>
                    <Tabs.Tab value={tabItems.candidates}>
                        {tabItems.candidates}
                    </Tabs.Tab>
                </Tabs.List>
                <Container pt='md'>
                    <Tabs.Panel value={tabItems.staff}>
                        <TrainersList />
                    </Tabs.Panel>
                    <Tabs.Panel value={tabItems.candidates}>
                        <CandidateTrainerList />
                    </Tabs.Panel>
                </Container>
            </Tabs>
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        </>
    )
}

export default TrainerListPage;