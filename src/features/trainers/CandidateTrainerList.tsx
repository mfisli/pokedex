import { Button, Flex, Grid } from "@mantine/core"
import { Trainer, useCreateTrainerMutation, useGetGeneratedTrainersListQuery } from "./trainersApiSlice";
import TrainerCard from "./TrainerCard";
import { useState } from "react";

const CandidateTrainerList = () => {
    const { data, refetch } = useGetGeneratedTrainersListQuery();
    const [createTrainer] = useCreateTrainerMutation();
    const [createdList, setCreatedList] = useState<number[]>([]);

    const handleCreateTrainer = (values: Trainer, index: number) => {
        createTrainer(values);
        setCreatedList(prev => {
            prev.push(index);
            return prev;
        });
    }

    const handleFindDifferentCandidates = () => {
        refetch();
        setCreatedList([]);
    }

    return (
        <>
            <Grid>
                {data && data?.map((item, index) =>
                    <Grid.Col span={4} key={index}>
                        <TrainerCard data={item}>
                            <Button
                                disabled={createdList.includes(index)}
                                onClick={() => handleCreateTrainer(item, index)}
                            >
                                {createdList.includes(index) ? 'Hired!' : 'Hire Trainer'}
                            </Button>
                        </TrainerCard>
                    </Grid.Col>
                )}
            </Grid>
            <Flex justify='center' my='md'>
                <Button variant="outline" onClick={handleFindDifferentCandidates}>
                    Find Different Candidates
                </Button>
            </Flex>
        </>
    )
}

export default CandidateTrainerList;