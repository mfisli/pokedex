import { Tabs, Container, Text } from "@mantine/core";
import {
    useCreateTrainerMutation,
    useGetGeneratedTrainersListQuery,
    useGetTrainersListQuery
} from "./trainersApiSlice";
import { useGetTraitsListQuery } from "../traits/traitsApiSlice";
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
            <Text>Trainers Page</Text>
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