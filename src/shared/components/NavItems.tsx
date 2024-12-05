import { Stack } from "@mantine/core";
import { Link } from "react-router";

const NavItems = () => {
    return (
        <Stack>
            <Link to="/">Home</Link>
            <Link to="/search">Search</Link>
            <Link to="/trainers">Trainers</Link>
        </Stack>
    )
}

export default NavItems;