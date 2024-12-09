import { Tabs, Container, Text, Table } from "@mantine/core";
import { useGetTraitsListQuery } from "./traitsApiSlice";
import { useGetElementalTypesQuery } from "../elementalTypes/elementalTypesApiSlice";

const TraitsListPage = () => {
    const { data } = useGetTraitsListQuery();
    const { data: dataElementalTypes } = useGetElementalTypesQuery();

    let elementalTypesMap;
    elementalTypesMap = dataElementalTypes?.reduce((acc: any, curr) => {
        acc[curr._id || ""] = curr.name
        return acc;
    }, {});

    console.log("elementalTypesMap", elementalTypesMap, "data", data);

    const rows = data?.map((trait) => (
        <Table.Tr key={trait?._id}>
            <Table.Td>{trait?.name}</Table.Td>
            <Table.Td>
                {
                    elementalTypesMap && trait?.elementalTypeIdList
                        .map(item => <span key={item}>{elementalTypesMap[item]?.name}</span>)
                }
            </Table.Td>
        </Table.Tr>
    ));

    return (
        <>
            <Text>Traits List Page</Text>
            <Table>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Name</Table.Th>
                        <Table.Th>Elemental Types</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </>

    )
}

export default TraitsListPage;