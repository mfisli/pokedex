import { Flex, Grid, Text } from "@mantine/core"
import { useGetTrainersListQuery } from "./trainersApiSlice";
import { Link } from "react-router";
import TrainerCard from "./TrainerCard";

const TrainersList = () => {
    const { data } = useGetTrainersListQuery();

    return (
        <Grid>
            {data && data?.map(item =>
                <Grid.Col span={4} key={item._id}>
                    <Link to={`/trainers/${item._id}`}>
                        <TrainerCard data={item} />
                    </Link>
                </Grid.Col>
            )}
            {data && !data.length &&
                <Grid.Col span={12}>
                    <Flex justify='center'>
                        <Text>
                            No staff trainers found. Find new trainers in the candidates tab.
                        </Text>
                    </Flex>
                </Grid.Col>
            }
        </Grid>
    )
}

export default TrainersList;