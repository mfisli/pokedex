import { Card, Image, Title } from "@mantine/core";
import { useGetTraitsListQuery } from "../traits/traitsApiSlice";
import { Trainer } from "./trainersApiSlice";
import React from "react";

const TrainerCard = ({ data, children }: { data: Trainer, children?: React.ReactNode }) => {
    const { data: traitsData } = useGetTraitsListQuery();

    let traitsMap = null;
    traitsMap = traitsData?.reduce((acc: any, curr) => {
        if (curr._id) {
            acc[curr._id] = curr.name
        }
        return acc;
    }, {});

    return (
        <Card withBorder key={`${data.firstName} ${data.lastName}`}>
            <Card.Section p='md'>
                <Image src={"http://localhost:3000" + data.image} fit='contain' h={200} />
            </Card.Section>
            <Card.Section p='md'>
                <Title order={3}>
                    {`${data.firstName} ${data.lastName}`}
                </Title>
            </Card.Section>
            {traitsMap &&
                <Card.Section px='md'>
                    Traits: {data.traitIdList?.map(
                        (traitId) => traitsMap[traitId]
                    )}
                </Card.Section>
            }
            <Card.Section p='md'>
                Bio: {`${data.bio?.replace(/\p{Emoji}/gu, '')}`}
            </Card.Section>
            {children &&
                <Card.Section p='md'>
                    {children}
                </Card.Section>
            }
        </Card>
    )
}

export default TrainerCard;